import React from "react";
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
          {props.title}
        </Typography>
        <Typography
          variant="h5"
          className="skill"
          style={{ marginLeft: "32%", marginTop: "3%" }}
        >
          {props.skill}
        </Typography>
        <CardMedia
          className="stars"
          image={props.stars}
          style={{ height: "30px", width: "150px" }}
        />
      </CardContent>
    </Card>
  );
}
