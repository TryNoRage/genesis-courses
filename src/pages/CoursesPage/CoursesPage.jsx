import React from "react";
import CourseItem from "../../components/CourseItem/CourseItem";
import "./CoursesPage.css";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import usePagination from "../../customHooks/usePagination";

const ITEMS_PER_PAGE = 10;

function CoursesPage() {
  const [courses, isLoading] = useFetch();
  const navigate = useNavigate();
  const { visibleItems, goToPage, currentPage } = usePagination(
    courses,
    ITEMS_PER_PAGE
  );

  const handleClick = (id) => navigate(`/course/${id}`);

  const listOfCourses = visibleItems.map((course) => (
    <CourseItem
      handleChildClick={handleClick}
      key={course.id}
      course={course}
    />
  ));
  {/* return 10 courses for render*/}

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <main>
          {listOfCourses}
          {console.log(currentPage)}
          <Pagination
            count={3}
            page={currentPage}
            onChange={goToPage}
          />
        </main>
      )}
    </>
  );
}

export default CoursesPage;