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
            <Grid item style={{ height: "75vh" }}></Grid>
            <div className="textbox">
              <Typography
                style={{
                  textAlign: "center",
                  fontWeight: 400,
                  fontSize: "12vh",
                  textDecoration: "none",
                }}
                variant="h1"
              >
                Brian Chiem
              </Typography>
              <Typography style={{ textAlign: "center", fontSize: "3.75vh" }}>
                Front-end developer / Designer
              </Typography>
              <Typography style={{ textAlign: "center", fontSize: "3.75vh" }}>
                Edmonton, AB
              </Typography>
            </div>
          </div>
        </Grid>
      </ThemeProvider>
    );
  }
}
