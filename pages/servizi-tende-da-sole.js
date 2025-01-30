import Partner from "@/components/Almot/Partner";
import HeroPage from "@/components/hero/HeroPage";
import Banner from "@/components/layout/Banner";
import Card from "@/components/layout/Card";
import React from "react";
import serviceData from "@/utils/servizi.json";
import PurpleCard from "@/components/layout/PurpleCard";
import Head from "next/head";
import Partner2 from "@/components/Almot/Partner2";
import Partner3 from "@/components/Almot/Partner3";

const Servizi = () => {
  return (
    <div>
      <Head>
        <title>Servizi per tende da sole | Tendeclissi</title>
        <meta
          name="description"
          content="Ci occupiamo della riparazione di tende da sole, di manutenzione e motorizzazione. Seguiamo la tua tenda dall’acquisto in tutta la sua vita: scopri i nostri servizi."
        />
        <meta
          property="og:url"
          content="https://www.tendeclissi.it/servizi-tende-da-sole
/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Servizi per tende da sole | Tendeclissi"
        />
        <meta
          property="og:description"
          content="Ci occupiamo della riparazione di tende da sole, di manutenzione e motorizzazione. Seguiamo la tua tenda dall’acquisto in tutta la sua vita: scopri i nostri servizi."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="tendeclissi.it/servizi-tende-da-sole"
        />
        <meta
          property="twitter:url"
          content="https://www.tendeclissi.it/servizi-tende-da-sole"
        />
        <meta
          name="twitter:title"
          content="Servizi per tende da sole | Tendeclissi"
        />
        <meta
          name="twitter:description"
          content="Ci occupiamo della riparazione di tende da sole, di manutenzione e motorizzazione. Seguiamo la tua tenda dall’acquisto in tutta la sua vita: scopri i nostri servizi."
        />
      </Head>
      <HeroPage backgroundImage="/assets/chisiamoImg.jpg">
        <h1 className="text-[40px] xl:text-[50px] xl:leading-normal 2xl:text-[60px] 2xl:leading-[1.2] fxl:text-[70px] font-bold text-white xl:max-w-3xl">
          I nostri servizi
        </h1>
        <p
          className="max-w-5xl text-lg xl:text-xl 2xl:text-2xl fxl:text-[25px] font-regular text-white"
          dangerouslySetInnerHTML={{
            __html:
              "Dalla scelta della tenda all’installazione, fino agli interventi di <strong>riparazione</strong> e <strong>manutenzione</strong>: la nostra squadra può aiutarti in tutte le fasi di vita della tua tenda da sole, offrendoti un <strong>supporto mirato e personalizzato</strong>.",
          }}
        ></p>
      </HeroPage>
      <Partner />
      <Partner2 />
      <Partner3 />
      <Banner
        icon={"mage:whatsapp-filled"}
        text="Rispondiamo alle tue esigenze"
        description="Scrivici per spiegarci al meglio quali sono le tue necessità e la nostra squadra ti aiuterà a individuare la soluzione più adatta!"
        cta="Contattaci su WhatsApp"
        link={"https://wa.me/+393513789430"}
      />{" "}
      <div className="w-[90%] mx-auto h-full my-10  ">
        <div className="2xl:w-[60%] mx-auto flex flex-col xl:flex-row justify-evenly gap-10">
          <PurpleCard
            title="Sai già cosa ti serve?"
            description="Esplora tutti i nostri prodotti nello showroom digitale per trovare quello che cerchi."
            cta="vai allo showroom"
            link="/showroom"
          />
          <PurpleCard
            title="Hai bisogno di aiuto?"
            description="Scrivici per spiegarci al meglio quali sono le tue necessità!"
            cta="Contattaci su whatsapp"
            icon={"mage:whatsapp-filled"}
            link={"https://wa.me/+393513789430"}
          />
        </div>
      </div>
    </div>
  );
};

export default Servizi;
