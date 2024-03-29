import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import { MenuButton } from "./MenuButton";
import CtaPrimary from "./CtaPrimary";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isOpen, setOpen] = useState(false);

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
    <motion.div
      style={{
        y: isVisible ? "0%" : "-100%",
        transition: {
          duration: 0.8,
          ease: "linear",
          delay: isVisible ? 0 : 0.8,
        }, // Aggiunto il delay
      }}
      className="w-full h-[5rem] lg:h-[7.5rem] py-4 lg:py-5 bg-lightGray shadow-lg justify-between items-center flex text-black font-normal"
    >
      <div className="w-[90%] m-auto flex justify-between items-center ">
        <Link href="/" className="z-[20]" onClick={() => setOpen(false)}>
          <Image
            src={Logo}
            alt="logo tendeclissi"
            height={80}
            width={80}
            className="h-12 w-12 lg:h-[70px] lg:w-[70px] fxl:h-[80px] fxl:w-[80px]  "
          />
        </Link>
        <div className="flex gap-8 items-center xl:hidden relative">
          <div
            onClick={() => setOpen(!isOpen)}
            className="block ease-in duration-300 z-20 cursor-pointer"
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
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? "0%" : "-100%" }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="absolute top-[100px] left-0 right-0 bottom-0 flex items-center w-full h-screen bg-primary  text-white "
        >
          <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 mt-[50px] md:mt-[100px] gap-y-10">
            <ul className=" h-full flex flex-col">
              <li onClick={() => setOpen(false)}>
                <Link href="/chisiamo">chi siamo</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="/"> showroom</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="/"> Servizi</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="/"> Progetti</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="/"> Contatti</Link>
              </li>

              <li onClick={() => setOpen(false)}>
                <CtaPrimary link="/">Richiedi preventivo</CtaPrimary>
              </li>
            </ul>
          </div>
        </motion.div>
        {/* Menu desktop */}
        <ul className="xl:flex gap-6 2xl:gap-[2.5rem]  text-xl xl:text-lg 2xl:text-xl fxl:text-[1.563rem] uppercase items-center leading-[2.344rem] hidden z-10">
          <li>
            <Link href="/chisiamo">Chi siamo</Link>
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
      </div>
    </motion.div>
  );
};

export default Navbar;
