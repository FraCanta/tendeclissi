import Image from "next/image";
import { Rubik } from "next/font/google";
import Head from "next/head";
import HeroHome from "@/components/hero/HeroHome";
import Banner from "@/components/layout/Banner";
import MediaText from "@/components/layout/MediaText";

const rubik = Rubik({ subsets: ["latin"] });

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
      <div className="h-screen w-full">
        <Banner />
      </div>
    </>
  );
}
