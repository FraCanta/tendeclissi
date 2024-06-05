import Tab from "@/components/ProjectUI/Tab";
import HeroPage from "@/components/hero/HeroPage";
import Banner from "@/components/layout/Banner";
import Head from "next/head";
import React from "react";

const Progetti = () => {
  return (
    <>
      <Head>
        <title>Tendeclissi | I nostri progetti</title>
        <meta
          name="description"
          content="Approfondisci il nostro metodo di lavoro e le soluzioni di tende da sole che offriamo dai nostri progetti per privati e attività commerciali."
        />
        <meta
          property="og:url"
          content="https://www.tendeclissi.it/progetti
/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tendeclissi | I nostri progetti" />
        <meta
          property="og:description"
          content="Approfondisci il nostro metodo di lavoro e le soluzioni di tende da sole che offriamo dai nostri progetti per privati e attività commerciali."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tendeclissi.it/progetti" />
        <meta
          property="twitter:url"
          content="https://www.tendeclissi.it/progetti"
        />
        <meta name="twitter:title" content="Tendeclissi | I nostri progetti" />
        <meta
          name="twitter:description"
          content="Approfondisci il nostro metodo di lavoro e le soluzioni di tende da sole che offriamo dai nostri progetti per privati e attività commerciali."
        />
      </Head>
      <HeroPage className="bg-gradient-to-50">
        <h1 className="text-[40px] xl:text-[60px] xl:leading-[1.2] fxl:text-[70px] font-bold text-white xl:max-w-3xl">
          I nostri lavori migliori
        </h1>
        <p className="max-w-5xl text-xl xl:text-2xl fxl:text-[25px] font-regular text-white">
          Vuoi scoprire di più sui progetti che realizziamo e il nostro metodo
          di lavoro? Qui troverai alcuni dei progetti più interessanti e
          complessi ai quali abbiamo dato vita per abitazioni private, attività
          commerciali ed esterni.
        </p>
      </HeroPage>
      <div className="w-[90%] mx-auto py-10 lg:py-20">
        <Tab />
      </div>
      <Banner
        text="Richiedi un preventivo gratuito"
        description="Scrivici per richiedere un preventivo su misura in base alle tue esigenze: la nostra squadra ti aiuterà a individuare la soluzione più adatta!"
        cta="Richiedi preventivo"
        link="/richiesta-preventivo#preventivo"
      />
    </>
  );
};

export default Progetti;
