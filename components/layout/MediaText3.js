import Image from "next/image";
import React from "react";
import CtaPrimary from "./CtaPrimary";
import { Icon } from "@iconify/react";
import Link from "next/link";

function MediaText3({ img, title, description, cta, link }) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 my-20 fxl:gap-8 3xl:gap-16">
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-[32px] md:text-[45px] lg:text-[50px] xl:text-[45px] 3xl:text-[50px] font-bold text-black">
            {title}
          </h2>
          <p
            className="text-xl md:text-[22px] lg:text-xl 3xl:text-3xl  font-normal "
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <Link
            className="bg-primary flex items-center gap-2 py-[15px] px-[20px] lg:px-[33px] 3xl:px-[38px] 3xl:py-[25px] text-white uppercase text-base md:text-[25px] xl:text-lg 2xl:text-xl fxl:text-[25px] 3xl:text-[30px] max-w-max"
            href={link}
            title={title}
            target="_blank"
          >
            {cta}
            <Icon icon="mage:whatsapp-filled" className="w-6 h-6 text-white" />
          </Link>
        </div>
        <div className="relative w-full h-[200px] md:h-[450px] lg:h-full 2xl:h-[400px] 3xl:h-[650px]">
          <Image
            src={img}
            alt="placeholder"
            fill
            className="object-cover w-auto h-auto md:object-contain lg:object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default MediaText3;
