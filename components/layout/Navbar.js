import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/assets/logo.svg";
import { Rubik } from "next/font/google";
import { Icon } from "@iconify/react";
import CtaPrimary from "./CtaPrimary";
const rubik = Rubik({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div
      className={`w-full h-[80px] lg:h-[120px] py-4 lg:py-5 bg-lightGray shadow-lg justify-between items-center flex text-black font-normal ${rubik.className}`}
    >
      <nav className="w-[90%] mx-auto flex justify-between items-center">
        <div className="flex flex-col items-center justify-center gap-1">
          <Image
            src={Logo}
            alt="logo tendeclissi"
            height={80}
            width={80}
            className="h-12 w-12 lg:h-[70px] lg:w-[70px] fxl:h-[80px] fxl:w-[80px]  "
          />
          {/* <p className="uppercase text-black font-medium hidden lg:block">
            tendeclissi
          </p> */}
        </div>
        <Icon
          icon="ion:menu-outline"
          className="lg:hidden flex w-10 h-10 text-primary"
        />

        <ul className="lg:flex gap-6 2xl:gap-[40px]  text-[20px] fxl:text-[23px] uppercase items-center leading-[37.50px] hidden ">
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
          <li>
            <CtaPrimary link="/">Richiedi preventivo</CtaPrimary>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
