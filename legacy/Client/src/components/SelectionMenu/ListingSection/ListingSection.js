import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Switch } from "react-materialize";
import {
  resetExpandedSummaries,
  setNewDistrictingSelected,
  setShowFullListing,
} from "../../../redux/actions/settingActions";
import * as SelectionMenuUtilities from "../../../utilities/SelectionMenuUtilities";
import SummaryListing from "./SummaryListing";
import ToggleButtonListing from "./ToggleButtonListing";
import ReturnToMapButton from "../CompareSection/ReturnToMapButton";

class ListingSection extends Component {
  /* Once this loads, it's at first false until something is chosen*/
  componentDidMount() {
    this.props.setNewDistrictingSelected(false);
  }

  componentWillUnmount() {
    this.props.resetExpandedSummaries();
  }

  isAnalysisEmpty() {
    return this.props.AnalysisDistrictings.length === 0;
  }

  render() {
    return (
      <div id="listing_1" className="SelectionMenuSection ListingSection">
        <Row>
          <div className="DistrictingResultsHeader">
            <h5>{SelectionMenuUtilities.LABELS.ANALYSIS_RESULTS}</h5>
          </div>
        </Row>
        {this.isAnalysisEmpty() ? <div /> : <SummaryListing />}
        <ToggleButtonListing />
        <ReturnToMapButton />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNewDistrictingSelected: (bool) => {
      dispatch(setNewDistrictingSelected(bool));
    },
    resetExpandedSummaries: () => {
      dispatch(resetExpandedSummaries());
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    AnalysisDistrictings: state.AnalysisDistrictings,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingSection);
