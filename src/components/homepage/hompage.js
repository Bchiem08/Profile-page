import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    const imagePath = process.env.PUBLIC_URL + "/photos/";
    return (
      <div>
        <img
          src={imagePath + "/Background.png"}
          alt="background"
          className=".navbar_logo"
          style={{ justifyContent: "center" }}
        ></img>
      </div>
    );
  }
}
