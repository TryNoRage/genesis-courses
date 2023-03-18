import React, { useEffect, useState, useRef } from "react";
import Hls from "hls.js";

function VideoOnHover({ videoLink, previewImage, videoTitle }) {
  const [videoRef, setVideoRef] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const wrapperRef = useRef(null);

  const handleVideoRef = (ref) => {
    setVideoRef(ref);
  };

  useEffect(() => {
    if (videoRef) {
      const hls = new Hls();
      hls.loadSource(videoLink);
      hls.attachMedia(videoRef);
    }
  }, [videoRef, videoLink]);

  function handleMouseEnter() {
    setShowVideo(true);
  }

  function handleMouseLeave() {
    setShowVideo(false);
  }

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showVideo ? (
        <video
          ref={handleVideoRef}
          muted
          autoPlay
          poster={previewImage}
          title={videoTitle}
          style={{height: "200px", width: "455px" }}
        />
      ) : (
        <img src={previewImage} alt={videoTitle} style={{height: "200px", width: "455px" }} />
      )}
    </div>
  );
}

export default VideoOnHover;
