import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./carddata";
import { Typography } from "@material-ui/core";
import "./infocard.css";

export default function InfoCard(props) {
  return (
    <Card style={{ border: "10px" }} className="root">
      <CardMedia className="media" image={props.image} />
      <CardContent>
        <Typography variant="h3" className="title">
          {props.title} Brian Chiem
        </Typography>
        <Typography variant="h5" className="skill">
          {props.skill}
        </Typography>
      </CardContent>
    </Card>
  );
}
