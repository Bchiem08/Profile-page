import React from "react";
import "./drawertogglebutton.css";

const DrawerToggleButton = (props) => (
  <button className="togglebutton" onClick={props.click}>
    <div className="togglebuttonline" />
    <div className="togglebuttonline" />
    <div className="togglebuttonline" />
  </button>
);
export default DrawerToggleButton;
