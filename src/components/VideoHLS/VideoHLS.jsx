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
    
    const handleKey = (event) => {
      switch (event.code) {
        case "ArrowUp":
          videoRef.playbackRate = videoRef.playbackRate === 1 ? 1.5 : 2;
          break;
        case "ArrowDown":
          videoRef.playbackRate = videoRef.playbackRate === 1 ? 0.5 : 1;
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
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
