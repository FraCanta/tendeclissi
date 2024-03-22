import Head from "next/head";
import HeroHome from "@/components/hero/HeroHome";
import Banner from "@/components/layout/Banner";
import MediaText from "@/components/layout/MediaText";
import MediaCards from "@/components/layout/MediaCards";

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
      <div className="flex flex-col gap-20 overflow-x-hidden">
        <div className="w-full ">
          <MediaCards reverseLayout={true} img="/assets/img1.jpg" />
        </div>
        <div className="w-full ">
          <MediaCards reverseLayout={false} img="/assets/img2.jpg" />
        </div>

        <div className="w-full">
          <MediaCards reverseLayout={true} img="/assets/img3.jpg" />
        </div>
        <div className="w-full ">
          <MediaCards reverseLayout={false} img="/assets/img4.jpg" />
        </div>
      </div>

      {/* <div className="h-screen w-full">
        <Banner />
      </div> */}
    </>
  );
}
