import { useState } from "react";
import CtaOutlinePrimary from "../layout/CtaOutlinePrimary";
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
        className="object-cover w-full h-full"
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
          <h3 className="text-[32px] md:text-[45px] lg:text-[50px] xl:text-[45px] font-bold">
            Il futuro di Tendeclissi
          </h3>
          <p className="w-full text-xl font-normal text-white lg:w-10/12 lg:text-2xl">
            Che tu stia cercando di creare il riparo perfetto dal sole per una
            casa, un condominio, un giardino o un’attività commerciale, oppure
            un modo per riparare o motorizzare le tue tende, siamo pronti a
            mettere a disposizione tutte le nostre conoscenze e la nostra
            passione per rispondere alla tua esigenza. Contattaci online per
            richiedere un preventivo su misura o prenditi un momento per
            visitare il nostro showroom digitale e scoprire i prodotti che
            offriamo.
          </p>
          <CtaSecondary link="/showroom">Scopri i prodotti</CtaSecondary>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
