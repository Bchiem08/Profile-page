import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./carddata";
import { Typography } from "@material-ui/core";

export default function InfoCard(props) {
  return (
    <Card style={{ border: "10px" }} className="root">
      <CardMedia className="media" image={props.image} />
      <CardContent>
        <Typography className="title">{props.title}</Typography>
        <Typography className="skill">{props.skill}</Typography>
      </CardContent>
    </Card>
  );
}
