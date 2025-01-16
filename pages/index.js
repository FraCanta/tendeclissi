import Head from "next/head";
import HeroHome from "@/components/hero/HeroHome";
import MediaText from "@/components/layout/MediaText";
import MediaCards from "@/components/layout/MediaCards";
import jsonData from "@/utils/cards.json";
import FormEco from "@/components/forms/FormEco";
import About from "@/public/assets/img/2.webp";
import Pronto from "@/public/assets/img/pronto-intervento-tenda.webp";

import MediaText3 from "@/components/layout/MediaText3";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tendeclissi | Tende da sole per abitazione ed esterni</title>
        <meta
          name="description"
          content="Siamo professionisti attivi in Veneto e nelle Marche: scopri la nostra gamma di tende da sole classiche, a caduta, cappottine, a vela e pergole per gli esterni."
        />
        <meta
          property="og:url"
          content="https://www.tendeclissi.it
/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Tendeclissi | Tende da sole per abitazione ed esterni"
        />
        <meta
          property="og:description"
          content="Siamo professionisti attivi in Veneto e nelle Marche: scopri la nostra gamma di tende da sole classiche, a caduta, cappottine, a vela e pergole per gli esterni."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tendeclissi.it" />
        <meta property="twitter:url" content="https://www.tendeclissi.it" />
        <meta
          name="twitter:title"
          content="Tendeclissi | Tende da sole per abitazione ed esterni"
        />
        <meta
          name="twitter:description"
          content="Siamo professionisti attivi in Veneto e nelle Marche: scopri la nostra gamma di tende da sole classiche, a caduta, cappottine, a vela e pergole per gli esterni."
        />
      </Head>
      <HeroHome />
      <MediaText
        cta="Chi siamo"
        img={About}
        title="Chi siamo e dove trovarci"
        description="Siamo una squadra specializzata nel mondo dei sistemi ombra <strong>tende da sole e dei servizi correlati</strong>, che offriamo in <strong>Veneto</strong> e nelle <strong>Marche</strong>: scopri il nostro catalogo grazie allo <a href='/showroom' target='_blank'><strong>showroom completamente digitale</strong></a> e contattaci per richiedere un preventivo senza impegno e fissare un sopralluogo!
        "
      />
      <div className="flex flex-col gap-20 mb-0 overflow-hidden">
        <div className="w-full ">
          <MediaCards
            reverseLayout={true}
            img="/assets/img/3.webp"
            mainTitle="I nostri prodotti per privati"
            mainDescription="Che tu stia cercando di creare uno spazio vivibile protetto dal sole e dalle intemperie per una casa, un condominio; vivere al meglio il tuo giardino, aumentare la fruibilità di un’attività commerciale, oppure il modo per riparare o motorizzare le tue tende, siamo pronti a mettere a disposizione tutte le nostre conoscenze, la professionalità e la nostra passione per rispondere alla tua esigenza. Contattaci online per richiedere un preventivo su misura o prenditi un momento per visitare il nostro showroom digitale e scoprire i prodotti che offriamo."
            title="Capppottine"
            cardsData={jsonData.section1}
          />
        </div>
      </div>
      <MediaText3
        cta="Contattaci su WhatsApp"
        img={Pronto}
        title="Pronto intervento tenda"
        link={"https://wa.me/+393513789430"}
        description="In caso di eventi atmosferici improvvisi come forti tempeste, bufere o grandinate, interveniamo in brevissimo tempo per riparare o sostituire la tua tenda."
      />

      <div className="min-h-screen md:min-h-[50vh] xl:min-h-[78vh]  fxl:min-h-[60vh] w-full bg-gradient-to-50 flex flex-col justify-center items-center py-10 lg:py-0">
        <FormEco />
      </div>
    </>
  );
}
