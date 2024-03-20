import Image from "next/image";
import { Rubik } from "next/font/google";
import Head from "next/head";
import HeroHome from "@/components/hero/HeroHome";
import Banner from "@/components/layout/Banner";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tendeclissi</title>
      </Head>
      <main className={`${rubik.className}`}>
        <HeroHome />
        <div className="h-screen w-full">
          <Banner />
        </div>
      </main>
    </>
  );
}
