import React from "react";
import CoursesPage from "../pages/CoursesPage/CoursesPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import CoursePage from "../pages/CoursePage/CoursePage";
import { Route,Routes } from "react-router-dom";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/course">
            <Route path="/:id" element={<CoursePage/>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AppRouter;
