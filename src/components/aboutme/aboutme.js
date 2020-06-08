import React, { Component } from "react";
import "./aboutme.css";

export default class AboutMe extends Component {
  render() {
    const imagePath = process.env.PUBLIC_URL;
    return (
      <div>
        <div className="line" />
        <img src={imagePath + "/Me.png"} alt="ME" className="image"></img>
      </div>
    );
  }
}
