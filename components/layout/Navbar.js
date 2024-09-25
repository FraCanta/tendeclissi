import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import { MenuButton } from "./MenuButton";
import CtaPrimary from "./CtaPrimary";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const { locale, pathname } = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <motion.div className="w-full h-[5rem] lg:h-[8.5rem]  bg-lightGray shadow-lg justify-between items-center flex text-black font-normal relative z-[9999]">
      <div className="w-[90%] m-auto flex justify-between items-center ">
        <Link href="/" onClick={() => setOpen(false)} className=" z-[9999]">
          <div className="flex flex-col items-center justify-center gap-1">
            <Image
              src={Logo}
              alt="logo tendeclissi"
              height={80}
              width={80}
              className="h-14 w-14 lg:h-[70px] lg:w-[70px] "
            />
            <p className="hidden font-medium text-black uppercase lg:block">
              tendeclissi
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-8 xl:hidden ">
          <div
            onClick={() => setOpen(!isOpen)}
            className="block ease-in duration-300 z-[999] cursor-pointer"
          >
            <MenuButton
              isOpen={isOpen}
              onClick={() => setOpen(!isOpen)}
              strokeWidth="3"
              className="stroke-primary toggle"
              transition={{ ease: "easeOut", duration: 0.2 }}
              width="32"
              height="16"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: "70px" }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? "0%" : "-100%" }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="absolute top-[70px] left-0 right-0 bottom-0 flex items-center w-full h-[70vh] bg-purple  text-white z-20"
        >
          <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 h-full">
            <ul className=" h-full flex flex-col justify-evenly uppercase text-center text-[22px]">
              <li onClick={() => setOpen(false)}>
                <Link
                  href="/chi-siamo"
                  className={` ${
                    pathname === "/chi-siamo"
                      ? "font-semibold underline underline-offset-4 transition-all ease-linear"
                      : ""
                  }`}
                >
                  chi siamo
                </Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link
                  href="/showroom"
                  className={` ${
                    pathname === "/showroom"
                      ? "font-semibold underline underline-offset-4 transition-all ease-linear"
                      : ""
                  }`}
                >
                  {" "}
                  showroom
                </Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link
                  href="/servizi-tende-da-sole"
                  className={` ${
                    pathname === "/servizi-tende-da-sole"
                      ? "font-semibold underline underline-offset-4 transition-all ease-linear"
                      : ""
                  }`}
                >
                  {" "}
                  Servizi
                </Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link
                  href="/progetti"
                  className={` ${
                    pathname === "/progetti"
                      ? "font-semibold underline underline-offset-4 transition-all ease-linear"
                      : ""
                  }`}
                >
                  {" "}
                  Progetti
                </Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link
                  href="/contatti"
                  className={` ${
                    pathname === "/contatti"
                      ? "font-semibold underline underline-offset-4 transition-all ease-linear"
                      : ""
                  }`}
                >
                  {" "}
                  Contatti
                </Link>
              </li>

              <li onClick={() => setOpen(false)}>
                <CtaPrimary link="/richiesta-preventivo#preventivo">
                  Richiedi preventivo
                </CtaPrimary>
              </li>
            </ul>
          </div>
        </motion.div>
        {/* Menu desktop */}
        <ul className="xl:flex gap-6 2xl:gap-[2.5rem]  text-xl xl:text-lg 2xl:text-xl fxl:text-[1.563rem] uppercase items-center leading-[2.344rem] hidden z-[9999]">
          <li>
            <Link
              href="/chi-siamo"
              className={` ${
                pathname === "/chi-siamo"
                  ? "font-semibold underline underline-offset-4 transition-all ease-linear"
                  : ""
              }`}
            >
              Chi siamo
            </Link>
          </li>
          <li>
            <Link
              href="/showroom"
              className={` ${
                pathname === "/showroom"
                  ? "font-semibold underline underline-offset-4 transition-all ease-linear"
                  : ""
              }`}
            >
              Showroom digitale
            </Link>
          </li>
          <li>
            <Link
              href="/servizi-tende-da-sole"
              className={` ${
                pathname === "/servizi-tende-da-sole"
                  ? "font-semibold underline underline-offset-4 transition-all ease-linear"
                  : ""
              }`}
            >
              Servizi
            </Link>
          </li>
          <li>
            <Link
              href="/progetti"
              className={` ${
                pathname === "/progetti"
                  ? "font-semibold underline underline-offset-4 transition-all ease-linear"
                  : ""
              }`}
            >
              Progetti
            </Link>
          </li>
          <li>
            <Link
              href="/contatti"
              className={` ${
                pathname === "/contatti"
                  ? "font-semibold underline underline-offset-4 transition-all ease-linear"
                  : ""
              }`}
            >
              Contatti
            </Link>
          </li>
          <li>
            <CtaPrimary link="/richiesta-preventivo#preventivo">
              Richiedi preventivo
            </CtaPrimary>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
