import React from "react";
import { Rubik } from "next/font/google";
import CtaSecondary from "../layout/CtaSecondary";
import { CardHero } from "../layout/CardHero";

const rubik = Rubik({ subsets: ["latin"] });

const HeroHome = () => {
  return (
    <div
      className={`min-h-screen mx-auto relative flex flex-col items-center justify-center gap-12 lg:mt-0 bg-hero ${rubik.className} overflow-x-hidden`}
    >
      {/* Overlay nero opaco */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="flex flex-col justify-center items-center z-10">
        <h1 className="text-[45px] lg:text-[70px] fxl:text-[80px] text-white font-bold">
          Tende da sole
        </h1>
        <p className="text-white text-xl fxl:text-3xl w-[90%] lg:w-[60%] mx-auto text-center font-regular leading-normal">
          Vivamus pretium ultricies lacus, vitae tincidunt arcu malesuada nec.
          Aliquam erat volutpat. Aenean finibus eros et metus eleifend
        </p>
      </div>

      <CtaSecondary link="/">scopri i prodotti</CtaSecondary>

      <div className="lg:w-[70%] mx-auto flex gap-12 z-10 overflow-x-hidden max-w-max">
        <CardHero />
        <CardHero />
        <CardHero />
      </div>
    </div>
  );
};

export default HeroHome;
