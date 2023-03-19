import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./CourseAccordion.css";
import React from "react";
import VideoHLS from "../VideoHLS/VideoHLS";
import secondsToMinutes from "../../helper/secondsToMinutes";


function CourseAccordion({ lessons }) {

  return (
    <div id="course-accordion">
      {lessons.map((lesson) => (
        <Accordion key={lesson.id} disabled={lesson.status === "locked"} >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" component="h5">
              {lesson.title}
            </Typography>
            <Typography sx={{ flexGrow: 1 }} />
            <Typography>
              Lesson {lesson.order} | Duration:{" "}
              {secondsToMinutes(lesson.duration)} min
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {lesson.type === "quiz_simulator" ? (
              <img
                src={`${lesson.previewImageLink}/lesson-${lesson.order}.webp`}
                alt={lesson.title}
                id="accordion-img"
              />
            ) : (
              <VideoHLS
                videoLink={lesson.link}
                previewImage={`${lesson.previewImageLink}/lesson-${lesson.order}.webp`}
                videoTitle={lesson.title}
                videoId={lesson.id}
              />
            )}
          
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default CourseAccordion;
