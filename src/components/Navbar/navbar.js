import React, { Component } from "react";
import "./navbar.css";
import DrawerToggleButton from "../sidedrawer/drawertogglebutton";

export class Navbar extends Component {
  render() {
    const imagePath = process.env.PUBLIC_URL + "/photos/";
    return (
      <header className="navbar">
        <nav className="navbar_navigation">
          <div>
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <div className=".navbar_logo">
            <img src={imagePath + "/Logo.png"} alt="Logo"></img>
          </div>
          <div className="spacer" />
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
        </nav>
      </header>
    );
  }
}

export default Navbar;
