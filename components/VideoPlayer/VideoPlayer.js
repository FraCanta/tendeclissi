import { useState } from "react";
const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFirstPlay, setIsFirstPlay] = useState(true);

  const togglePlay = () => {
    const video = document.getElementById("videoPlayer");
    if (!isPlaying && isFirstPlay) {
      video.currentTime = 0; // Riavvolge il video all'inizio solo al primo play
      setIsFirstPlay(false);
    }
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setIsMuted(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative h-screen lg:h-[70vh] xl:h-screen fxl:h-[90vh] w-full">
      <video
        id="videoPlayer"
        className="h-full w-full object-cover "
        onClick={togglePlay}
        autoPlay
        loop
        muted={isMuted}
      >
        <source src="/assets/video/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
