import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/logo.svg";
import Link from "next/link";
import CtaSecondary from "./CtaSecondary";
const Footer = () => {
  return (
    <>
      <div className="w-full bg-primary py-10 flex flex-col justify-center items-center text-white h-auto gap-y-10 lg:gap-y-[20px] 3xl:py-14">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-10">
          <div className="flex flex-col items-start justify-center gap-2">
            <Image
              src={Logo}
              alt="logo tendeclissi"
              height={80}
              width={80}
              className="h-20 w-20 lg:h-[80px] lg:w-[80px] 3xl:w-[110px] 3xl:h-[110px] fxl:w-[60px] fxl:h-[60px]"
            />
            <p className="font-medium text-white uppercase 3xl:text-xl">
              tendeclissi
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 3xl:gap-14">
            <div className="flex flex-col col-span-2 gap-2 3xl:text-xl">
              <h3>PRODOTTI</h3>

              <Link href="/showroom">Showroom</Link>
            </div>
            <div className="flex flex-col col-span-2 gap-2 3xl:text-xl">
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
            <div className="flex flex-col col-span-2 gap-2 3xl:text-xl">
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
                  <Link
                    href="https://www.instagram.com/_tendeclissi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                  >
                    Instagram{" "}
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61555867858038"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                  >
                    {" "}
                    - Facebook
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@tendeclissi"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="TikTok"
                  >
                    {" "}
                    - TikTok
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:items-end">
            <CtaSecondary link="/richiesta-preventivo#preventivo">
              richiedi preventivo
            </CtaSecondary>
            <div></div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[90%] mx-auto lg:text-center">
          <div className="h-0.5 w-full mx-auto bg-white"></div>
          <small className="pt-6 text-base text-white 3xl:text-xl">
            Michele Soldo - P.iva 02534750449 - Via Bassone 171 Verona (VR)
            37139 -{" "}
            <a
              href="https://www.iubenda.com/privacy-policy/75120188"
              target="_blank"
              title="Privacy Policy "
            >
              Privacy Policy
            </a>{" "}
            -{" "}
            <a
              href="https://www.iubenda.com/privacy-policy/75120188/cookie-policy"
              className="iubenda-white iubenda-noiframe iubenda-embed "
              title="Cookie Policy "
              target="_blank"
            >
              Cookie Policy
            </a>
          </small>
        </div>
      </div>
    </>
  );
};

export default Footer;
