import React from "react";
import About from "@/public/assets/chisiamo.jpeg";
import MediaTextReverse from "../layout/MediaTextReverse";
import Image from "next/image";
import Avatar from "@/public/assets/avatar.svg";
const Team = ({ data }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-50 flex flex-col justify-center py-20">
      <div className="w-[90%] mx-auto flex flex-col gap-y-20 2xl:gap-y-[150px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-[32px] md:text-[45px] lg:text-[50px] xl:text-[45px] font-bold text-white">
              La squadra di Tendeclissi
            </h2>
            <p
              className="text-xl md:text-[22px] lg:text-xl font-normal text-white"
              dangerouslySetInnerHTML={{ __html: data.descrizione }}
            ></p>
          </div>
          <div className="flex flex-col gap-2 relative w-full h-full items-center justify-center">
            <Image
              src={Avatar}
              alt="avatar"
              width={120}
              height={120}
              className="object-cover"
            />
            <h4 className="text-[25px] font-bold text-white">Michele Soldo</h4>
            <p className="text-xl capitalize text-white">socio</p>
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
