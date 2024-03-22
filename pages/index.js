import Head from "next/head";
import HeroHome from "@/components/hero/HeroHome";
import Banner from "@/components/layout/Banner";
import MediaText from "@/components/layout/MediaText";
import MediaCards from "@/components/layout/MediaCards";
import jsonData from "@/utils/cards.json";
export default function Home() {
  return (
    <>
      <Head>
        <title>Tendeclissi</title>
      </Head>
      <HeroHome />
      <MediaText
        title="Chi siamo e dove trovarci"
        description="Spiegazione che riuassuma la pagina contatti dando le info fondamentali - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori - tipo fino qua"
      />
      <div className="flex flex-col gap-20 overflow-hidden mb-20">
        <div className="w-full ">
          <MediaCards
            reverseLayout={true}
            img="/assets/img1.jpg"
            mainTitle="I nostri prodotti/servizi per i privati"
            mainDescription="Qui andiamo a lavorare sui vari target raggruppandoli e spieghiamo che risolviamo tutte le esigenze - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.- tipo fino qua"
            title="Capppottine"
            cardsData={jsonData.section1}
          />
        </div>
        <div className="w-full ">
          <MediaCards
            reverseLayout={false}
            img="/assets/img2.jpg"
            mainTitle="I nostri prodotti per ristorazione e commercio"
            mainDescription="Qui andiamo a lavorare sui vari target raggruppandoli e spieghiamo che risolviamo tutte le esigenze - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.- tipo fino qua"
            cardsData={jsonData.section2}
          />
        </div>

        <div className="w-full">
          <MediaCards
            reverseLayout={true}
            img="/assets/img3.jpg"
            mainTitle="I nostri prodotti per proprietari di camping e scuole"
            mainDescription="Qui andiamo a lavorare sui vari target raggruppandoli e spieghiamo che risolviamo tutte le esigenze - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.- tipo fino qua"
            cardsData={jsonData.section3}
          />
        </div>
        <div className="w-full ">
          <MediaCards
            reverseLayout={false}
            img="/assets/img4.jpg"
            mainTitle="I nostri prodotti per proprietari di camping e scuole"
            mainDescription="Qui andiamo a lavorare sui vari target raggruppandoli e spieghiamo che risolviamo tutte le esigenze - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.- tipo fino qua"
            cardsData={jsonData.section4}
          />
        </div>
      </div>

      {/* <div className="h-screen w-full">
        <Banner />
      </div> */}
    </>
  );
}
