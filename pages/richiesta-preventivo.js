import PreventivoTabs from "@/components/PreventivoUi/PreventivoTabs";
import Tab from "@/components/ProjectUI/Tab";
import HeroPage from "@/components/hero/HeroPage";
import Head from "next/head";
import React from "react";

const Preventivo = () => {
  return (
    <div>
      <Head>
        <title>Tendeclissi | Richiedi un preventivo gratuito</title>
        <meta
          name="description"
          content="Ti aiuteremo a trovare la tenda da sole o la copertura perfetta per la tua abitazione, il tuo giardino o la tua attività commerciale: richiedi un preventivo gratuito!"
        />
        <meta
          property="og:url"
          content="https://www.tendeclissi.it/richiesta-preventivo#preventivo"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Tendeclissi | Richiedi un preventivo gratuito"
        />
        <meta
          property="og:description"
          content="Ti aiuteremo a trovare la tenda da sole o la copertura perfetta per la tua abitazione, il tuo giardino o la tua attività commerciale: richiedi un preventivo gratuito!"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="tendeclissi.it/richiesta-preventivo#preventivo"
        />
        <meta
          property="twitter:url"
          content="https://www.tendeclissi.it/richiesta-preventivo#preventivo"
        />
        <meta
          name="twitter:title"
          content="Tendeclissi | Richiedi un preventivo gratuito"
        />
        <meta
          name="twitter:description"
          content="Ti aiuteremo a trovare la tenda da sole o la copertura perfetta per la tua abitazione, il tuo giardino o la tua attività commerciale: richiedi un preventivo gratuito!"
        />
      </Head>
      <HeroPage backgroundImage="/assets/chisiamoImg.jpg">
        <h1 className="text-[40px] lxl:text-[60px] leading-[1.2] fxl:text-[70px] font-bold text-white xl:max-w-7xl">
          Richiedi il preventivo o il sopralluogo
        </h1>
        <p
          className="max-w-7xl text-xl xl:text-2xl fxl:text-[25px] font-regular text-white"
          dangerouslySetInnerHTML={{
            __html:
              "Hai già deciso qual è la tenda più adatta per la tua abitazione, il tuo giardino o la tua attività commerciale? O hai bisogno di un consiglio per trovare la soluzione giusta in base alle tue esigenze? Richiedendo un preventivo, riceverai gratuitamente via email un preventivo in base alle informazioni che inserirai nel form e in seguito di proporremo un sopralluogo. In alternativa, puoi prenotare direttamente un nostro sopralluogo, in cui discuteremo insieme la tenda da sole perfetta per te. Il nostro team è a disposizione!",
          }}
        ></p>
      </HeroPage>
      <div className="w-[90%] mx-auto py-10 lg:py-20">
        <PreventivoTabs />
      </div>
    </div>
  );
};

export default Preventivo;
