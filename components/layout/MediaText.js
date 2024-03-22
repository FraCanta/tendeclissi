import Image from "next/image";
import React from "react";
import About from "@/public/assets/chisiamo.jpeg";
import CtaPrimary from "./CtaPrimary";
const MediaText = ({ img, title, description }) => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center">
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 py-12 fxl:gap-8">
        <div className="relative aspect-square md:aspect-video">
          <Image
            src={About}
            alt="placeholder"
            fill
            className="object-cover h-auto w-auto"
          />
        </div>
        <div className="flex flex-col gap-6 justify-center">
          <h2 className="text-[32px] md:text-[45px] lg:text-[54px] font-bold text-textGray">
            {title}
          </h2>
          <p className="sm:text-xl md:text-[22px] lg:text-xl font-normal text-textGray">
            {description}
          </p>
          <CtaPrimary link="/">Contatti</CtaPrimary>
        </div>
      </div>
    </div>
  );
};

export default MediaText;
