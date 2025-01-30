import Image from "next/image";
import React from "react";
import CtaPrimary from "./CtaPrimary";
const MediaText2 = ({ img, title, description, cta, alt, link, img2 }) => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 py-12 xl:py-20 2xl:py-18 fxl:gap-8">
        <div className="relative aspect-square ">
          <Image
            src={img}
            alt={alt}
            fill
            className="object-cover w-auto h-auto md:object-contain lg:object-cover 2xl:object-cover fxl:object-contain"
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-[32px] md:text-[45px] lg:text-[50px] xl:text-[35px] 2xl:text-[45px] font-bold text-black">
            {title}
          </h2>

          <p
            className="text-xl md:text-[22px] lg:text-xl xl:text-lg 2xl:text-xl  font-normal "
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          {img2 && (
            <div className="relative">
              <Image
                src={img2}
                alt={alt}
                width={150}
                height={150}
                className="w-[100px] h-[100px]"
              />
            </div>
          )}

          <CtaPrimary link={link}>{cta}</CtaPrimary>
        </div>
      </div>
    </div>
  );
};

export default MediaText2;
