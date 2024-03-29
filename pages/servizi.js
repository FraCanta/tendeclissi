import Partner from "@/components/Almot/Partner";
import HeroPage from "@/components/hero/HeroPage";
import Banner from "@/components/layout/Banner";
import Image from "next/image";
import React from "react";
const Servizi = () => {
  return (
    <div>
      {" "}
      <HeroPage backgroundImage="/assets/chisiamoImg.jpg">
        <h1 className="text-[40px] xl:text-[60px] xl:leading-[1.2] fxl:text-[70px] font-bold text-white xl:max-w-3xl">
          Titolo servizi
        </h1>
        <p className="max-w-5xl text-xl xl:text-2xl fxl:text-[25px] font-regular text-white">
          Breve descrizione dei servizi che offrono tra montaggio, manutenzione
          e motorizzazione - Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. - tipo fino qua
        </p>
      </HeroPage>
      <Partner />
      <Banner />
      <div className="w-[90%] mx-auto min-h-screen py-10 xl:py-32">
        <div className="flex flex-col gap-6">
          <h2 className="text-[35px] md:text-[45px] lg:text-[50px] xl:text-[45px] font-bold text-black">
            Dalla vendita alla riparazione
          </h2>
          <p className="text-lg md:text-[22px] lg:text-xl font-normal text-black max-w-3xl">
            Seguiamo tutta la vita della tua tenda ...- Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.- tipo fino qua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servizi;
