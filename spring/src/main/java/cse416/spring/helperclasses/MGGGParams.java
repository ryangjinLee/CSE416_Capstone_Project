package cse416.spring.helperclasses;

import cse416.spring.models.JobSummary;

import javax.persistence.*;

@Entity
public class MGGGParams {
    private Long id;
    int coolingPeriod;
    double maxPopulationDiff;

    public MGGGParams(int coolingPeriod, double maxPopulationDiff) {
        this.coolingPeriod = coolingPeriod;
        this.maxPopulationDiff = maxPopulationDiff;
    }

    public MGGGParams() {

    }

    @Column
    public int getCoolingPeriod() {
        return coolingPeriod;
    }

    public void setCoolingPeriod(int coolingPeriod) {
        this.coolingPeriod = coolingPeriod;
    }

    @Column
    public double getMaxPopulationDiff() {
        return maxPopulationDiff;
    }

    public void setMaxPopulationDiff(double maxPopulationDiff) {
        this.maxPopulationDiff = maxPopulationDiff;
    }

    @Id
    @GeneratedValue
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
