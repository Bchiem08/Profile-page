import React, { Component } from "react";
import "./navbar.css";
import DrawerToggleButton from "../sidedrawer/drawertogglebutton";
import Hidden from "@material-ui/core/Hidden";

export class Navbar extends Component {
  render() {
    const imagePath = process.env.PUBLIC_URL + "/photos";
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
              src={imagePath + "/bchiemlogo.png"}
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
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#aboutme">About Me</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
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
