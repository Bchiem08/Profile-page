import React, { Component } from "react";
import "./homepage.css";
import Grid from "@material-ui/core/Grid";
import { Typography, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat"],
    fontWeightMedium: ["Medium"],
  },
});
export default class HomePage extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid container>
          <div className="background">
            <Grid item style={{ marginTop: "15%" }}>
              <Typography
                className="title"
                variant="h1"
                style={{ fontWeight: 400 }}
              >
                Brian Chiem
              </Typography>
              <Typography style={{ textAlign: "center" }} variant="h5">
                Front-end developer / Designer
              </Typography>
              <Typography style={{ textAlign: "center" }} variant="h5">
                Edmonton, AB
              </Typography>
            </Grid>
          </div>
        </Grid>
      </ThemeProvider>
    );
  }
}
