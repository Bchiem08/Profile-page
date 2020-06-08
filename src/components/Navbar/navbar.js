import React, { Component } from "react";
import "./navbar.css";
import DrawerToggleButton from "../sidedrawer/drawertogglebutton";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

export class Navbar extends Component {
  render() {
    const imagePath = process.env.PUBLIC_URL;
    return (
      <header className="navbar">
        <nav className="navbar_navigation">
          <Hidden mdUp>
            <div className="navbar_togglebutton">
              <DrawerToggleButton click={this.props.drawerClickHandler} />
            </div>
          </Hidden>
          <div>
            <img
              src={imagePath + "/Logo.png"}
              alt="Logo"
              className=".navbar_logo"
              style={{ justifyContent: "center" }}
            ></img>
          </div>
          <div className="spacer" />
          <Hidden smDown>
            <div className="navbar_navigation_item">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About Me</a>
                </li>
                <li>
                  <a href="/">Skills</a>
                </li>
                <li>
                  <a href="/">Projects</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </Hidden>
        </nav>
      </header>
    );
  }
}

export default Navbar;
