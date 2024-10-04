import React, { Component } from "react";
import { Row, Select, Button } from "react-materialize";
import * as ViewportUtilities from "../../utilities/ViewportUtilities";
import * as NetworkingUtilities from "../../network/NetworkingUtilities";
import { connect } from "react-redux";
import {
  setCurrentState,
  setTentativeState,
  setViewport,
} from "../../redux/actions/settingActions";
import logo from "../../pictures/Logo.png";

class StateSelectionToolbar extends Component {
  handleChange(e) {
    switch (e.target.value) {
      case ViewportUtilities.STATE_OPTIONS.NORTH_CAROLINA:
        this.props.setTentativeState(
          ViewportUtilities.STATE_OPTIONS.NORTH_CAROLINA
        );
        this.props.setViewport(ViewportUtilities.NORTH_CAROLINA.Maximized);
        break;
      case ViewportUtilities.STATE_OPTIONS.LOUISIANA:
        this.props.setTentativeState(ViewportUtilities.STATE_OPTIONS.LOUISIANA);
        this.props.setViewport(ViewportUtilities.LOUISIANA.Maximized);
        break;
      case ViewportUtilities.STATE_OPTIONS.ALABAMA:
        this.props.setTentativeState(ViewportUtilities.STATE_OPTIONS.ALABAMA);
        this.props.setViewport(ViewportUtilities.ALABAMA.Maximized);
        break;
      default:
        this.props.setTentativeState(
          ViewportUtilities.STATE_OPTIONS.UNSELECTED
        );
        this.props.setViewport(ViewportUtilities.UNSELECTED.Maximized);
        break;
    }
  }

  selectTentativeState(state) {
    const selector = document.getElementById("state-selector");
    if (selector != null) {
      for (let i = 0; i < selector.options.length; i++) {
        if (
          selector.options[i].value == state &&
          selector.options[i].selected != true
        ) {
          selector.options[i].selected = true;
          selector.value = state;
        }
      }
    }
  }

  handleClick(e) {
    this.props.setCurrentState(document.getElementById("state-selector").value);
  }

  componentDidUpdate() {
    this.selectTentativeState(this.props.TentativeState);
  }

  render() {
    return (
      <div className="toolbar">
        <div>
          <Row className="centerWithinMe">
            <h5 className="align_text"> Selector Menu </h5>
            <Select
              id="state-selector"
              multiple={false}
              onChange={(e) => this.handleChange(e)}
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
              value={this.props.TentativeState}
            >
              <option
                disabled
                value={ViewportUtilities.STATE_OPTIONS.UNSELECTED}
              >
                -Select-
              </option>
              <option value={ViewportUtilities.STATE_OPTIONS.NORTH_CAROLINA}>
                California
              </option>
              <option value={ViewportUtilities.STATE_OPTIONS.LOUISIANA}>
                Mississippi
              </option>
              <option value={ViewportUtilities.STATE_OPTIONS.ALABAMA}>
                New York
              </option>
            </Select>
            <Button
              className="redBrownBtn"
              onClick={(e) => this.handleClick(e)}
            >
              Select this State!
            </Button>
          </Row>
        </div>
        <div className="image-container">
          <h className="center team-name">Team Bills</h>
          <img src={logo} className="my-image" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setViewport: (viewport) => {
      dispatch(setViewport(viewport));
    },
    setCurrentState: (state) => {
      dispatch(setCurrentState(state));
    },
    setTentativeState: (state) => {
      dispatch(setTentativeState(state));
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    TentativeState: state.TentativeState,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StateSelectionToolbar);
