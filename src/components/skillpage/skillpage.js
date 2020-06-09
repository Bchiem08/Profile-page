import React, { Component } from "react";
import InfoCard from "../Cards/infocard";
import Grid from "@material-ui/core/Grid";
import "./skillpage.css";
import SkillPageText from "./skillpagetext";

const imagePath = process.env.PUBLIC_URL + "/photos";

const cards = [
  {
    image: imagePath + "/htmllogo.png",
    title: "Html",
    skill: "skill level",
  },
  {
    image: imagePath + "/htmllogo.png",
    title: "CSS",
    skill: "skill level",
  },
  {
    image: imagePath + "/htmllogo.png",
    title: "JavaScript",
    skill: "skill level",
  },
  {
    image: imagePath + "/htmllogo.png",
    title: "Git",
    skill: "skill level",
  },
  {
    image: imagePath + "/htmllogo.png",
    title: "Figma",
    skill: "skill level",
  },
  {
    image: imagePath + "/htmllogo.png",
    title: "Filmora",
    skill: "skill level",
  },
  {
    image: imagePath + "/htmllogo.png",
    title: "React",
    skill: "skill level",
  },
];

export default class SkillPage extends Component {
  render() {
    return (
      <Grid container>
        <Grid item className="skillspage">
          <SkillPageText />
          <Grid className="skillsholder">
            {cards.map((cards, index) => (
              <InfoCard
                key={"card" + index}
                image={cards.image}
                title={cards.title}
                skill={cards.skill}
              />
            ))}
          </Grid>
          <Grid item style={{ height: "100vh" }}></Grid>
        </Grid>
      </Grid>
    );
  }
}
