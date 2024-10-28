import HeroPage from "@/components/hero/HeroPage";
import MediaCards from "@/components/layout/MediaCards";
import React from "react";
import jsonData from "@/utils/showroom.json";
import Banner from "@/components/layout/Banner";
import Faq from "@/components/FAQ/Faq";
import data from "@/utils/showroom.json";
import Head from "next/head";
import HeroPage2 from "@/components/hero/HeroPage2";
const Showroom = () => {
  return (
    <div>
      <Head>
        <title>Showroom tende da sole | Tendeclissi</title>
        <meta
          name="description"
          content="Esplora il nostro showroom digitale e trova la soluzione per te tra cappottine, tende da sole classiche, tende a caduta, tende a guscio, pergole e vele ombreggianti."
        />
        <meta
          property="og:url"
          content="https://www.tendeclissi.it/showroom
/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Showroom tende da sole | Tendeclissi"
        />
        <meta
          property="og:description"
          content="Esplora il nostro showroom digitale e trova la soluzione per te tra cappottine, tende da sole classiche, tende a caduta, tende a guscio, pergole e vele ombreggianti."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tendeclissi.it/showroom" />
        <meta
          property="twitter:url"
          content="https://www.tendeclissi.it/showroom"
        />
        <meta
          name="twitter:title"
          content="Showroom tende da sole | Tendeclissi"
        />
        <meta
          name="twitter:description"
          content="Esplora il nostro showroom digitale e trova la soluzione per te tra cappottine, tende da sole classiche, tende a caduta, tende a guscio, pergole e vele ombreggianti."
        />
      </Head>
      <HeroPage backgroundImage="/assets/showroom/showroom_hero.webp">
        <h1 className="text-[40px] xl:text-[60px] xl:leading-[1.2] fxl:text-[70px] font-bold text-white xl:max-w-2xl">
          Entra nel nostro showroom digitale
        </h1>
        <p
          className="max-w-7xl text-xl xl:text-2xl fxl:text-[25px] font-regular text-white"
          dangerouslySetInnerHTML={{ __html: data.hero.paragrafo }}
        ></p>
      </HeroPage>
      <div className="flex flex-col gap-20 py-10 overflow-hidden">
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
      <Banner
        text="Prenota un preventivo gratuito"
        description="Scrivici per prenotare una visita dove ti mostreremo il <strong>campionario</strong> e prenderemo le <strong>misure</strong> necessarie a farti il preventivo."
        link="/richiesta-preventivo#preventivo"
        cta="Richiedi preventivo"
      />
    </div>
  );
};

export default Showroom;
