import React, { Component } from "react";
import Projects from "./components/projects/projects";

import Contact from "./components/contact/contact";
import AboutMe from "./components/aboutme/aboutme";
import HomePage from "./components/homepage/hompage";
import SideDrawer from "./components/sidedrawer/sidedrawer";
import Navbar from "./components/Navbar/navbar";
import Backdrop from "./components/backdrop/backdrop";
import Grid from "@material-ui/core/Grid";
import SkillPage from "./components/skillpage/skillpage";
import "./App.css";
class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: "100px" }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <a id="home">
                <HomePage />
              </a>
              <a id="aboutme">
                <AboutMe />
              </a>
              <a id="skills">
                <SkillPage />
              </a>
              <a id="projects">
                <Projects />
              </a>
              <a id="contact">
                <Contact />
              </a>
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

export default App;
