import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./CourseAccordion.css"
import React from "react";
import VideoHLS from "../VideoHLS/VideoHLS";

function CourseAccordion({ lessons }) {
  return (
    <div id="course-accordion">
      {lessons.map((lesson) => (
        <Accordion
          key={lesson.id}
          disabled={lesson.status === "locked"}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" component="h5">{lesson.title}</Typography>
            <Typography sx={{ flexGrow: 1 }} />
            <Typography>
              Lesson {lesson.order} | Duration: {Math.floor(lesson.duration / 60)} min
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
            <VideoHLS
              videoLink={lesson.link}
              previewImage={`${lesson.previewImageLink}/lesson-${lesson.order}.webp`}
              videoTitle={lesson.title}
              videoId={lesson.id}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default CourseAccordion;
