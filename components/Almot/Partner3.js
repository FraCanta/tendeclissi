import Image from "next/image";
import React from "react";
import Almot from "@/public/assets/almot.png";
import Almot2 from "@/public/assets/riparazione.png";
import { Icon } from "@iconify/react";
const Partner3 = () => {
  return (
    <div className="w-[90%] mx-auto min-h-screen flex flex-col justify-center items-center gap-6 my-10">
      <div className="flex flex-col w-full gap-2">
        <h2 className="text-[30px] md:text-[45px] lg:text-[50px] xl:text-[45px] font-bold text-black ">
          Riparazione, manutenzione e altri servizi
        </h2>
        <p className="text-lg md:text-[22px] lg:text-xl font-normal text-black">
          Rispondiamo alle tue esigenze
        </p>
      </div>
      <div className="grid items-center w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="relative h-[350px] lg:h-[700px] w-full ">
          <Image
            src={Almot2}
            alt="avatar"
            fill
            className="object-cover w-auto h-auto"
          />
        </div>

        {/* <div className="grid grid-cols-1 gap-10 lg:gap-20">
          <div className="flex items-center p-4 shadow-xl md:p-6">
            <div className="flex gap-2 justify-evenly">
              <div className="relative w-10 h-auto">
                <Icon
                  icon="material-symbols:award-star-outline"
                  width="2rem"
                  height="2rem"
                  className="text-black"
                />
              </div>

              <div>
                <h4 className="font-bold text-xl md:text-3xl xl:text-xl 2xl:text-2xl fxl:text-[25px]">
                  Valutazione del telaio
                </h4>
                <p className="text-lightPurple">
                  Facciamo un sopralluogo per verificare che la tua tenda sia
                  compatibile.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center p-4 shadow-xl md:p-6">
            <div className="flex gap-2 justify-evenly">
              <div className="relative w-10 h-auto">
                <Icon
                  icon="material-symbols:award-star-outline"
                  width="2rem"
                  height="2rem"
                  className="text-black"
                />
              </div>
              <div>
                <h4 className="font-bold text-xl md:text-3xl xl:text-xl 2xl:text-2xl fxl:text-[25px]">
                  Scelta del motore
                </h4>
                <p className="text-lightPurple">
                  Identifichiamo il motore giusto in base alla tenda e alle tue
                  esigenze.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center p-4 shadow-xl md:p-6">
            <div className="flex gap-2 justify-evenly">
              <div className="relative w-10 h-auto">
                <Icon
                  icon="material-symbols:award-star-outline"
                  width="2rem"
                  height="2rem"
                  className="text-black"
                />
              </div>
              <div>
                <h4 className="font-bold text-xl md:text-3xl xl:text-xl 2xl:text-2xl fxl:text-[25px]">
                  Conversione di tende manuali
                </h4>
                <p className="text-lightPurple">
                  Motorizziamo tende che nascono con sistema manuale.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col items-center">
          <div>
            <ul className="list-disc list-inside text-lg md:text-[22px] lg:text-2xl font-normal text-black flex flex-col gap-3">
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
