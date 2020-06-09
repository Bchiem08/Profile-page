import React, { Component } from "react";
import InfoCard from "../Cards/infocard";
import Grid from "@material-ui/core/Grid";
import "./cardgridstyle.css";

const imagePath = process.env.PUBLIC_URL + "/photos";

const cards = [
  {
    image: imagePath + "/htmllogo.png",
    title: "Html",
    skill: "skill level:",
  },
  {
    image: imagePath + "/htmllogo.png",
    title: "CSS",
    skill: "skill level:",
  },
  {
    image: imagePath + "/htmllogo.png",
    title: "JavaScript",
    skill: "skill level:",
  },
  {
    image: imagePath + "/htmllogo.png",
    title: "Git",
    skill: "skill level:",
  },
  {
    image: imagePath + "/htmllogo.png",
    title: "Figma",
    skill: "skill level:",
  },
  {
    image: imagePath + "/htmllogo.png",
    title: "Filmora",
    skill: "skill level:",
  },
  {
    image: imagePath + "/htmllogo.png",
    title: "React",
    skill: "skill level:",
  },
];

export default class CardGrid extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={10}>
          {cards.map((cards, index) => (
            <Grid xs={12} sm={6} md={4} lg={4} xl={3} className="cardgrid">
              <InfoCard
                style={{
                  marginLeft: 200,
                  marginRight: 200,
                  margin: 50,
                  marginBottom: 20,
                }}
                key={"card" + index}
                image={cards.image}
                title={cards.title}
                skill={cards.skill}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
