import HeroPage from "@/components/hero/HeroPage";
import MediaCards from "@/components/layout/MediaCards";
import React from "react";
import jsonData from "@/utils/showroom.json";
import Banner from "@/components/layout/Banner";
import Faq from "@/components/FAQ/Faq";
import data from "@/utils/showroom.json";
const Showroom = () => {
  console.log(jsonData);
  return (
    <div>
      <HeroPage backgroundImage="/assets/chisiamoImg.jpg">
        <h1 className="text-[40px] xl:text-[60px] xl:leading-[1.2] fxl:text-[70px] font-bold text-white xl:max-w-2xl">
          Entra nel nostro showroom digitale
        </h1>
        <p
          className="max-w-7xl text-xl xl:text-2xl fxl:text-[25px] font-regular text-white"
          dangerouslySetInnerHTML={{ __html: data.hero.paragrafo }}
        ></p>
      </HeroPage>
      <div className="flex flex-col gap-20 overflow-hidden ">
        <div className="w-full ">
          <MediaCards
            reverseLayout={false}
            img={data.cappottine.img}
            mainTitle="Cappottine"
            mainDescription={data.cappottine.descrizione}
            cardsData={jsonData.section1}
          />
        </div>
        <div className="w-full ">
          <MediaCards
            reverseLayout={true}
            img={data.tendeDaSole.img}
            mainTitle="Tende da sole"
            mainDescription={data.tendeDaSole.descrizione}
            cardsData={jsonData.section2}
          />
        </div>

        <div className="w-full">
          <MediaCards
            reverseLayout={false}
            img={data.giardino.img}
            mainTitle="Tende da sole per esterni e giardini"
            mainDescription={data.giardino.descrizione}
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
