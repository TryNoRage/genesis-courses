import React from "react";
import "./CoursePage.css";
import { useParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import CourseAccordion from "../../components/CourseAccordion/CourseAccordion";
import CourseInformation from "../../components/CourseInformation/CourseInformation";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function CoursePage() {
  const { id } = useParams();
  const [course, isLoading] = useFetch(id);


  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <article id="course-page-wrapper">
          <CourseInformation course={course} />
          <CourseAccordion lessons={course.lessons} />
        </article>
      )}
    </>
  );
}

export default CoursePage;
