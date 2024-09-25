import Image from "next/image";
import React from "react";
import Almot from "@/public/assets/almot.png";
import Almot2 from "@/public/assets/img/Almot.webp";
import Placeholder from "@/public/assets/imgplaceholder.svg";
const Partner = () => {
  return (
    <div className="w-[90%] mx-auto min-h-screen flex flex-col justify-center items-center gap-6 py-10 xl:py-32">
      <div className="grid items-center grid-cols-1 gap-10 xl:grid-cols-2 ">
        <div className="flex flex-col gap-6" id="motorizzazione">
          <h2 className="text-[35px] md:text-[45px] lg:text-[50px] xl:text-[45px] font-bold text-black max-w-2xl">
            Motorizzazione delle tende da sole
          </h2>
          <p className="text-lg md:text-[22px] lg:text-xl font-normal text-black">
            Hai bisogno di rendere più facile l’apertura e la chiusura della tua
            tenda da sole, o vuoi installarne una nuova da poter gestire in
            tutta comodità? Scopri il nostro servizio di motorizzazione:
          </p>
        </div>
        <div className="relative w-[250px] h-[80px] xl:w-[350px] xl:h-[150px]  mx-auto">
          <Image src={Almot} alt="avatar" fill className="object-cover " />
        </div>
      </div>
      <div className="flex flex-col w-full min-h-screen gap-10 ">
        <div className="relative aspect-square xl:aspect-video">
          <Image
            src={Almot2}
            alt="avatar"
            fill
            className="object-cover object-top w-auto h-auto"
          />
        </div>

        <div className="grid items-center grid-cols-1 gap-6 xl:grid-cols-3 2xl:gap-20">
          <div className="p-4 md:p-[30px] shadow-xl">
            <div className="flex items-center gap-4 justify-evenly">
              <div className="relative w-20 h-20">
                <Image
                  src={Placeholder}
                  alt="avatar"
                  fill
                  className="object-cover object-top w-auto h-auto"
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
          <div className="p-[30px] shadow-xl">
            <div className="flex items-center gap-4 justify-evenly">
              <div className="relative w-20 h-20">
                <Image
                  src={Placeholder}
                  alt="avatar"
                  fill
                  className="object-cover object-top w-auto h-auto"
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
          <div className="p-[30px] shadow-xl">
            <div className="flex items-center gap-4 justify-evenly">
              <div className="relative w-20 h-20">
                <Image
                  src={Placeholder}
                  alt="avatar"
                  fill
                  className="object-cover object-top w-auto h-auto"
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
        </div>
      </div>
    </div>
  );
};

export default Partner;
