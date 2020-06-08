import React, { Component } from "react";
import InfoCard from "../Cards/infocard";
import Grid from "@material-ui/core/Grid";
import "./skillpage.css";

export default class SkillPage extends Component {
  render() {
    return (
      <Grid container>
        <div className="skillspage">
          <Grid item style={{ height: "100vh" }}></Grid>
          <div>
            <InfoCard />
          </div>
        </div>
      </Grid>
    );
  }
}
