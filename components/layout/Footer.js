import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/logo.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="w-full bg-primary py-10 flex flex-col justify-center items-center text-white h-auto gap-y-10 lg:gap-y-[20px]">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-10">
          <div className="flex flex-col items-start justify-center gap-2">
            <Image
              src={Logo}
              alt="logo tendeclissi"
              height={80}
              width={80}
              className="h-20 w-20 lg:h-[80px] lg:w-[80px] "
            />
            <p className="uppercase text-white font-medium">tendeclissi</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <h3>PRODOTTI</h3>
              <ul>
                <li>
                  <Link href="/">Tenda classica</Link>
                </li>
                <li>
                  <Link href="/">Capottine mobili</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3>SERVIZI</h3>
              <ul>
                <li>
                  <Link href="/">Cambio tela</Link>
                </li>
                <li>
                  <Link href="/">Motorizzazione</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3>CONTATTI</h3>
              <ul>
                <li>
                  <Link href="/">info@tendeclissi.it</Link>
                </li>
                <li>
                  <Link href="/">877-255-7945</Link>
                </li>
                <li>
                  <Link href="/">Instagram - Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:items-end">
            <Link
              href="/"
              className="bg-white py-[15px] px-[33px] text-primary max-w-max uppercase font-medium"
            >
              Richiedi preventivo
            </Link>
            <div></div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[90%] mx-auto text-center">
          <div className="h-0.5 w-full mx-auto bg-white"></div>
          <p className="pt-6">
            Dati società - P.iva 123456789 - Sede legale - Privacy Policy -
            Cookie Policy
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
