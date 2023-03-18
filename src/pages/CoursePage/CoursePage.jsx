import React from "react";
import VideoHLS from "../../components/VideoHLS/VideoHLS";
import { useParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import CourseAccordion from "../../components/CourseAccordion/CourseAccordion";

function CoursePage() {
  const { id } = useParams();
  const [course, isLoading] = useFetch(id);

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <div>
          <VideoHLS
            videoLink={course.meta.courseVideoPreview.link}
            previewImage={`${course.meta.courseVideoPreview.previewImageLink}/preview.webp`}
            videoTitle={course.title}
            videoId={course.id}
          />
          <CourseAccordion lessons={course.lessons} />
        </div>
      )}
    </>
  );
}

export default CoursePage;
