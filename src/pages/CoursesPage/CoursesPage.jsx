import React from "react";
import CourseItem from "../../components/CourseItem/CourseItem";
import "./CoursesPage.css";
import { getToken } from "../../api/getToken";
import { getCourses } from "../../api/getCourses";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

const itemsPerPage = 10;

function CoursesPage() {
  const [token, setToken] = useState("");
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Math.ceil(courses.length / itemsPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = courses.slice(startIndex, endIndex);

  useEffect(() => {
    getToken().then((res) => setToken(res.token));
  }, []);

  useEffect(() => {
    if (token) {
      getCourses(token).then((res) => setCourses(res.courses));
    }
  }, [token]);

  return (
    <>
      <main>
        {visibleItems.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
        <Pagination count={pages} page={currentPage} onChange={handleChange} />
      </main>
    </>
  );
}

export default CoursesPage;
