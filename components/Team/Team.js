import React from "react";
import About from "@/public/assets/img/il_nostro_metodo_di_lavoro.webp";
import MediaTextReverse from "../layout/MediaTextReverse";
import Image from "next/image";
import Avatar from "@/public/assets/img/Michele.webp";
const Team = ({ data }) => {
  return (
    <div className="flex flex-col justify-center w-full min-h-screen py-20 bg-gradient-to-50">
      <div className="w-[90%] mx-auto flex flex-col gap-y-20 2xl:gap-y-[150px]">
        <div className="grid items-center grid-cols-1 gap-8 xl:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-[32px] md:text-[45px] lg:text-[50px] xl:text-[45px] font-bold text-white">
              La squadra di Tendeclissi
            </h2>
            <p
              className="text-xl md:text-[22px] lg:text-xl font-normal text-white"
              dangerouslySetInnerHTML={{ __html: data.descrizione }}
            ></p>
          </div>
          <div className="relative flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="relative overflow-hidden rounded-full w-52 h-52">
              <Image
                src={Avatar}
                alt="avatar"
                fill
                className="object-cover object-top w-full h-full"
              />
            </div>

            <h4 className="text-[25px] font-bold text-white">Michele Soldo</h4>
            <p className="text-xl text-white capitalize">Titolare</p>
          </div>
        </div>
        <MediaTextReverse
          img={About}
          title="Il nostro metodo di lavoro"
          data={data}
        />
      </div>
    </div>
  );
};

export default Team;
