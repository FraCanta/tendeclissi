import Image from "next/image";
import React from "react";
import CtaPrimary from "./CtaPrimary";
const MediaText2 = ({ img, title, description, cta }) => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 py-12 xl:py-20 2xl:py-18 fxl:gap-8">
        <div className="relative aspect-square ">
          <Image
            src={img}
            alt="placeholder"
            fill
            className="object-cover w-auto h-auto md:object-contain lg:object-cover "
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-[32px] md:text-[45px] lg:text-[50px] xl:text-[45px] font-bold text-black">
            {title}
          </h2>
          <p
            className="text-xl md:text-[22px] lg:text-xl  font-normal "
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <CtaPrimary link="/chi-siamo">{cta}</CtaPrimary>
        </div>
      </div>
    </div>
  );
};

export default MediaText2;
