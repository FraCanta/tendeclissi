import React from "react";
import CtaPrimary from "../layout/CtaPrimary";
import { Icon } from "@iconify/react";

const FormEco = () => {
  return (
    <>
      <div className="w-[90%] mx-auto lg:text-center flex flex-col gap-4">
        <h2 className="text-white text-[2rem] lg:text-6xl xl:text-5xl 2xl:text-6xl">
          Ottieni l&apos;ecobonus sulle tende da sole con noi!
        </h2>
        <p
          className="max-w-6xl mx-auto text-lg text-white lg:text-xl"
          dangerouslySetInnerHTML={{
            __html:
              "Per ottenere la detrazione fiscale sulle tende da sole, <strong>inviaci un’email</strong> indicando gli interventi che vorresti dichiarare: ti aiuteremo a individuare tutte le <strong>spese includibili</strong> nel bonus e ti forniremo tutti i <strong>dettagli tecnici dei prodotti</strong>.",
          }}
        ></p>
        <form className="w-full max-w-3xl mx-auto lg:my-12">
          <div className="flex flex-col gap-4 mb-6 -mx-3 lg:flex-row">
            <div className="w-full p-2 px-3 bg-white border md:w-1/2 border-yellow">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-purple px-[22px] py-[12px]  lg:px-[33px] lg:py-[15px]  leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Nome"
              />
            </div>
            <div className="w-full p-2 px-3 bg-white border md:w-1/2 border-yellow">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-purple  px-[22px] py-[12px]  lg:px-[33px] lg:py-[15px]  leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Cognome"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 -mx-3 lg:flex-row ">
            <div className="w-full p-2 px-3 bg-white border md:w-1/2 border-yellow">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-purple  px-[22px] py-[12px]  lg:px-[33px] lg:py-[15px]  leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Numero di telefono"
              />
            </div>
            <div className="flex items-center w-full p-2 px-3 md:w-1/2">
              <button
                className="flex w-full items-center justify-center uppercase 3xl:text-[35px] 4xl:text-[55px]  px-[22px] py-[12px]  lg:px-[33px] lg:py-[15px]  md:text-[25px] lg:text-xl fxl:text-[25px]   bg-primary text-white font-regular"
                type="submit"
              >
                Ricevi informazioni
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-[90%] mx-auto py-8 lg:py-0">
        <div className="max-w-3xl mx-auto ">
          <label className="text-white ">
            <input type="checkbox" />{" "}
            <span
              dangerouslySetInnerHTML={{
                __html:
                  "Ho letto l'<a href='/privacy-policy'><strong>informativa sulla privacy</strong></a> e acconsento alla memorizzazione dei miei dati, secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali n. 679/2016 (GDPR), per avere informazioni sui servizi di www.tendeclissi.it",
              }}
            ></span>
          </label>
        </div>
      </div>
    </>
  );
};

export default FormEco;
