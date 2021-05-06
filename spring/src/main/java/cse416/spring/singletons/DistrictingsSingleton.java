package cse416.spring.singletons;

import cse416.spring.helperclasses.DistrictingConstraints;
import cse416.spring.models.districting.Districting;
import cse416.spring.service.DistrictingServiceImpl;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

public class DistrictingsSingleton {
    private static Collection<Districting> districtings = null;

    private DistrictingsSingleton() {}

    private static Collection<Districting> getDistrictingsFromDB(long jobId) {
        EntityManagerFactory emf = EmfSingleton.getEntityManagerFactory();
        EntityManager em = emf.createEntityManager();
        Collection<Districting> districtings = new DistrictingServiceImpl(em).findByJob(jobId);
        em.close();
        return districtings;
    }

    public static Collection<Districting> getDistrictings(long jobId) {
        if (districtings == null) {
            districtings = getDistrictingsFromDB(jobId);
        }
        return districtings;
    }

    public static Collection<Districting> getDistrictingsByConstraints(DistrictingConstraints constraints) {
        //TODO Move the entire filtering to the query, may need to add more properties to districting
        HashSet<Districting> filteredDistrictings = new HashSet<Districting>();
        if (districtings == null) {
            return filteredDistrictings;
        }
        for (Districting d : districtings) {
            switch (constraints.getCompactnessType()) {
                case POLSBY_POPPER:
                    if (d.getMeasures().getCompactnessAvg().getPolsbyPopper() < constraints.getCompactnessThreshold()) {
                        continue;
                    }
                    break;
                case GRAPH_COMPACTNESS:
                    if (d.getMeasures().getCompactnessAvg().getGraphCompactness() < constraints.getCompactnessThreshold()) {
                        continue;
                    }
                    break;
                case POPULATION_FATNESS:
                    if (d.getMeasures().getCompactnessAvg().getPopulationFatness() < constraints.getCompactnessThreshold()) {
                        continue;
                    }
            }
            int majorityMinorityDistrictsCount = d.getMMDistrictsCount(constraints.getMinorityPopulation(), constraints.getMinorityThreshold());
            if(majorityMinorityDistrictsCount >= constraints.getMinMinorityDistricts()) {
                filteredDistrictings.add(d);
                d.getMeasures().setMajorityMinorityDistricts(majorityMinorityDistrictsCount);
            }
        }
        return filteredDistrictings;
    }
}