package cse416.spring.models;

import cse416.spring.helperclasses.GeometryJSON;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class District {
    private long id;

    Demographics demographics;

    GeometryJSON geometry;

    Collection<Precinct> precincts;

    DistrictMeasures measures;

    double objectiveFunctionScore;

    public District() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @OneToOne
    public GeometryJSON getGeometry() {
        return geometry;
    }

    public void setGeometry(GeometryJSON geometry) {
        this.geometry = geometry;
    }

    @OneToMany
    public Collection<Precinct> getPrecincts() {
        return precincts;
    }

    public void setPrecincts(Collection<Precinct> precincts) {
        this.precincts = precincts;
    }

    @OneToOne
    public DistrictMeasures getMeasures() {
        return measures;
    }

    public void setMeasures(DistrictMeasures measures) {
        this.measures = measures;
    }

    @OneToOne
    public Demographics getDemographics() {
        return this.demographics;
    }

    public void setDemographics(Demographics demographics) {
        this.demographics = demographics;
    }

    @Column
    public double getObjectiveFunctionScore() {
        return this.objectiveFunctionScore;
    }

    public void setObjectiveFunctionScore(double objectiveFunctionScore) {
        this.objectiveFunctionScore = objectiveFunctionScore;
    }

    public District(Demographics demographics, GeometryJSON geometry, Collection<Precinct> precincts, DistrictMeasures measures, double objectiveFunctionScore) {
        this.demographics = demographics;
        this.geometry = geometry;
        this.precincts = precincts;
        this.measures = measures;
        this.objectiveFunctionScore = objectiveFunctionScore;
    }



}
