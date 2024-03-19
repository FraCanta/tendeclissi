import Image from "next/image";
import { Rubik } from "next/font/google";
import Head from "next/head";
import HeroHome from "@/components/hero/HeroHome";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tendeclissi</title>
      </Head>
      <main className={`${rubik.className}`}>
        <HeroHome />
      </main>
    </>
  );
}
