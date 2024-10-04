package cse416.spring.database;

import cse416.spring.enums.StateName;
import cse416.spring.models.district.Deviation;
import cse416.spring.models.job.MGGGParams;
import cse416.spring.models.district.District;
import cse416.spring.models.district.DistrictReference;
import cse416.spring.models.districting.EnactedDistricting;
import cse416.spring.models.job.Job;
import cse416.spring.models.job.JobSummary;
import cse416.spring.models.precinct.Precinct;
import cse416.spring.service.DistrictingServiceImpl;
import cse416.spring.service.JobServiceImpl;
import cse416.spring.singletons.EmfSingleton;
import cse416.spring.singletons.PrecinctHashSingleton;
import org.json.JSONArray;
import org.json.JSONObject;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.io.IOException;
import java.util.*;
import java.util.concurrent.atomic.AtomicBoolean;

import static cse416.spring.helperclasses.FileReader.getFilesInFolder;
import static cse416.spring.helperclasses.FileReader.readJsonFile;

/**
 * A class that provides methods for persisting precincts, counties and
 * districtings into the database.
 */
public class DistrictingWriter {
    public static Set<Precinct> getPrecinctsFromKeys(JSONArray precinctKeys,
                                                           HashMap<Integer, Precinct> allPrecincts) {
        Set<Precinct> results = new HashSet<>();
        for (int i = 0; i < precinctKeys.length(); i++) {
            results.add(allPrecincts.get(precinctKeys.getInt(i)));
        }
        return results;
    }

    private static boolean areThreadsAlive(ArrayList<DistrictingWriterThread> threads) {
        for (DistrictingWriterThread thread : threads) {
            if (thread.isAlive()) {
                return true;
            }
        }
        return false;
    }

    public static void persistEnactedDistrictings() throws IOException {
        StateName stateName = StateName.LOUISIANA;
        String enactedFilePath = "/LA/la_enacted.json";
        JSONObject enactedJson = readJsonFile(enactedFilePath);
        JSONObject districting = enactedJson.getJSONArray("districtings").getJSONObject(0);
        Iterator<String> keys = districting.keys();
        Collection<District> districtsInDistricting = new HashSet<>();

        EntityManagerFactory emf = EmfSingleton.getEntityManagerFactory();
        HashMap<Integer, Precinct> precinctHash = PrecinctHashSingleton.getPrecinctHash(stateName);

        /* For each district in the districting */
        while (keys.hasNext()) {
            String districtKey = keys.next();
            JSONArray precinctKeysInDistrict = districting.getJSONArray(districtKey);
            Set<Precinct> precincts = getPrecinctsFromKeys(precinctKeysInDistrict, precinctHash);

            DistrictReference districtReference = new DistrictReference(stateName, enactedFilePath, 0, districtKey);
            District d = new District(precincts, stateName,districtReference);
            d.getMeasures().setDeviationFromEnacted(new Deviation(0,0));
            districtsInDistricting.add(d);
        }
        EntityManager em = emf.createEntityManager();
        EnactedDistricting enactedDistricting = new EnactedDistricting(stateName, districtsInDistricting);

        // Commit
        em.getTransaction().begin();
        em.persist(enactedDistricting);
        em.getTransaction().commit();
        em.close();
    }


    public static void persistDistrictings() throws IOException {
        final long startTime = System.currentTimeMillis();
        EntityManagerFactory emf = EmfSingleton.getEntityManagerFactory();
        EntityManager em = emf.createEntityManager();

        // Adjust job parameters here
        StateName state = StateName.LOUISIANA;
        int jobId = 2;
        MGGGParams params = new MGGGParams(10000, .10);
        int jobSize = 10000;
        String stateId = "LA";

        // Size will be set adaptively later
        JobSummary js = new JobSummary("Louisiana 10% max population difference.", params, jobSize);
        String jobFolderPath = "/json/"+stateId+"/districtings";

        Job existingJob = new JobServiceImpl(em).findById(jobId);
        Job job;
        if (existingJob == null) {
            job = new Job(jobId, state, js);
        } else {
            job = existingJob;
        }

        // ************************************ /

        HashMap<Integer, Precinct> precinctHash = PrecinctHashSingleton.getPrecinctHash(state);

        // Create entity managers for the threads
        int numThreads = 5;
        int workForEachThread = 10;
        int startFileNum = 0;
        int endFileNum = 3;
        int numFiles = endFileNum-startFileNum;
        int districtingsPerFile = 50;
        int totalDistrictingsToMake = numFiles * districtingsPerFile;
        String[] files = getFilesInFolder(jobFolderPath);
        EnactedDistricting enactedDistricting = new DistrictingServiceImpl(em).findEnactedByState(state);

        JobWriter.persistJob(job, em);
        em.close();

        // For every file in the folder . . .
        for (int i = startFileNum; i < endFileNum; i++) {
            ArrayList<EntityManager> ems = new ArrayList<>();
            for (int j = 0; j < numThreads; j++) {
                ems.add(emf.createEntityManager());
            }
            final long fileStartTime = System.currentTimeMillis();
            System.out.println("Starting file " + files[i]);
            JSONObject jo = readJsonFile("/"+stateId+"/districtings/" + files[i]);
            JSONArray districtings = jo.getJSONArray("districtings");

            ArrayList<DistrictingWriterThread> threads = new ArrayList<>();
            AtomicBoolean availableRef = new AtomicBoolean(true);

            // Create threads
            for (int j = 0; j < numThreads; j++) {
                DistrictingWriterThread newThread = new DistrictingWriterThread(state, job, "T" + j,
                        ems.get(j), enactedDistricting, districtings, "/"+stateId+"/districtings/" + files[i],
                        precinctHash, workForEachThread * (j), (j+1) * workForEachThread,
                        availableRef);
                threads.add(newThread);
            }

            // Start Multithreading
            for (DistrictingWriterThread thread : threads) {
                thread.start();
            }
            while (areThreadsAlive(threads)) {
            }

            final long fileEndTime = System.currentTimeMillis();
            System.out.println("[MAIN] Persisted " + files[i] + " in " + (fileEndTime - fileStartTime) + "ms");
            /* Close entity managers */
            for (EntityManager entityManager : ems) {
                entityManager.close();
            }
            System.out.println("Completed " + (districtingsPerFile*(i+1-startFileNum)) + "/" + totalDistrictingsToMake + " districtings.");
        }

        final long endTime = System.currentTimeMillis();
        System.out.println("[MAIN] Persisted a job (ID=" + jobId + ") of " + js.getSize() +
                " districtings in: " + (endTime - startTime) + "ms");
    }
}
