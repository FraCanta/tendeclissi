import HeroPage from "@/components/hero/HeroPage";
import MediaText from "@/components/layout/MediaText";
import React from "react";
import Italy from "@/public/assets/italy2.svg";
import Team from "@/components/Team/Team";
import Stoffe from "@/public/assets/stoffe.png";
import Banner from "@/components/layout/Banner";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
const Chisiamo = () => {
  return (
    <div>
      <HeroPage backgroundImage="/assets/chisiamoImg.jpg">
        <h1 className="text-[54px] xl:text-[60px] fxl:text-[70px] font-bold text-white">
          Tendeclissi
        </h1>
        <p className="max-w-7xl text-xl xl:text-2xl fxl:text-[25px] font-regular text-white">
          Breve descrizione dell’azienda e del titolare - Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit - tipo fino
          qua
        </p>
      </HeroPage>
      <MediaText
        cta="contatti"
        img={Italy}
        title="Dove trovarci"
        description="Spiegazione che riuassuma la pagina contatti dando le info fondamentali - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori - tipo fino qua"
      />
      <Team />
      <MediaText
        img={Stoffe}
        cta="Vai allo showroom"
        title="La qualità dei nostri prodotti"
        description="Spiegazione che dica di contattarli online per poter avere un preventivo e fissare il sopralluogo con spiegazione carina del fatto che non hanno, per scelta, uno showroom fisico. Far capire che lavorano in Veneto e Marche - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit - tipo fino qua"
      />
      <Banner />
      <VideoPlayer />
    </div>
  );
};

export default Chisiamo;
