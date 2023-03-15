import { Card } from "@mui/material";
import React from "react";
import ListOfSkills from "../ListOfSkills/ListOfSkills";
import "./CourseItem.css";

function CourseItem({course}) {
  return (
    <>
      <Card id="wrapper">
        <div id="content">
          <img
            src={`${course.previewImageLink}/cover.webp`}
            alt="test"
            loading="lazy"
          />
          <div id="info">
            <h1>{course.title}</h1>
            <p> {course.description}</p>
            <p>Rating: {course.rating}</p>
            <p>Lessons: {course.lessonsCount}</p>
          </div>
        </div>
         <ListOfSkills skills={course.meta.skills || []}/>
      </Card>
    </>
  );
}

export default CourseItem;
