import React, { Component } from "react";
import "./skillpagetext.css";

export default class SkillPageText extends Component {
  render() {
    return (
      <div className="skillsbox">
        <div className="skillpageline"></div>
        <header className="skillsheader">Skills</header>
        <p className="skillstext">These are some of my current skills </p>
        <div style={{ height: "20px" }}></div>
      </div>
    );
  }
}
