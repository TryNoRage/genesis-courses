import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import VideoHLS from "../VideoHLS/VideoHLS";

function CourseAccordion({ lessons}) {
  return (
    <>
      {lessons.map((lesson) => (
        <Accordion key={lesson.id} disabled={lesson.status === "locked" ? true : false }> 
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>{lesson.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <VideoHLS videoLink={lesson.link}/>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

export default CourseAccordion;
