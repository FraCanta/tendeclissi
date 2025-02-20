import Image from "next/image";
import React from "react";
import Almot from "@/public/assets/almot.png";
import Almot2 from "@/public/assets/img/michele_montaggio.webp";
import { Icon } from "@iconify/react";
const Partner = () => {
  return (
    <div className="w-[90%] mx-auto min-h-screen flex flex-col justify-center items-center gap-6 my-10 3xl:gap-12">
      <div className="grid items-center grid-cols-1 gap-10 xl:grid-cols-2">
        <div className="flex flex-col gap-6" id="motorizzazione">
          <h2 className="text-[30px] md:text-[45px] lg:text-[50px] xl:text-[45px] font-bold text-black max-w-2xl 3xl:text-[60px]">
            Motorizzazione delle tende da sole
          </h2>
          <p className="text-lg md:text-[22px] lg:text-xl font-normal text-black 3xl:text-3xl">
            Hai bisogno di rendere più facile l’apertura e la chiusura della tua
            tenda da sole, o vuoi installarne una nuova da poter gestire in
            totale comodità? Scopri il nostro servizio di motorizzazione:
          </p>
        </div>
        <div className="relative w-[250px] h-[80px] xl:w-[350px] xl:h-[150px]  mx-auto 3xl:w-[400px] 3xl:h-[200px]">
          <Image src={Almot} alt="avatar" fill className="object-cover " />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 lg:gap-4 lg:grid-cols-2 3xl:gap-12">
        <div className="relative h-[350px] lg:h-[700px] w-full 3xl:h-[800px]">
          <Image
            src={Almot2}
            alt="avatar"
            fill
            className="object-cover w-auto h-auto"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:gap-20">
          <div className="flex items-center p-4 shadow-xl md:p-6">
            <div className="flex gap-2 justify-evenly 3xl:gap-4">
              <div className="relative w-10 h-auto 3xl:w-10 3xl:h-10">
                <Icon
                  icon="material-symbols:award-star-outline"
                  width="2rem"
                  height="2rem"
                  className="text-black 3xl:w-10 3xl:h-10"
                />
              </div>

              <div className="flex-col gap-2 3xl:flex">
                <h4 className="font-bold text-xl md:text-3xl xl:text-xl 2xl:text-2xl fxl:text-[25px] 3xl:text-3xl">
                  Valutazione del telaio
                </h4>
                <p className="text-lightPurple 3xl:text-2xl">
                  Facciamo un sopralluogo per verificare che la tua tenda sia
                  compatibile.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center p-4 shadow-xl md:p-6">
            <div className="flex gap-2 justify-evenly 3xl:gap-4">
              <div className="relative w-10 h-auto 3xl:w-10 3xl:h-10">
                <Icon
                  icon="material-symbols:award-star-outline"
                  width="2rem"
                  height="2rem"
                  className="text-black 3xl:w-10 3xl:h-10"
                />
              </div>
              <div className="flex-col gap-2 3xl:flex">
                <h4 className="font-bold text-xl md:text-3xl xl:text-xl 2xl:text-2xl fxl:text-[25px] 3xl:text-3xl">
                  Scelta del motore
                </h4>
                <p className="text-lightPurple 3xl:text-2xl">
                  Identifichiamo il motore giusto in base alla tenda e alle tue
                  esigenze.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center p-4 shadow-xl md:p-6">
            <div className="flex gap-2 justify-evenly 3xl:gap-4">
              <div className="relative w-10 h-auto 3xl:w-10 3xl:h-10">
                <Icon
                  icon="material-symbols:award-star-outline"
                  width="2rem"
                  height="2rem"
                  className="text-black 3xl:w-10 3xl:h-10"
                />
              </div>
              <div className="flex-col gap-2 3xl:flex">
                <h4 className="font-bold text-xl md:text-3xl xl:text-xl 2xl:text-2xl fxl:text-[25px] 3xl:text-3xl">
                  Conversione di tende manuali
                </h4>
                <p className="text-lightPurple 3xl:text-2xl">
                  Motorizziamo tende che nascono con sistema manuale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
