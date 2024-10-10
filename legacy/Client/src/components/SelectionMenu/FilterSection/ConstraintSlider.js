import React, { Component } from "react";
import {
  updateConstraintSliderSettings,
  setEnabledStateOfConstraint,
} from "../../../redux/actions/settingActions";
import { Row } from "react-materialize";
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

class ConstraintSlider extends Component {
  handleSwitch(e, key) {
    this.props.setEnabledStateOfConstraint(key, e.target.checked);
  }

  render() {
    let filter = this.props.filter;

    if (!Array.isArray(filter.value)) {
      return (
        <Row key={this.props.filterKey}>
          <div className="constraintAndCheckbox">
            <h6>
              {filter.name} <b>({filter.value})</b>
            </h6>
          </div>
          <CustomSlider
            disabled={!filter.enabled}
            onChange={(e, newValue) =>
              this.props.updateConstraintSliderSettings(
                this.props.filterKey,
                newValue
              )
            }
            value={filter.value}
            max={filter.maxVal}
            min={filter.minVal}
            name={filter.name}
            step={filter.step}
            marks
            valueLabelDisplay="auto"
          />
        </Row>
      );
    } else {
      return (
        <Row key={this.props.filterKey}>
          <div className="constraintAndCheckbox">
            <h6>
              {filter.name}{" "}
              <b>
                ({filter.value[0]}-{filter.value[1]})
              </b>
            </h6>
          </div>
          <CustomSlider
            value={filter.value}
            onChange={(e, newValue) =>
              this.props.updateConstraintSliderSettings(
                this.props.filterKey,
                newValue
              )
            }
            max={filter.maxVal}
            min={filter.minVal}
            name={filter.name}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        </Row>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateConstraintSliderSettings: (key, newVal) => {
      dispatch(updateConstraintSliderSettings(key, newVal));
    },
    setEnabledStateOfConstraint: (key, bool) => {
      dispatch(setEnabledStateOfConstraint(key, bool));
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    ConstraintSliderSettings: state.ConstraintSliderSettings,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConstraintSlider);
