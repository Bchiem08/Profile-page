import React, { Component } from "react";
import "./projects.css";
import ProjectText from "./projecttext";

export default class Projects extends Component {
  render() {
    const imagePath = process.env.PUBLIC_URL + "/photos";
    return (
      <div className="projectbackground">
        <div className="projecttextbox">
          <header
            className="projectsheader"
            style={{ justifyContent: "center" }}
          >
            Projects
          </header>
          <img
            src={imagePath + "/Revere.png"}
            alt="ME"
            className="projectimage"
          ></img>
        </div>
        <ProjectText />
      </div>
    );
  }
}
