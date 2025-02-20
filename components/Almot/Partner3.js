import Image from "next/image";
import React from "react";
import Almot from "@/public/assets/almot.png";
import Almot2 from "@/public/assets/riparazione.png";
import { Icon } from "@iconify/react";
const Partner3 = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col justify-center items-center gap-6 my-10 3xl:my-[150px]">
      <div className="flex flex-col w-full gap-2">
        <h2 className="text-[30px] md:text-[45px] lg:text-[50px] xl:text-[45px] font-bold text-black  3xl:text-[60px]">
          Riparazione, manutenzione e altri servizi
        </h2>
        <p className="text-lg md:text-[22px] lg:text-xl font-normal text-black 3xl:text-3xl">
          Rispondiamo alle tue esigenze
        </p>
      </div>
      <div className="grid items-center w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="relative h-[350px] lg:h-[700px] w-full ">
          <Image
            src={Almot2}
            alt="avatar"
            fill
            className="object-cover object-top w-auto h-auto"
          />
        </div>

        <div className="flex flex-col items-center">
          <div>
            <ul className="list-disc list-inside text-lg md:text-[22px] lg:text-2xl font-normal text-black flex flex-col gap-3 3xl:text-3xl">
              <li>Inversione della tela</li>
              <li>Pulizia dei telai</li>
              <li>Installazione tettuccio di protezione</li>
              <li>Installazione sensori a vibrazione, vento, sole e pioggia</li>
              <li>Riparazione dei bracci</li>
              <li>Riparazione dell’arganello</li>
              <li>Sostituzione delle braccia</li>
              <li>
                Sostituzione di componenti specifiche dell’impianto di
                motorizzazione
              </li>
              <li>
                Installazione gestione e controllo domotica su tende motorizzate
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner3;
