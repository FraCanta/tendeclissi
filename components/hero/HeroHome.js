import React from "react";
import { Rubik } from "next/font/google";
import Link from "next/link";
import CtaSecondary from "../layout/CtaSecondary";
const rubik = Rubik({ subsets: ["latin"] });

const HeroHome = () => {
  return (
    <div
      className={`h-screen mx-auto relative flex flex-col items-center justify-center gap-12 lg:mt-0  bg-hero ${rubik.className}`}
    >
      {/* Overlay nero opaco */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="flex flex-col justify-center items-center z-10">
        <h1 className="text-[45px] lg:text-[80px] text-white font-bold">
          Tende da sole
        </h1>
        <p className="text-white text-xl lg:text-3xl w-[90%] lg:w-[60%] mx-auto text-center font-normal">
          Vivamus pretium ultricies lacus, vitae tincidunt arcu malesuada nec.
          Aliquam erat volutpat. Aenean finibus eros et metus eleifend
        </p>
      </div>

      <CtaSecondary link="/">scopri i prodotti</CtaSecondary>

      <div className="w-[60%] mx-auto grid grid-cols-3 gap-6 z-10 lg:block hidden">
        <div className=" px-[39px] py-10 flex-col justify-start items-center gap-[17px] inline-flex">
          <div className="w-[41px] h-[34px] relative">
            <img
              className="w-[41px] h-[34px] left-0 top-0 absolute"
              src="https://via.placeholder.com/41x34"
            />
          </div>
          <div className="text-center text-white text-[25px] font-bold font-['Rubik'] leading-[37.50px]">
            Type something
          </div>
          <div className="self-stretch grow shrink basis-0 text-center text-white text-xl font-normal font-['Rubik'] leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur
          </div>
        </div>
        <div className=" px-[39px] py-10 flex-col justify-start items-center gap-[17px] inline-flex">
          <div className="w-[41px] h-[34px] relative">
            <img
              className="w-[41px] h-[34px] left-0 top-0 absolute"
              src="https://via.placeholder.com/41x34"
            />
          </div>
          <div className="text-center text-white text-[25px] font-bold font-['Rubik'] leading-[37.50px]">
            Type something
          </div>
          <div className="self-stretch grow shrink basis-0 text-center text-white text-xl font-normal font-['Rubik'] leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur
          </div>
        </div>
        <div className=" px-[39px] py-10 flex-col justify-start items-center gap-[17px] inline-flex">
          <div className="w-[41px] h-[34px] relative">
            <img
              className="w-[41px] h-[34px] left-0 top-0 absolute"
              src="https://via.placeholder.com/41x34"
            />
          </div>
          <div className="text-center text-white text-[25px] font-bold font-['Rubik'] leading-[37.50px]">
            Type something
          </div>
          <div className="self-stretch grow shrink basis-0 text-center text-white text-xl font-normal font-['Rubik'] leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
