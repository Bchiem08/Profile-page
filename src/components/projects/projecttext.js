import React, { Component } from "react";
import "./projecttext.css";

export default class ProjectText extends Component {
  render() {
    return (
      <div className="infobox">
        <header className="revereheader">Revere Tech:</header>
        <p className="projecttext">
          I was an intern for Revere Tech from December 2019 and I am still with
          them. While I was with the company I helped design and implement a few
          features into the help centre page. I also made a few youtube tutorial
          videos for the company.
        </p>
        <p className="projecttext">Revere:</p>
        <p className="projecttext">
          Youtube:
          <a
            style={{ textDecoration: "none" }}
            href="https://www.youtube.com/channel/UCCp8zSD_AWJBTRvbOfRbeNA"
          >
            {" "}
            Revere Youtube
          </a>
        </p>
        <div style={{ height: "50px" }}></div>
      </div>
    );
  }
}
