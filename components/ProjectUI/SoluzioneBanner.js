import React from "react";
import Image from "next/image";
const SoluzioneBanner = () => {
  return (
    <div className="bg-gradient-to-50 min-h-screen flex items-center justify-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto gap-10 py-20 items-center">
        <div className="flex flex-col gap-20">
          <div className="gap-10 flex flex-col">
            <h2 className="text-white text-3xl lg:text-5xl font-bold">
              Soluzione proposta
            </h2>
            <p className="text-white text-xl lg:text-2xl">
              Seguiamo tutta la vita della tua tenda ...- Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.- tipo fino qua
            </p>
          </div>
          <div className="h-full flex flex-col gap-2 lg:gap-10 ">
            <h2 className="text-white text-3xl lg:text-5xl font-bold">
              Tende da sole x
            </h2>
            <div className="relative h-[300px] flex justify-self-start lg:w-7/12">
              <Image
                src="/assets/iPad.svg"
                alt=""
                fill
                className="object-contain aspect-video h-auto"
              />
            </div>
          </div>
        </div>
        <div>
          <ol className="relative border-s border-white p-4 lg:p-8 flex flex-col gap-6 lg:gap-20 w-[90%] mx-auto">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white">
                1
              </span>
              <h4 className="mb-4 text-[25px] font-semibold text-white">
                Installation
              </h4>

              <p className="mb-4 text-base font-normal text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white">
                2
              </span>
              <h4 className="mb-4 text-[25px] font-semibold text-white">
                Setup
              </h4>

              <p className="text-base font-normal text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white">
                3
              </span>
              <h4 className="mb-4 text-[25px] font-semibold text-white">
                Design
              </h4>

              <p className="text-base font-normal text-white ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SoluzioneBanner;
