import { Card, Rating } from "@mui/material";
import React, { useRef } from "react";
import ListOfSkills from "../ListOfSkills/ListOfSkills";
import "./CourseItem.css";
import VideoOnHover from "../VideoOnHover/VideoOnHover";

function CourseItem({ course, handleChildClick }) {
  return (
    <>
      <Card id="wrapper" onClick={() => handleChildClick(course.id)}>
        <div id="head-content">
          <VideoOnHover
            videoLink={course.meta.courseVideoPreview.link}
            videoTitle={course.title}
            previewImage={`${course.previewImageLink}/cover.webp`}
          />
          <h1 id="title-course">{course.title}</h1>
        </div>
        <div id="body-content">
          <p> {course.description}</p>
          <div id="rating">
            <p>Rating:</p>
            <Rating precision={0.1} value={course.rating} readOnly />
          </div>

          <p>Lessons: {course.lessonsCount}</p>
        </div>
        <ListOfSkills skills={course.meta.skills || []} />
        {/*Mistake prevention in the absence of skills */}
      </Card>
    </>
  );
}

export default CourseItem;
