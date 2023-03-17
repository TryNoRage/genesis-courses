import React, { useEffect, useState } from "react";
import "./VideoHLS.css"
import Hls from "hls.js";

function VideoHLS({ videoLink, previewImage }) {
  const [videoRef, setVideoRef] = useState(null);
  const handleVideoRef = (ref) => {
    setVideoRef(ref);
  };

  useEffect(() => {
    if (videoRef) {
      const hls = new Hls();
      hls.loadSource(videoLink);
      hls.attachMedia(videoRef);
    }
  }, [videoRef]);

  return <video ref={handleVideoRef} controls />;
}

export default VideoHLS;
