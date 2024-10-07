import React from "react";
import { Navbar, NavItem, Icon } from "react-materialize";
import "../../css/App.css";

const NavBar = () => {
  return (
    <Navbar
      alignLinks="right"
      brand={
        <a className="brand-logo margin-10" href="#">
          Team Bills
        </a>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem href="">Contact Us</NavItem>
      <NavItem href="">Resources</NavItem>
    </Navbar>
  );
};

export default NavBar;
