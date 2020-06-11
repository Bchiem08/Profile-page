import React, { Component } from "react";
import InfoCard from "../Cards/infocard";
import Grid from "@material-ui/core/Grid";
import "./cardgridstyle.css";

const imagePath = process.env.PUBLIC_URL + "/photos";

const cards = [
  {
    image: imagePath + "/htmllogo.png",
    title: "Html",
    skill: "Skill level:",
    stars: imagePath + "/5stars.png",
  },
  {
    image: imagePath + "/CssFrame.png",
    title: "CSS",
    skill: "Skill level:",
    stars: imagePath + "/5stars.png",
  },
  {
    image: imagePath + "/JsFrame.png",
    title: "JavaScript",
    skill: "Skill level:",
    stars: imagePath + "/4stars.png",
  },
  {
    image: imagePath + "/Githubframe.png",
    title: "Git",
    skill: "Skill level:",
    stars: imagePath + "/4stars.png",
  },
  {
    image: imagePath + "/FigmaFrame.png",
    title: "Figma",
    skill: "Skill level:",
    stars: imagePath + "/4stars.png",
  },
  {
    image: imagePath + "/FilmoraFrame.png",
    title: "Filmora",
    skill: "Skill level:",
    stars: imagePath + "/4stars.png",
  },
  {
    image: imagePath + "/ReactFrame.png",
    title: "React",
    skill: "Skill level:",
    stars: imagePath + "/3stars.png",
  },
];

export default class CardGrid extends Component {
  render() {
    return (
      <Grid
        container
        spacing={10}
        style={{
          marginLeft: "14%",
          marginRight: "14%",
        }}
      >
        {cards.map((cards, index) => (
          <Grid xs={12} sm={6} md={4} lg={4} xl={3} className="cardgrid">
            <InfoCard
              key={"card" + index}
              image={cards.image}
              title={cards.title}
              skill={cards.skill}
              stars={cards.stars}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
