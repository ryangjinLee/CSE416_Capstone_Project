import React, { Component } from "react";
import * as SelectionMenuUtilities from "../../../utilities/SelectionMenuUtilities";
import {
  setEnabledStateOfConstraint,
  updateConstraintSliderSettings,
  updatePopulationConstraint,
  updateMinorityConstraint,
  updateCompactnessConstraint,
} from "../../../redux/actions/settingActions";
import {
  Row,
  Select,
  Icon,
  Collapsible,
  CollapsibleItem,
  Switch,
} from "react-materialize";
import LabelAndInfoIcon from "../../StatisticComponents/LabelAndInfoIcon";
import { FormControlLabel, Slider, Checkbox } from "@material-ui/core";
import { connect } from "react-redux";
import * as NetworkingUtilities from "../../../network/NetworkingUtilities";
import ConstraintSlider from "./ConstraintSlider";

class ConstraintSelection extends Component {
  render() {
    return (
      <div className="filterSectionItem">
        <h4 className="center-title">
          <b>{SelectionMenuUtilities.LABELS.CONSTRAINTS_HEADER}</b>
        </h4>

        {/* Population Constraint Selection */}
        <LabelAndInfoIcon
          label={SelectionMenuUtilities.LABELS.VOTING_POPULATION_TO_CONSTRAIN}
          description={
            SelectionMenuUtilities.DESCRIPTIONS.VOTING_POPULATION_CONSTRAINT
          }
        />
        <Select
          icon={<Icon>ballot</Icon>}
          id="Select-9"
          multiple={false}
          onChange={(e) =>
            this.props.updatePopulationConstraint(e.target.value)
          }
          options={{
            classes: "",
            dropdownOptions: {
              alignment: "left",
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250,
            },
          }}
          value={
            this.props.PopulationSelection != null
              ? this.props.PopulationSelection
              : ""
          }
        >
          <option disabled value="">
            {SelectionMenuUtilities.LABELS.CHOOSE_A_VOTING_POPULATION}
          </option>
          {Object.keys(SelectionMenuUtilities.POPULATIONS).map((key) => {
            return (
              <option
                key={key}
                value={key}
                disabled={
                  key == "CITIZEN_VOTING_AGE_POPULATION" ||
                  key == "VOTING_AGE_POPULATION"
                }
              >
                {SelectionMenuUtilities.POPULATIONS[key]}
              </option>
            );
          })}
        </Select>
        {/* Section for Setting Constriants */}
        <div className="filterSectionItem">
          <ConstraintSlider
            filterKey={
              SelectionMenuUtilities.CONSTRAINT_KEYS.PopulationDifference
            }
            filter={
              this.props.ConstraintSliderSettings[
                SelectionMenuUtilities.CONSTRAINT_KEYS.PopulationDifference
              ]
            }
          />
        </div>
        {/* Incumbent protection, part of constraints  */}
        <LabelAndInfoIcon
          label={SelectionMenuUtilities.LABELS.MINORITY_POPULATION_TO_CONSTRAIN}
          description={
            SelectionMenuUtilities.DESCRIPTIONS.MINORITY_POPULATION_CONSTRAINT
          }
        />
        <Select
          icon={<Icon>accessibility</Icon>}
          id="Select-9"
          multiple={false}
          onChange={(e) => this.props.updateMinorityConstraint(e.target.value)}
          options={{
            classes: "",
            dropdownOptions: {
              alignment: "left",
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250,
            },
          }}
          value={
            this.props.MinoritySelection != null
              ? this.props.MinoritySelection
              : ""
          }
        >
          <option disabled value="">
            {SelectionMenuUtilities.LABELS.CHOOSE_A_MINORITY_POPULATION}
          </option>
          {Object.keys(SelectionMenuUtilities.MINORITIES).map((key) => {
            return (
              <option
                key={key}
                value={key}
                disabled={key != "BLACK" && key != "HISPANIC"}
              >
                {SelectionMenuUtilities.MINORITIES[key]}
              </option>
            );
          })}
        </Select>
        <ConstraintSlider
          filterKey={
            SelectionMenuUtilities.CONSTRAINT_KEYS.MajorityMinorityDistricts
          }
          filter={
            this.props.ConstraintSliderSettings[
              SelectionMenuUtilities.CONSTRAINT_KEYS.MajorityMinorityDistricts
            ]
          }
        />
        <ConstraintSlider
          filterKey={SelectionMenuUtilities.CONSTRAINT_KEYS.MinorityThreshold}
          filter={
            this.props.ConstraintSliderSettings[
              SelectionMenuUtilities.CONSTRAINT_KEYS.MinorityThreshold
            ]
          }
        />
        <LabelAndInfoIcon
          label={SelectionMenuUtilities.LABELS.COMPACTNESS_TYPE}
          description={
            SelectionMenuUtilities.DESCRIPTIONS.COMPACTNESS_TYPE_CONSTRAINT
          }
        />
        <Select
          icon={<Icon>people</Icon>}
          id="Select-9"
          multiple={false}
          onChange={(e) =>
            this.props.updateCompactnessConstraint(e.target.value)
          }
          options={{
            classes: "",
            dropdownOptions: {
              alignment: "left",
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250,
            },
          }}
          value={
            this.props.CompactnessSelection != null
              ? this.props.CompactnessSelection
              : ""
          }
        >
          <option disabled value="">
            {SelectionMenuUtilities.LABELS.CHOOSE_A_TYPE_OF_COMPACTNESS}
          </option>
          {Object.keys(SelectionMenuUtilities.COMPACTNESS_TYPES).map((key) => {
            return (
              <option
                key={key}
                value={key}
                disabled={key == "GRAPH_COMPACTNESS"}
              >
                {SelectionMenuUtilities.COMPACTNESS_TYPES[key]}
              </option>
            );
          })}
        </Select>
        <ConstraintSlider
          filterKey={SelectionMenuUtilities.CONSTRAINT_KEYS.Compactness}
          filter={
            this.props.ConstraintSliderSettings[
              SelectionMenuUtilities.CONSTRAINT_KEYS.Compactness
            ]
          }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePopulationConstraint: (key) => {
      dispatch(updatePopulationConstraint(key));
    },
    updateMinorityConstraint: (key) => {
      dispatch(updateMinorityConstraint(key));
    },
    updateCompactnessConstraint: (key) => {
      dispatch(updateCompactnessConstraint(key));
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    IncumbentProtectionInfo: state.IncumbentProtectionInfo,
    ConstraintSliderSettings: state.ConstraintSliderSettings,
    PopulationSelection: state.PopulationSelection,
    MinoritySelection: state.MinoritySelection,
    CompactnessSelection: state.CompactnessSelection,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConstraintSelection);
