import { Card } from "@mui/material";
import VideoHLS from "../VideoHLS/VideoHLS";
import React from "react";
import "./CourseInformation.css"
import ListOfSkills from "../ListOfSkills/ListOfSkills";
import secondsToMinutes from "../../helper/secondsToMinutes";

function CourseInformation({ course }) {
  return (
    <Card id="course-information-wrapper">
      <VideoHLS
        videoLink={course.meta.courseVideoPreview.link}
        previewImage={`${course.meta.courseVideoPreview.previewImageLink}/preview.webp`}
        videoTitle={course.title}
        videoId={course.id}
      />
      <div id="course-info">
        <h1>{course.title}</h1>
        <h3>{course.description}</h3>
        <h3>Duration: {secondsToMinutes(course.duration)} min</h3>
        <h3>Skills you will get: {<ListOfSkills skills={course.meta.skills}/>}</h3>
      </div>
    </Card>
  );
}

export default CourseInformation;
