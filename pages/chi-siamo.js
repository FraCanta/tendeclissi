import Uni from "@/public/assets/logo_uni.svg";
import React from "react";
import Italy from "@/public/assets/cartina_italia.svg";
import Team from "@/components/Team/Team";
import Stoffe from "@/public/assets/stoffe.png";
import Banner from "@/components/layout/Banner";
import data from "@/utils/chisiamo.json";
import Head from "next/head";
import MediaText2 from "@/components/layout/MediaText2";
import HeroPage2 from "@/components/hero/HeroPage2";
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
      <HeroPage2 backgroundImage="/assets/img/hero_chi_siamo_tendeclissi.webp">
        <div className="flex flex-col gap-6">
          <h1 className="text-[54px] 2xl:text-[60px] xl:text-[50px] fxl:text-[70px] font-bold text-white">
            Tendeclissi
          </h1>
          <h2 className="text-2xl lg:text-[30px] xl:text-2xl 2xl:text-[30px] text-white font-regular">
            Tende da sole per passione
          </h2>
          <p className="max-w-7xl text-lg xl:text-xl 2xl:text-2xl fxl:text-[25px] font-normal text-white">
            Creare sistemi ombra in grado di offrire il riparo dal sole e
            protezione daglia agenti atmosferici è la nostra passione.
            Tendeclissi nasce per rendere vivibile ogni spazio esterno
            realizzando le migliori schermature solari per case, condomini,
            attività commerciali e giardini, specializzandosi soprattutto nel
            mondo delle tende da sole. Grazie all’esperienza pluridecennale
            della nostra squadra, ti guideremo nella scelta della soluzione su
            misura per le tue esigenze e di tutte le attività dal montaggio alla
            manutenzione e riparazione/assistenza nel corso del tempo.
          </p>
        </div>
      </HeroPage2>
      <MediaText2
        cta="contatti"
        img={Italy}
        link="/contatti"
        title="Dove trovarci"
        alt="Cartina dell’Italia con evidenziate in blu il Veneto e in giallo le Marche, dove Tendeclissi è operativa."
        description={data.dove.descrizione}
      />
      <Team data={data.team} />
      <MediaText2
        img={Stoffe}
        img2={Uni}
        link="/showroom"
        cta="Vai allo showroom"
        title="La qualità dei nostri prodotti"
        description="Nella scelta dei prodotti da offrire ai nostri clienti ci impegniamo per proporre il più possibile <strong>materiali</strong> di <strong>lavorazione italiana</strong>, a partire dalla provenienza della componentistica, affidandoci a fornitori nazionali con esperienza pluridecennale consolidata sul territorio. Utilizziamo componenti in leghe metalliche prodotte in Veneto e scegliamo materiali solidi che garantiscono la massima resistenza, durevolezza e longevità delle strutture nel tempo. Disponiamo dei migliori marchi di tessuti nazionali ed internazionali di aziende leader nel settore come <strong>Parà Tempotest</strong>, <strong>Giovanardi</strong>, <strong>Sattler</strong>, <strong>Corti</strong>, <strong>Dickson</strong>, <strong>Swela</strong> tutti con garanzia Europea e certificazione UNI EN 13561 per offrire il massimo della resistenza e la migliore qualità possibile.  "
      />
      <Banner
        text="Prenota un sopralluogo gratuito"
        description="Scrivici per prenotare un sopralluogo: prenderemo le misure, ti mostreremo le possibili soluzioni e potrai scegliere il tessuto più adatto ai tuoi bisogni direttamente dal nostro campionario fisico."
        cta="Richiedi un preventivo"
        link="/richiesta-preventivo#sopralluogo"
      />
      {/* <VideoPlayer /> */}
    </div>
  );
};

export default Chisiamo;
