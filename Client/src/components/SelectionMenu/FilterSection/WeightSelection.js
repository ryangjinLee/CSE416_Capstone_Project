import React, { Component } from "react";
import * as SelectionMenuUtilities from "../../../utilities/SelectionMenuUtilities";
import {
  updateObjectiveFunctionSettings,
  resetExpandedSummaries,
} from "../../../redux/actions/settingActions";
import { Row, Switch } from "react-materialize";
import { Slider } from "@material-ui/core";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

// Custom styles for the slider
const CustomSlider = withStyles({
  root: {
    color: "#ff5722", // Custom color (orange-red)
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -12,
    marginLeft: -12,
    transform: "rotate(45deg)", // Makes the thumb a diamond shape
    "&:focus, &:hover, &$active": {
      boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)", // Adjust label positioning
    top: -45, // Raised position for better visibility
    backgroundColor: "#ff5722", // Match slider track color
    color: "#fff",
    fontSize: "1rem", // Enlarge value label
    padding: "6px", // Make it more prominent
    borderRadius: "6px",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 2,
    marginTop: -3,
  },
  markActive: {
    backgroundColor: "#ff5722", // Active mark color
  },
})(Slider);

class WeightSelection extends Component {
  constructor(props) {
    super(props);
    this.state = { negWeights: false };
  }

  toggleNegativeWeights(e) {
    this.setState({
      negWeights: e.target.checked,
    });
  }

  render() {
    return (
      <div className="filterSectionItem">
        <h4 className="center-title ">
          <b>
            {SelectionMenuUtilities.LABELS.OBJECTIVE_FUNCTION_WEIGHTS_HEADER}
          </b>
        </h4>
        <div className="centerWithinMe">
          <p>Allow Negative Weights</p>
          <Switch
            id="Switch-11"
            offLabel="Off"
            onChange={(e) => this.toggleNegativeWeights(e)}
            onLabel="On"
          />
        </div>
        {Object.keys(this.props.ObjectiveFunctionSettings).map((key) => {
          let filter = this.props.ObjectiveFunctionSettings[key];
          if (!Array.isArray(filter.value)) {
            return (
              <Row key={key}>
                <h6>
                  {filter.name}{" "}
                  <b>({this.props.ObjectiveFunctionSettings[key].value})</b>
                </h6>
                <CustomSlider
                  onChange={(e, newValue) =>
                    this.props.updateObjectiveFunctionSettings(key, newValue)
                  }
                  value={filter.value}
                  max={filter.maxVal}
                  min={this.state.negWeights ? -1 : 0}
                  name={filter.name}
                  step={filter.step}
                  marks
                  valueLabelDisplay="auto"
                />
              </Row>
            );
          }
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateObjectiveFunctionSettings: (key, newVal) => {
      dispatch(updateObjectiveFunctionSettings(key, newVal));
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    ObjectiveFunctionSettings: state.ObjectiveFunctionSettings,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeightSelection);
