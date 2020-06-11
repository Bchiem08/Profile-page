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
            Email:
            <a
              href="mailto:bchiem08@gmail.com"
              style={{ textDecoration: "none" }}
            >
              {" "}
              {""}bchiem08@gmail.com
            </a>
          </p>
          <p className="contacttext">
            github:{" "}
            <a
              href="https://github.com/Bchiem08"
              style={{ textDecoration: "none" }}
            >
              Bchiem08
            </a>
          </p>
          <p className="contacttext">
            Linkedin
            <a
              href="https://www.linkedin.com/in/brian-chiem-1ab94517a/"
              style={{ textDecoration: "none" }}
            >
              bchiemlinkedin
            </a>
          </p>
        </div>
      </div>
    );
  }
}
