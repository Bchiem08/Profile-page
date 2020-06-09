import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./contact.css";
import ContactText from "./contacttext";
export default class Contact extends Component {
  render() {
    return (
      <div className="contactbackground">
        <div className="spacerbox"></div>
        <ContactText />
      </div>
    );
  }
}
