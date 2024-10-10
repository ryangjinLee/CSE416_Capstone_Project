import React, { Component } from "react";
import ToolbarTabsManager from "./ToolbarTabsManager";
import logo from "../../pictures/Logo.png";

export default class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <ToolbarTabsManager />
        <div className="image-container-toggles">
          <h className="center team-name">Team Bills</h>
          <img src={logo} className="my-image" />
        </div>
      </div>
    );
  }
}
