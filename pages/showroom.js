import HeroPage from "@/components/hero/HeroPage";
import MediaCards from "@/components/layout/MediaCards";
import React from "react";
import jsonData from "@/utils/showroom.json";
import Banner from "@/components/layout/Banner";
import Faq from "@/components/FAQ/Faq";

const Showroom = () => {
  return (
    <div>
      <HeroPage backgroundImage="/assets/chisiamoImg.jpg">
        <h1 className="text-[40px] xl:text-[60px] xl:leading-[1.2] fxl:text-[70px] font-bold text-white xl:max-w-2xl">
          Entra nel nostro showroom digitale
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
      <div className="flex flex-col gap-20 overflow-hidden ">
        <div className="w-full ">
          <MediaCards
            reverseLayout={false}
            img="/assets/showroom.jpg"
            mainTitle="Cappottine"
            mainDescription="Qui andiamo a lavorare sui vari target raggruppandoli e spieghiamo che risolviamo tutte le esigenze - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.- tipo fino qua"
            cardsData={jsonData.section1}
          />
        </div>
        <div className="w-full ">
          <MediaCards
            reverseLayout={true}
            img="/assets/showroom.jpg"
            mainTitle="Tende"
            mainDescription="Qui andiamo a lavorare sui vari target raggruppandoli e spieghiamo che risolviamo tutte le esigenze - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.- tipo fino qua"
            cardsData={jsonData.section2}
          />
        </div>

        <div className="w-full">
          <MediaCards
            reverseLayout={false}
            img="/assets/showroom.jpg"
            mainTitle="In giardino"
            mainDescription="Qui andiamo a lavorare sui vari target raggruppandoli e spieghiamo che risolviamo tutte le esigenze - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.- tipo fino qua"
            cardsData={jsonData.section3}
          />
        </div>
      </div>
      <Faq />
      <Banner />
    </div>
  );
};

export default Showroom;
