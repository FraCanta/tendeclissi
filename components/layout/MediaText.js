import Image from "next/image";
import React from "react";
import CtaPrimary from "./CtaPrimary";
const MediaText = ({ img, title, description, cta }) => {
  return (
    <div className="w-full min-h-screen  flex items-center justify-center">
      <div className="w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 py-12 xl:py-20 2xl:py-18 fxl:gap-8">
        <div className="relative aspect-square ">
          <Image
            src={img}
            alt="placeholder"
            fill
            className="object-cover md:object-contain lg:object-cover  h-auto w-auto "
          />
        </div>
        <div className="flex flex-col gap-6 justify-center">
          <h2 className="text-[32px] md:text-[45px] lg:text-[50px] xl:text-[45px] font-bold text-black">
            {title}
          </h2>
          <p
            className="text-xl md:text-[22px] lg:text-xl  font-normal "
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <CtaPrimary link="/">{cta}</CtaPrimary>
        </div>
      </div>
    </div>
  );
};

export default MediaText;
