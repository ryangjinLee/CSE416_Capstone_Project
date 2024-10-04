import React, { Component } from "react";
import { Col, Row, Button } from "react-materialize";  // Make sure Button is imported
import FilterSection from "./FilterSection/FilterSection";
import ListingSection from "./ListingSection/ListingSection";
import { Link } from "react-router-dom";  // Import Link for navigation

export default class SelectionMenuContainer extends Component {
  render() {
    return (
      <div className="SelectionMenuContainer">
        <FilterSection />
        <ListingSection />
        {/* Button that links to the ComparePage */}
        <Link to="/compare">
          <Button>Go to Compare Section</Button>
        </Link>
      </div>
    );
  }
}
