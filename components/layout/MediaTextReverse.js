import Image from "next/image";
import React from "react";

const MediaTextReverse = ({ img, title, description }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  fxl:gap-8">
        <div className="flex flex-col gap-6 justify-center">
          <h2 className="text-[32px] md:text-[45px] lg:text-[50px] xl:text-[45px] font-bold text-white">
            {title}
          </h2>
          <p className="sm:text-xl md:text-[22px] lg:text-xl font-normal text-white">
            {description}
          </p>
        </div>
        <div className="relative aspect-square 2xl:aspect-video">
          <Image
            src={img}
            alt="placeholder"
            fill
            className="object-cover h-auto w-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default MediaTextReverse;
