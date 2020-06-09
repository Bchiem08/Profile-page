import React, { Component } from "react";
import "./skillpage.css";
import SkillPageText from "./skillpagetext";
import CardGrid from "./cardgrid";

export default class SkillPage extends Component {
  render() {
    return (
      <div className="skillspage">
        <div style={{ height: "30px" }}></div>
        <div>
          <SkillPageText />
        </div>
        <div style={{ marginLeft: "10%", marginRight: "10%" }}>
          <CardGrid />
        </div>
        <div style={{ height: "20px" }}></div>
      </div>
    );
  }
}
