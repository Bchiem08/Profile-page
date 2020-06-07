import React from "react";
import "./sidedrawer.css";

const SideDrawer = (props) => {
  return (
    <nav className={"side-drawer"}>
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
    </nav>
  );
};
export default SideDrawer;
