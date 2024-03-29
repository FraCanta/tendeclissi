import { useState } from "react";
import CtaSecondary from "../layout/CtaSecondary";

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
        className="h-full w-full object-cover"
        onClick={togglePlay}
        autoPlay
        loop
        muted={isMuted}
      >
        <source src="/assets/video/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-45"></div>

      <div className="absolute inset-0 flex items-center">
        <div className="w-[90%] mx-auto text-white flex flex-col gap-8 ">
          <h3 className="text-5xl lg:text-[48px] font-bold">
            Il futuro di Tendeclissi
          </h3>
          <p className="w-full lg:w-10/12 text-md lg:text-xl">
            Spiegazione che dica di contattarli online per poter avere un
            preventivo e fissare il sopralluogo con spiegazione carina del fatto
            che non hanno, per scelta, uno showroom fisico. Far capire che
            lavorano in Veneto e Marche - Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            - tipo fino qua
          </p>
          <CtaSecondary link="/">Scopri i prodotti</CtaSecondary>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
