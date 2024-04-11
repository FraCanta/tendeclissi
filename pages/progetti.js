import Tab from "@/components/ProjectUI/Tab";
import HeroPage from "@/components/hero/HeroPage";
import Banner from "@/components/layout/Banner";
import React from "react";

const Progetti = () => {
  return (
    <>
      <HeroPage className="bg-gradient-to-50">
        <h1 className="text-[40px] xl:text-[60px] xl:leading-[1.2] fxl:text-[70px] font-bold text-white xl:max-w-3xl">
          I nostri migliori lavori
        </h1>
        <p className="max-w-5xl text-xl xl:text-2xl fxl:text-[25px] font-regular text-white">
          Sottotitolo che descriva che in questa pagina spiegheranno il loro
          lavoro su progetti complessi per aziende e altre realtà - Lorem ipsum
          dolor sit amet, consectetur adipiscing elit - tipo fino qua
        </p>
      </HeroPage>
      <div className="w-[90%] mx-auto py-10 lg:py-20">
        <Tab />
      </div>
      <Banner />
    </>
  );
};

export default Progetti;
