import React, { Component } from "react";
import InfoCard from "../Cards/infocard";
import Grid from "@material-ui/core/Grid";
import "./skillpage.css";
import SkillPageText from "./skillpagetext";

export default class SkillPage extends Component {
  render() {
    return (
      <Grid container>
        <div className="skillspage">
          <SkillPageText />
          <div className="skillsholder">
            <InfoCard />
          </div>
          <Grid item style={{ height: "100vh" }}></Grid>
        </div>
      </Grid>
    );
  }
}
