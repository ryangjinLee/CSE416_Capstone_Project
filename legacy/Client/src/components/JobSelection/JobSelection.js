import React, { Component } from "react";
import {
  Button,
  Col,
  Row,
  Collapsible,
  Icon,
  CollapsibleItem,
} from "react-materialize";
import { connect } from "react-redux";
import {
  loadInJobs,
  setCurrentState,
  setCurrentJob,
  populatePrecincts,
  populateCounties,
  populateCurrentDistrictingGeoJson,
  populateCurrentDistrictingSummary,
  updateJobLoaded,
  updateEnactedGeoJson,
} from "../../redux/actions/settingActions";
import * as SelectionMenuUtilities from "../../utilities/SelectionMenuUtilities";
import * as ViewportUtilities from "../../utilities/ViewportUtilities";
import * as NetworkingUtilities from "../../network/NetworkingUtilities";
import { Chart } from "react-google-charts";

export const data = [
  ["Parties", "Democratic", "Republican"],
  ["District 1", 91.82, 8.18],
  ["District 2", 91.82, 8.18],
  ["District 3", 91.82, 8.18],
  ["District 4", 91.82, 8.18],
  ["District 5", 91.82, 8.18],
  ["District 6", 91.82, 8.18],
  ["District 7", 91.82, 8.18],
  ["District 8", 91.82, 8.18],
  ["District 9", 91.82, 8.18],
  ["District 10", 91.82, 8.18],
  ["District 11", 91.82, 8.18],
  ["District 12", 91.82, 8.18],
  ["District 13", 91.82, 8.18],
  ["District 14", 91.82, 8.18],
  ["District 15", 91.82, 8.18],
  ["District 16", 91.82, 8.18],
  ["District 17", 91.82, 8.18],
  ["District 18", 91.82, 8.18],
  ["District 19", 91.82, 8.18],
  ["District 20", 91.82, 8.18],
  ["District 21", 91.82, 8.18],
  ["District 22", 91.82, 8.18],
  ["District 23", 91.82, 8.18],
  ["District 24", 91.82, 8.18],
  ["District 25", 91.82, 8.18],
  ["District 26", 91.82, 8.18],
  ["District 27", 91.82, 8.18],
];

// Different options for non-material charts
export const options = {
  title: "Political Party Percentages",
  chartArea: { width: "50%", height: "80%" },
  isStacked: true,
  hAxis: {
    title: "Percentage of Votes (%)",
    minValue: 0,
    maxValue: 100,
  },
  vAxis: {
    title: "District",
  },
};

class JobSelection extends Component {
  render() {
    return (
      <div className="job-selection-screen centered skew-top">
        <div>
          <Chart
            // Bar is the equivalent chart type for the material design version.
            chartType="BarChart"
            width="100%"
            height="800px"
            data={data}
            options={options}
          />
        </div>
        <Row className="text-left heading">
          <Col s={5}>
            <Button
              className="redBrownBtn returnToStateSelectionBtn"
              onClick={(e) =>
                this.props.setCurrentState(
                  ViewportUtilities.STATE_OPTIONS.UNSELECTED
                )
              }
            >
              {SelectionMenuUtilities.LABELS.BACK_TO_STATE_SELECTION}
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default JobSelection;
