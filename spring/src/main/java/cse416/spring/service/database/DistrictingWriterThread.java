package cse416.spring.service.database;

import cse416.spring.enums.StateName;
import cse416.spring.models.district.District;
import cse416.spring.models.districting.Districting;
import cse416.spring.models.precinct.Precinct;
import org.json.JSONArray;
import org.json.JSONObject;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.concurrent.atomic.AtomicBoolean;

public class DistrictingWriterThread extends Thread {
    StateName stateName;
    int jobID;
    String name;
    EntityManager em;
    JSONArray districtings;
    HashMap<Integer, Precinct> precinctHash;
    int rangeStart;
    int rangeEndExclusive;
    AtomicBoolean availableRef;

    public DistrictingWriterThread(StateName stateName, int jobID, String name, EntityManager em,
                                   HashMap<Integer, Precinct> precinctHash, JSONArray districtings, int rangeStart,
                                   int rangeEndExclusive, AtomicBoolean availableRef) {

        this.stateName = stateName;
        this.jobID = jobID;
        this.name = name;
        this.em = em;
        this.precinctHash = precinctHash;
        this.districtings = districtings;
        this.rangeStart = rangeStart;
        this.rangeEndExclusive = rangeEndExclusive;
        this.availableRef = availableRef;
    }

    @Override
    public synchronized void start() {
        super.start();
    }

    private static ArrayList<Precinct> getPrecinctsFromKeys(JSONArray precinctKeys,
                                                            HashMap<Integer, Precinct> precinctHash) {
        ArrayList<Precinct> results = new ArrayList<>();
        for (int i = 0; i < precinctKeys.length(); i++) {
            results.add(precinctHash.get(precinctKeys.getInt(i)));
        }

        return results;
    }

    private void commit() {
        boolean first = true;

        while (true) {
            if (availableRef.compareAndSet(true, false)) {
                System.out.println("[THREAD " + name + "] Starting commit");
                final long startTime = System.currentTimeMillis();
                em.getTransaction().commit();
                final long endTime = System.currentTimeMillis();
                System.out.println("[THREAD " + name + "] Committed in: " + (endTime - startTime) + "ms");

                availableRef.set(true);
                break;
            } else {
                if (first) {
                    first = false;
                }
            }
        }
    }

    @Override
    public void run() {
        em.getTransaction().begin();

        /* For each districting */
        for (int i = rangeStart; i < rangeEndExclusive; i++) {
            JSONObject districting = districtings.getJSONObject(i);
            Iterator<String> keys = districting.keys();
            ArrayList<District> districtsInDistricting = new ArrayList<>();

            /* For each district in the districting */
            while (keys.hasNext()) {
                String districtID = keys.next();
                int districtNumber = Integer.parseInt(districtID);
                JSONArray precinctKeysInDistrict = districting.getJSONArray(districtID);
                ArrayList<Precinct> precincts = getPrecinctsFromKeys(precinctKeysInDistrict, precinctHash);

                // TODO: Change the null to the enacted districting
                District d = new District(districtNumber, precincts, stateName, null);
                districtsInDistricting.add(d);
                em.persist(d);
                System.out.println("[THREAD " + name + "] Created District.");
            }

            Districting newDistricting = new Districting(jobID, districtsInDistricting);
            em.persist(newDistricting);
        }
        commit();
    }
}