import HeroPage from "@/components/hero/HeroPage";
import MediaText from "@/components/layout/MediaText";
import React from "react";
import Italy from "@/public/assets/italy2.svg";
import Team from "@/components/Team/Team";
import Stoffe from "@/public/assets/stoffe.png";
import Banner from "@/components/layout/Banner";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import data from "@/utils/chisiamo.json";
import Head from "next/head";
const Chisiamo = () => {
  return (
    <div>
      <Head>
        <title>Tendeclissi | Chi siamo e dove trovarci</title>
        <meta
          name="description"
          content="Il mondo delle tende da sole è la nostra passione: con la nostra squadra offriamo prodotti e servizi in Veneto e nelle Marche."
        />
        <meta
          property="og:url"
          content="https://www.tendeclissi.it/chi-siamo
/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Tendeclissi | Chi siamo e dove trovarci"
        />
        <meta
          property="og:description"
          content="Il mondo delle tende da sole è la nostra passione: con la nostra squadra offriamo prodotti e servizi in Veneto e nelle Marche."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tendeclissi.it/chi-siamo" />
        <meta
          property="twitter:url"
          content="https://www.tendeclissi.it/chi-siamo"
        />
        <meta
          name="twitter:title"
          content="Tendeclissi | Chi siamo e dove trovarci"
        />
        <meta
          name="twitter:description"
          content="Il mondo delle tende da sole è la nostra passione: con la nostra squadra offriamo prodotti e servizi in Veneto e nelle Marche."
        />
      </Head>
      <HeroPage backgroundImage="/assets/chisiamoImg.jpg">
        <div className="flex flex-col gap-6">
          <h1 className="text-[54px] xl:text-[60px] fxl:text-[70px] font-bold text-white">
            Tendeclissi
          </h1>
          <h2 className="text-2xl lg:text-[30px] text-white font-regular">
            Tende da sole per passione
          </h2>
          <p className="max-w-7xl text-xl xl:text-2xl fxl:text-[25px] font-normal text-white">
            Creare il riparo perfetto dal sole è la nostra passione: Tendeclissi
            nasce per rispondere alle esigenze di case, condomini, attività
            commerciali e giardini, specializzandosi in tutto ciò che è il mondo
            delle tende da sole. Grazie all’esperienza pluridecennale della
            nostra squadra, ti guideremo nella scelta della tenda su misura per
            le tue esigenze e di tutte le attività dal montaggio alla
            manutenzione e riparazione nel corso del tempo.
          </p>
        </div>
      </HeroPage>
      <MediaText
        cta="contatti"
        img={Italy}
        title="Dove trovarci"
        description={data.dove.descrizione}
      />
      <Team data={data.team} />
      <MediaText
        img={Stoffe}
        cta="Vai allo showroom"
        title="La qualità dei nostri prodotti"
        description="Offriamo i nostri servizi in Veneto e nelle Marche, e grazie al nostro showroom completamente digitale è possibile esplorare i prodotti che offriamo da qualsiasi posto e a qualsiasi ora: una scelta che abbiamo preso per poter raggiungere con la passione per il nostro lavoro sempre più persone.
        Contattaci per richiedere un campione dei nostri prodotti, richiedere un preventivo senza impegno e fissare un sopralluogo!"
      />
      <Banner
        text="Prenota un sopralluogo gratuito"
        description="Scrivici per prenotare un sopralluogo: ti mostreremo il <strong>campionario</strong> e prenderemo le <strong>misure</strong> necessarie per definire il tuo preventivo."
        cta="Richiedi un preventivo"
        link="/richiesta-preventivo#sopralluogo"
      />
      <VideoPlayer />
    </div>
  );
};

export default Chisiamo;
