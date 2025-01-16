import Image from "next/image";
import React from "react";

const MediaTextReverse = ({ img, title, list, paragrafo, data }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 fxl:gap-8">
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-[32px] md:text-[45px] lg:text-[50px] xl:text-[45px] font-bold text-white w-[90%]">
            {title}
          </h2>
          <ul className="text-xl md:text-[22px] lg:text-xl font-normal text-white gap-2 flex flex-col">
            {data.list.map((el, i) => {
              return (
                <li key={i} dangerouslySetInnerHTML={{ __html: el.name }}></li>
              );
            })}
          </ul>

          <p
            className="text-xl md:text-[22px] lg:text-xl font-normal text-white"
            dangerouslySetInnerHTML={{ __html: data.paragrafo }}
          ></p>
        </div>
        <div className="relative aspect-square 2xl:aspect-video">
          <Image
            src={img}
            alt="placeholder"
            fill
            className="object-cover w-auto h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default MediaTextReverse;
