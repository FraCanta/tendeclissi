import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/assets/logo.svg";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div
      className={`w-full h-[80px] lg:h-[120px] py-4 lg:py-5 bg-lightGray shadow-lg justify-between items-center flex text-black font-normal ${rubik.className}`}
    >
      <nav className="w-[90%] mx-auto flex justify-between items-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={Logo}
            alt="logo tendeclissi"
            height={80}
            width={80}
            className="h-14 w-14 lg:h-[80px] lg:w-[80px] "
          />
          <p className="uppercase text-black font-medium hidden lg:block">
            tendeclissi
          </p>
        </div>
        <ul className="lg:flex gap-[40px]  text-[23px] uppercase items-center leading-[37.50px] hidden ">
          <li>
            <Link href="/">Chi siamo</Link>
          </li>
          <li>
            <Link href="/">Showroom digitale</Link>
          </li>
          <li>
            <Link href="/">Servizi</Link>
          </li>
          <li>
            <Link href="/">Progetti</Link>
          </li>
          <li>
            <Link href="/">Contatti</Link>
          </li>
          <li className="bg-primary py-[15px] px-[33px] text-white">
            <Link href="/">Richiedi preventivo</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
