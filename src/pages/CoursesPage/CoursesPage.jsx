import React, { useEffect } from "react";
import CourseItem from "../../components/CourseItem/CourseItem";
import "./CoursesPage.css";
import { useState } from "react";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import paginationHelper from "../../helper/paginationHelper";

const ITEMS_PER_PAGE = 10;

function CoursesPage() {
  const [courses, isLoading] = useFetch();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const pages = Math.ceil(courses.length / ITEMS_PER_PAGE);

  const handleChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  const handleClick = (id) => navigate(`/course/${id}`);

  const listOfCourses = paginationHelper(
    currentPage,
    courses,
    ITEMS_PER_PAGE
  ).map((course) => (
    <CourseItem
      handleChildClick={handleClick}
      key={course.id}
      course={course}
    />
  ));

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <main>
          {listOfCourses}
          <Pagination
            count={pages}
            page={currentPage}
            onChange={handleChange}
          />
        </main>
      )}
    </>
  );
}

export default CoursesPage;
