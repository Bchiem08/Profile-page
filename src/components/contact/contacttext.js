import React, { Component } from "react";
import "./contacttext.css";

export default class ContactText extends Component {
  render() {
    return (
      <div className="contactpage">
        <div className="contactbox">
          <div className="contactline"></div>
          <header className="contactheader">Contact</header>
          <p className="contacttext">7212 164 Ave</p>
          <p className="contacttext">Edmonton, AB Canada</p>
          <p className="contacttext">T5Z 3Y3</p>
          <br />
          <p className="contacttext">Cell: (780)-707-8248</p>
          <p className="contacttext">
            Email:<a href> {""}bchiem08@gmail.com</a>
          </p>
        </div>
      </div>
    );
  }
}
