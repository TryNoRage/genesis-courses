import { Card } from "@mui/material";
import React, {useRef} from "react";
import ListOfSkills from "../ListOfSkills/ListOfSkills";
import "./CourseItem.css";

function CourseItem({course,handleChildClick}) {

  return (
    <>
      <Card id="wrapper" onClick={()=>handleChildClick(course.id)} >
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
