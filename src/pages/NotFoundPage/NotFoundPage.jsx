import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import { display } from "@mui/system";
import "./NotFoundPage.css"

function NotFoundPage() {
  return (
      <Card id="not-found-wrapper">
        <h1>Page not Found </h1>
        <Link to="/">Go to courses</Link>
      </Card>
  );
}

export default NotFoundPage;
