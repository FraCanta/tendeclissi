import React from "react";
import CtaPrimary from "../layout/CtaPrimary";
import { Icon } from "@iconify/react";

const FormEco = () => {
  return (
    <>
      <div className="w-[90%] mx-auto lg:text-center flex flex-col gap-4">
        <h2 className="text-white text-[2.5rem] lg:text-6xl">
          Ottieni l&apos;ecobonus con noi!
        </h2>
        <p className="text-white text-xl max-w-3xl mx-auto">
          Spiegazione di che cosa possono fare/inviare/chiedere. Tipo lascia la
          mail per... - Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliquat enim ad minim.
        </p>
        <form className="w-full max-w-3xl mx-auto lg:my-12">
          <div className="flex flex-wrap -mx-3 mb-6 gap-4 md:gap-0">
            <div className="w-full md:w-1/2 px-3">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  px-[33px] py-[15px]  leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Nome"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  px-[33px] py-[15px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Cognome"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 gap-4 lg:gap-0">
            <div className="w-full md:w-1/2 px-3 ">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 px-[33px] py-[15px] leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Numero di telefono"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <button
                className="flex w-full items-center justify-center uppercase 3xl:text-[35px] 4xl:text-[55px]  px-[33px] py-[10px]  md:text-[25px] lg:text-[20px] fxl:text-[25px]   bg-primary text-white font-regular"
                type="submit"
              >
                chiedi il preventivo
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-[90%] mx-auto py-8 lg:py-0">
        <div className=" max-w-3xl mx-auto">
          <label className="text-white ">
            <input type="checkbox" /> Accetto la privacy bla bla bla
          </label>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex justify-center items-center py-6">
        <div className="w-full lg:max-w-3xl mx-auto justify-evenly lg:justify-center flex items-center lg:gap-6">
          <Icon icon="uil:facebook" className="w-6 h-6" />
          <Icon icon="raphael:instagram" className="w-6 h-6" />
          <Icon icon="mingcute:whatsapp-fill" className="w-6 h-6" />
        </div>
      </div>
    </>
  );
};

export default FormEco;
