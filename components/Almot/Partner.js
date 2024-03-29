import Image from "next/image";
import React from "react";
import Almot from "@/public/assets/almot.png";
import Almot2 from "@/public/assets/almot_azienda2.jpg";
import Placeholder from "@/public/assets/imgplaceholder.svg";
const Partner = () => {
  return (
    <div className="w-[90%] mx-auto min-h-screen flex flex-col justify-center items-center gap-6 py-10 xl:py-32">
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-10 ">
        <div className="flex flex-col gap-6">
          <h2 className="text-[35px] md:text-[45px] lg:text-[50px] xl:text-[45px] font-bold text-black">
            Il team di Tendeclissi
          </h2>
          <p className="text-lg md:text-[22px] lg:text-xl font-normal text-black">
            breve presentazione del partner che fornisce i motorini - Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.- tipo fino qua
          </p>
        </div>
        <div className="relative w-[250px] h-[80px] xl:w-[350px] xl:h-[150px]  mx-auto">
          <Image src={Almot} alt="avatar" fill className="object-cover " />
        </div>
      </div>
      <div className=" min-h-screen w-full flex flex-col gap-10">
        <div className="relative aspect-square xl:aspect-video">
          <Image
            src={Almot2}
            alt="avatar"
            fill
            className="object-cover h-auto w-auto object-top"
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3   items-center gap-6 2xl:gap-20">
          <div className="p-4 md:p-[30px] shadow-xl">
            <div className="flex justify-evenly items-center ">
              <div className="h-20 w-20 relative">
                <Image
                  src={Placeholder}
                  alt="avatar"
                  fill
                  className="object-cover h-auto w-auto object-top"
                />
              </div>

              <div>
                <h4 className="font-bold text-xl md:text-3xl xl:text-xl 2xl:text-2xl fxl:text-[25px]">
                  Valutazione del telaio
                </h4>
                <p className="text-lightPurple">
                  Capire se la tenda è compatibile
                </p>
              </div>
            </div>
          </div>
          <div className="p-[30px] shadow-xl">
            <div className="flex justify-evenly items-center ">
              <div className="h-20 w-20 relative">
                <Image
                  src={Placeholder}
                  alt="avatar"
                  fill
                  className="object-cover h-auto w-auto object-top"
                />
              </div>
              <div>
                <h4 className="font-bold text-xl md:text-3xl xl:text-xl 2xl:text-2xl fxl:text-[25px]">
                  Scelta del motore
                </h4>
                <p className="text-lightPurple">
                  Capire se la tenda è compatibile
                </p>
              </div>
            </div>
          </div>
          <div className="p-[30px] shadow-xl">
            <div className="flex justify-evenly items-center ">
              <div className="h-20 w-20 relative">
                <Image
                  src={Placeholder}
                  alt="avatar"
                  fill
                  className="object-cover h-auto w-auto object-top"
                />
              </div>
              <div>
                <h4 className="font-bold text-xl md:text-3xl xl:text-xl 2xl:text-2xl fxl:text-[25px]">
                  Conversione
                </h4>
                <p className="text-lightPurple">
                  Capire se la tenda è compatibile
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
