import React, { Component } from "react";
import * as SelectionMenuUtilities from "../../../utilities/SelectionMenuUtilities";
import { Button, Icon } from "react-materialize";

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: true, // Initial state: show filter_1, hide listing_1 and compare_1
    };
  }

  toggleDivVisibility = () => {
    this.setState(
      (prevState) => ({ showFilter: !prevState.showFilter }),
      () => {
        // Ensure the DOM manipulation happens after the state update
        if (this.state.showFilter) {
          // Show filter_1 and hide listing_1 and compare_1
          document.getElementById("listing_1").style.display = "block";
          document.getElementById("compare_1").style.display = "none";
        } else {
          // Hide filter_1 and show listing_1 and compare_1
          document.getElementById("listing_1").style.display = "none";
          document.getElementById("compare_1").style.display = "block";
        }
      }
    );
  };

  render() {
    return (
      <Button className="ReturnToMapBtn" onClick={this.toggleDivVisibility}>
        {SelectionMenuUtilities.LABELS.SWITCH_TO_COMPARE}
      </Button>
    );
  }
}

export default ToggleButton;
