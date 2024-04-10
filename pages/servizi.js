import Partner from "@/components/Almot/Partner";
import HeroPage from "@/components/hero/HeroPage";
import Banner from "@/components/layout/Banner";
import Card from "@/components/layout/Card";
import React from "react";
import serviceData from "@/utils/servizi.json";
import Image from "next/image";
import CtaOutline from "@/components/layout/CtaOutline";
import PurpleCard from "@/components/layout/PurpleCard";

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
      <div className="w-[90%] mx-auto h-full py-10 xl:py-20 flex flex-col gap-10 min-h-screen">
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:flex-row gap-4  h-full">
          {serviceData?.servizi.map((item, index) => {
            return (
              <Card
                key={index}
                number={item.number}
                title={item.title}
                description={item.descrizione}
              />
            );
          })}
        </div>
      </div>
      <div className="w-[90%] mx-auto h-full pb-10  ">
        <div className="xl:w-[60%] mx-auto flex flex-col xl:flex-row justify-evenly gap-10">
          <PurpleCard
            title="Sai già cosa ti serve?"
            description="Vedi tutti i nostri prodotti per selezionare ciò che cercavi"
            cta="vai allo showroom"
            link="/showroom"
          />
          <PurpleCard
            title="Hai bisogno di aiuto?"
            description="Siamo disponibili a venire nella tua casa o nella tua azienda per consigliarti al meglio"
            cta="Richiedi un sopralluogo"
            link="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Servizi;
