import React, { Component } from "react";
import "./aboutmetext.css";

export default class AboutMeText extends Component {
  render() {
    return (
      <div className="aboutmebox">
        <div className="line"></div>
        <header className="aboutmeheader">About Me</header>
        <p className="aboutmeparagraph">
          17 years old out of Edmonton Alberta Canada. Attending MacEwan
          university in Commerce.
        </p>
        <p className="aboutmeparagraph">
          Started using figma to design webpages at the in December 2019 and
          coding in spring of 2020. I picked up coding as a hobby and really
          enjoyed it.
        </p>
        <p className="aboutmeparagraph">
          Currently 1 year experience in Front-end web development, web design,
          and Video editing.
        </p>
      </div>
    );
  }
}
