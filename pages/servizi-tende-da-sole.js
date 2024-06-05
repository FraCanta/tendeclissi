import Partner from "@/components/Almot/Partner";
import HeroPage from "@/components/hero/HeroPage";
import Banner from "@/components/layout/Banner";
import Card from "@/components/layout/Card";
import React from "react";
import serviceData from "@/utils/servizi.json";
import PurpleCard from "@/components/layout/PurpleCard";
import Head from "next/head";

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
        <h1 className="text-[40px] xl:text-[60px] xl:leading-[1.2] fxl:text-[70px] font-bold text-white xl:max-w-3xl">
          I nostri servizi
        </h1>
        <p
          className="max-w-5xl text-xl xl:text-2xl fxl:text-[25px] font-regular text-white"
          dangerouslySetInnerHTML={{
            __html:
              "Dalla scelta della tenda all’installazione, fino agli interventi di <strong>riparazione</strong> e <strong>manutenzione</strong>: la nostra squadra può aiutarti in tutte le fasi di vita della tua tenda da sole, offrendoti un <strong>supporto mirato e personalizzato</strong>.",
          }}
        ></p>
      </HeroPage>
      <Partner />
      <Banner
        text="Richiedi un preventivo gratuito"
        description="Scrivici per richiedere un preventivo su misura in base alle tue esigenze: la nostra squadra ti aiuterà a individuare la soluzione più adatta!"
        cta="Richiedi preventivo"
        link="/richiesta-preventivo#preventivo"
      />{" "}
      <div className="w-[90%] mx-auto h-full py-10 xl:py-20 flex flex-col gap-10 min-h-screen">
        <div className="flex flex-col gap-6">
          <h2
            className="text-[35px] md:text-[45px] lg:text-[50px] xl:text-[45px] font-bold text-black"
            id="riparazione-e-manutenzione"
          >
            Riparazione e manutenzione di tende da sole
          </h2>
          <p
            className="text-lg md:text-[22px] lg:text-xl font-normal text-black max-w-3xl"
            dangerouslySetInnerHTML={{
              __html:
                "Dopo il montaggio, ci assicuriamo che la tua tenda possa ripararti dal sole il più a lungo possibile: ci occupiamo di riparazioni, pulizia e interventi di manutenzione, seguendo la tenda da sole in tutta la sua vita.",
            }}
          ></p>
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
            description="Esplora tutti i nostri prodotti nello showroom digitale per trovare quello che cerchi."
            cta="vai allo showroom"
            link="/showroom"
          />
          <PurpleCard
            title="Hai bisogno di aiuto?"
            description="Siamo disponibili a venire nella tua casa o nella tua azienda per consigliarti al meglio."
            cta="Richiedi un sopralluogo"
            link="/richiesta-preventivo#sopralluogo"
          />
        </div>
      </div>
    </div>
  );
};

export default Servizi;
