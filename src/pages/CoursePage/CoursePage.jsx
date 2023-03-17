import React, {useState, useEffect} from "react";
import VideoHLS from "../../components/VideoHLS/VideoHLS";
import { useParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";

function CoursePage() {
  const { id } = useParams();
  const [course, isLoading ]  = useFetch(id);
 
  return (
    <>
      {isLoading? "rre3" : <VideoHLS videoLink={course.meta.courseVideoPreview.link} />}
    </>
  );
}

export default CoursePage;
