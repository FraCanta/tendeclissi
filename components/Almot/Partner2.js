import Image from "next/image";
import React from "react";
import Almot from "@/public/assets/almot.png";
import Almot2 from "@/public/assets/img/riparazione.webp";
import { Icon } from "@iconify/react";
const Partner2 = () => {
  return (
    <div className="w-[90%] mx-auto min-h-screen flex flex-col justify-center items-center gap-6 my-10 ">
      <div className="grid items-center grid-cols-1 gap-10 xl:grid-cols-2 ">
        <div className="flex flex-col gap-6" id="motorizzazione">
          <h2 className="text-[30px] md:text-[45px] lg:text-[50px] xl:text-[45px] font-bold text-black max-w-2xl">
            Cambio tela
          </h2>
          <p className="text-lg md:text-[22px] lg:text-xl font-normal text-black">
            Nel corso degli anni ti aiutiamo a far durare le tua tenda il più a
            lungo possibile sostituendo la tenda in caso di danni o per
            necessità estetiche
          </p>
        </div>
        {/* <div className="relative w-[250px] h-[80px] xl:w-[350px] xl:h-[150px]  mx-auto">
          <Image src={Almot} alt="avatar" fill className="object-cover " />
        </div> */}
      </div>
      <div className="grid w-full grid-cols-1 gap-8 lg:gap-4 lg:grid-cols-2 ">
        <div className="grid order-2 grid-cols-1 gap-10 lg:gap-20 lg:order-1">
          <div className="flex items-center p-4 shadow-xl md:p-6">
            <div className="flex gap-2 justify-evenly">
              <div className="relative w-10 h-auto">
                <Icon
                  icon="material-symbols:event-list-outline-sharp"
                  width="2rem"
                  height="2rem"
                  className="text-black"
                />
              </div>

              <div>
                <h4 className="font-bold text-xl md:text-3xl xl:text-xl 2xl:text-2xl fxl:text-[25px]">
                  Valutazione del danno
                </h4>
                <p className="text-lightPurple">
                  Facciamo un sopralluogo per verificare il problema
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center p-4 shadow-xl md:p-6">
            <div className="flex gap-2 justify-evenly">
              <div className="relative w-10 h-auto">
                <Icon
                  icon="material-symbols:action-key-outline-rounded"
                  width="2rem"
                  height="2rem"
                  className="text-black"
                />
              </div>
              <div>
                <h4 className="font-bold text-xl md:text-3xl xl:text-xl 2xl:text-2xl fxl:text-[25px]">
                  Scelta del prodotto
                </h4>
                <p className="text-lightPurple">
                  Decidiamo se dare nuovo volto alla tua tenda cambiando colore
                  e fantasia o se riprendere l’originale
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center p-4 shadow-xl md:p-6">
            <div className="flex gap-2 justify-evenly">
              <div className="relative w-10 h-auto">
                <Icon
                  icon="material-symbols:agriculture-outline"
                  width="2rem"
                  height="2rem"
                  className="text-black"
                />
              </div>
              <div>
                <h4 className="font-bold text-xl md:text-3xl xl:text-xl 2xl:text-2xl fxl:text-[25px]">
                  Montaggio
                </h4>
                <p className="text-lightPurple">
                  Veniamo a montare la nuova così godrai di nuovo del tuo spazio
                  outdoor
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[350px] lg:h-[700px] w-full order-1 lg:order-2">
          <Image
            src={Almot2}
            alt="avatar"
            fill
            className="object-cover object-top w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Partner2;
