import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/logo.svg";
import Link from "next/link";
import CtaSecondary from "./CtaSecondary";
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
            <p className="font-medium text-white uppercase">tendeclissi</p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
            <div className="flex flex-col col-span-2 gap-2">
              <h3>PRODOTTI</h3>
              <ul>
                <li>
                  <Link href="/showroom/tende-da-sole#tende-da-sole-classiche">
                    Tenda classica
                  </Link>
                </li>
                <li>
                  <Link href="/showroom/tende-cappottine#cappottine-mobili">
                    Capottine mobili
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col col-span-2 gap-2">
              <h3>SERVIZI</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/servizi-tende-da-sole#motorizzazione">
                    Motorizzazione delle tende da sole
                  </Link>
                </li>
                <li>
                  <Link href="/servizi-tende-da-sole#riparazione-e-manutenzione">
                    Riparazione e manutenzione di tende da sole
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col col-span-2 gap-2">
              <h3>CONTATTI</h3>
              <ul>
                <li>
                  <Link href="/">info@tendeclissi.it</Link>
                </li>
                <li>
                  <Link href="/">
                    {" "}
                    +39 328 7512239 <br /> +39 351 3789430
                  </Link>
                </li>
                <li>
                  <Link href="/">Instagram - Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:items-end">
            <CtaSecondary link="/richiesta-preventivo#preventivo#preventivo">
              richiedi preventivo
            </CtaSecondary>
            <div></div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[90%] mx-auto lg:text-center">
          <div className="h-0.5 w-full mx-auto bg-white"></div>
          <small className="pt-6 text-base text-white">
            Michele Soldo - P.iva 02534750449 - Via Bassone 171 Verona (VR)
            37139 - Privacy Policy - Cookie Policy
          </small>
        </div>
      </div>
    </>
  );
};

export default Footer;
