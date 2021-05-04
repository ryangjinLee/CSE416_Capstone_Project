package cse416.spring.helperclasses;

import cse416.spring.models.district.Deviation;
import cse416.spring.models.district.District;
import cse416.spring.models.districting.Districting;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Getter
@Setter
public class ConstrainedDistrictings {
    Collection<Districting> districtings;
    Districting averageDistricting;
    double[][] boxAndWhiskerData;
    ObjectiveFunctionWeights currentWeights;
    DistrictingConstraints constraints;

    public ConstrainedDistrictings(Collection<Districting> districtings, DistrictingConstraints constraints) {
        // TODO Calculate average, box and whisker (multithread?)
        this.districtings = districtings;
        this.constraints = constraints;

        // TODO Calculate the "average" districting, currently just getting a random one.
        List<Districting> districtingsList = new ArrayList<>(districtings);
        this.averageDistricting = districtingsList.get((int) (Math.random() * districtings.size()));

        // TODO Assign each district a deviation from average after finding the average districting
        for (Districting districting : districtings) {
            double totalDeviationFromAvgArea = 0;
            double totalDeviationFromAvgPop = 0;
            for (District district : districting.getDistricts()) {
                district.getMeasures().setDeviationFromAverage(new Deviation(Math.random(), Math.random()));
                totalDeviationFromAvgArea += district.getMeasures().getDeviationFromAverage().getAreaDev();
                totalDeviationFromAvgPop += district.getMeasures().getDeviationFromAverage().getPopulationDev();
            }
            districting.getMeasures().setDeviationFromAverageAvg(
                    new Deviation(totalDeviationFromAvgArea / districting.getDistricts().size(),
                            totalDeviationFromAvgPop / districting.getDistricts().size()));
        }

    }
}
