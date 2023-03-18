import React, { useEffect, useState } from "react";
import "./VideoHLS.css";
import Hls from "hls.js";

function VideoHLS({ videoLink, previewImage, videoTitle, videoId }) {
  const [videoRef, setVideoRef] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleVideoRef = (ref) => {
    setVideoRef(ref);
  };

  useEffect(() => {
    if (videoRef) {
      const hls = new Hls();
      hls.loadSource(videoLink);
      hls.attachMedia(videoRef);

      const savedProgress = localStorage.getItem(`videoProgress-${videoId}`);
      if (savedProgress) {
        setProgress(parseInt(savedProgress));
        videoRef.currentTime = parseInt(savedProgress);
      }
    }
  }, [videoRef, videoLink]);

  function handleProgressChange() {
    setProgress(videoRef.currentTime);
    localStorage.setItem(`videoProgress-${videoId}`, videoRef.currentTime);
  }

  return (
      <video
        id="videoHSL"
        ref={handleVideoRef}
        controls
        poster={previewImage}
        title={videoTitle}
        onTimeUpdate={handleProgressChange}
      />
  );
}

export default VideoHLS;
