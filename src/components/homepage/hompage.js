import React, { Component } from "react";
import "./homepage.css";
import Grid from "@material-ui/core/Grid";

export default class HomePage extends Component {
  render() {
    return (
      <Grid container>
        <div className="background">
          <Grid item>
            <p className="title">Brian Chiem</p>
            <p className="subtitle">Front-end developer / Designer</p>
            <p className="subtitle">Edmonton, AB</p>
          </Grid>
        </div>
      </Grid>
    );
  }
}
