import React, { Component } from "react";
import "./skillpage.css";
import SkillPageText from "./skillpagetext";
import CardGrid from "./cardgrid";
import Grid from "@material-ui/core/Grid";
export default class SkillPage extends Component {
  render() {
    return (
      <div className="skillspage">
        <div
          style={{
            height: "50px",
          }}
        ></div>
        <div
          style={{
            marginLeft: "14%",
            marginRight: "14%",
          }}
        >
          <SkillPageText />
        </div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="skillsholder"
        >
          <CardGrid />
        </Grid>
        <div style={{ height: "50px" }}></div>
      </div>
    );
  }
}
