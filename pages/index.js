import Head from "next/head";
import HeroHome from "@/components/hero/HeroHome";
import MediaText from "@/components/layout/MediaText";
import MediaCards from "@/components/layout/MediaCards";
import jsonData from "@/utils/cards.json";
import FormEco from "@/components/forms/FormEco";
import About from "@/public/assets/img/2.webp";

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
        cta="Contatti"
        img={About}
        title="Chi siamo e dove trovarci"
        description="Siamo una squadra specializzata nel mondo delle <strong>tende da sole e dei servizi correlati</strong>, che offriamo in <strong>Veneto</strong> e nelle <strong>Marche</strong>: scopri il nostro catalogo grazie allo <a href='/showroom' target='_blank'><strong>showroom completamente digitale</strong></a> e contattaci per richiedere un preventivo senza impegno e fissare un sopralluogo!
        "
      />
      <div className="flex flex-col gap-20 mb-20 overflow-hidden">
        <div className="w-full ">
          <MediaCards
            reverseLayout={true}
            img="/assets/img/3.webp"
            mainTitle="I nostri prodotti per privati"
            mainDescription="Sei alla ricerca del dettaglio giusto per completare la tua abitazione privata? Ti aiutiamo a trovare la soluzione per te tra le nostre cappottine, tende a caduta, classiche e a guscio, creando un riparo dal sole che concilia praticità e resa estetica."
            title="Capppottine"
            cardsData={jsonData.section1}
          />
        </div>
        <div className="w-full ">
          <MediaCards
            reverseLayout={false}
            img="/assets/img/4.webp"
            mainTitle="I nostri prodotti per ristorazione e commercio"
            mainDescription="Personalizza con il tuo brand una delle nostre tende per creare un’area riparata agibile per la tua attività commerciale, riparare dalle intemperie le entrate della tua azienda o completare con il giusto dettaglio estetico l’esterno del tuo agriturismo."
            cardsData={jsonData.section2}
          />
        </div>

        <div className="w-full">
          <MediaCards
            reverseLayout={true}
            img="/assets/img/5.webp"
            mainTitle="I nostri prodotti per aree camping e scuole"
            mainDescription="Vuoi aggiungere un’area ombreggiata all’interno della tua area camping oppure fuori dalla tua scuola, creando un nuovo luogo di aggregazione al riparo dal sole? Scopri le nostre tende con maggiore copertura e pensate per gli esterni."
            cardsData={jsonData.section3}
          />
        </div>
        <div className="w-full ">
          <MediaCards
            reverseLayout={false}
            img="/assets/img/6.webp"
            mainTitle="I nostri servizi per assicurazioni e amministratori di condominio"
            mainDescription="Hai bisogno di riparare o fare manutenzione delle tende del tuo condominio? O sei un assicuratore in cerca di un partner di fiducia che segua le tende dei tuoi clienti lungo tutta la vita del prodotto? Scopri i nostri servizi su misura per te."
            cardsData={jsonData.section4}
          />
        </div>
      </div>

      <div className="min-h-screen md:min-h-[50vh] xl:min-h-[78vh]  fxl:min-h-[60vh] w-full bg-gradient-to-50 flex flex-col justify-center items-center py-10 lg:py-0">
        <FormEco />
      </div>
    </>
  );
}
