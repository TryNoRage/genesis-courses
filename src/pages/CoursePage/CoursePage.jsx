import React from "react";
import "./CoursePage.css"
import { useParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import CourseAccordion from "../../components/CourseAccordion/CourseAccordion";
import CourseInformation from "../../components/CourseInformation/CourseInformation";

function CoursePage() {
  const { id } = useParams();
  const [course, isLoading] = useFetch(id);

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <article id="course-page-wrapper">
          <CourseInformation course={course}/>
          <CourseAccordion lessons={course.lessons} />
        </article>
      )}
    </>
  );
}

export default CoursePage;
