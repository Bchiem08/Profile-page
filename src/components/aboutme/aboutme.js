import React, { Component } from "react";
import "./aboutme.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AboutMeText from "./aboutmetext";

export default class AboutMe extends Component {
  render() {
    const imagePath = process.env.PUBLIC_URL;
    return (
      <div className="body">
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="aboutbox">
            <AboutMeText />
          </Grid>
          <Grid item xs={0} sm={0} md={6} lg={6} xl={6}>
            <img src={imagePath + "/Me.png"} alt="ME" className="image"></img>
          </Grid>
        </Grid>
      </div>
    );
  }
}
