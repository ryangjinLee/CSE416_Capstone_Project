import React, { Component } from "react";
import { CollapsibleItem } from "react-materialize";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import * as MapUtilities from "../../utilities/MapUtilities";
import * as StatUtilities from "../../utilities/StatUtilities";
import * as SelectionMenuUtilities from "../../utilities/SelectionMenuUtilities";
import LabelAndInfoIcon from "./LabelAndInfoIcon";
import { connect } from 'react-redux'

/* If forDistricting is true, then this is for a districting, otherwise it's for an individual district and will display different values*/
class NormalizedTable extends Component {
  mapCompactnessTypeToJsonKey(compactnessType) {
    switch(compactnessType) {
      case SelectionMenuUtilities.COMPACTNESS_TYPES.GRAPH_COMPACTNESS:
        return "graphCompactness"
      case SelectionMenuUtilities.COMPACTNESS_TYPES.POPULATION_FATNESS:
        return "populationFatness"
      default:
        return "polsbyPopper"
    }
  }


  displayDistrictingInfo() {
    return this.props.DistrictingToDisplay != undefined;
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <LabelAndInfoIcon
                  label={
                    "Population Equality"
                  }
                  description={
                    StatUtilities.DESCRIPTIONS.POPULATION_EQUALITY
                  }
                  districting={this.props.DistrictingToDisplay}
                />
              </TableCell>
              <TableCell>
                <LabelAndInfoIcon
                  label={
                      "Split County Score"
                  }
                  description={
                    StatUtilities.DESCRIPTIONS.SPLIT_COUNTY_SCORE
                  }
                />
              </TableCell>
              <TableCell>
                <LabelAndInfoIcon
                  label={
                      "Deviation from Average (Area/Pop)"
                  }
                  description={
                    StatUtilities.DESCRIPTIONS.DEVIATION_FROM_AVERAGE
                  }
                  districting={this.props.DistrictingToDisplay}
                />
              </TableCell>
              <TableCell>
                <LabelAndInfoIcon
                  label={
                      "Deviation from Enacted (Area/Pop)"
                  }
                  description={
                    StatUtilities.DESCRIPTIONS.DEVIATION_FROM_ENACTED
                  }
                  districting={this.props.DistrictingToDisplay}
                />
              </TableCell>
              <TableCell>
                <LabelAndInfoIcon
                  label={
                      "Compactness"
                  }
                  description={
                    StatUtilities.DESCRIPTIONS.COMPACTNESS
                  }
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell scope="row">
                {this.props.DistrictingToDisplay.normalizedMeasures.populationEquality.toFixed(3)}
              </TableCell>
              <TableCell>
              {this.props.DistrictingToDisplay.normalizedMeasures.splitCountyScore.toFixed(3)}
              </TableCell>
                <TableCell>
                {this.props.DistrictingToDisplay.normalizedMeasures.deviationFromAverage.toFixed(3)}
              </TableCell>
              <TableCell>
              {this.props.DistrictingToDisplay.normalizedMeasures.deviationFromEnacted.toFixed(3)}
              </TableCell>
              <TableCell>
              {this.props.DistrictingToDisplay.normalizedMeasures.compactness.toFixed(3)} 
            </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    
  };
};

export default connect(mapStateToProps)(NormalizedTable);