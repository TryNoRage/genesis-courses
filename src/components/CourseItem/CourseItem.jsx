import { Card } from "@mui/material";
import React from "react";
import ListOfSkills from "../ListOfSkills/ListOfSkills";
import "./CourseItem.css";

function CourseItem() {
  return (
    <Card id="wrapper">
      <div id="content">
        <img
          src="https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/cover.webp"
          alt="test"
          loading="lazy"
        />
        <div id="info">
          <h1>Title</h1>
          <p> Desription</p>
          <p>3.5</p>
          <p>Lessons:5</p>
        </div>
      </div>
      <ListOfSkills />
    </Card>
  );
}

export default CourseItem;
