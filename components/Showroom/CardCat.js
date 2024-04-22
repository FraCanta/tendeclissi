import Image from "next/image";
import React from "react";
import Placeholder from "@/public/assets/imgplaceholder.svg";

const CardCat = ({ title, description }) => {
  return (
    <div>
      <div className="p-4 md:p-[30px] shadow-xl bg-white">
        <div className="flex justify-evenly gap-4 items-start">
          <div className="h-8 w-14 relative">
            <Image
              src={Placeholder}
              alt="avatar"
              fill
              className="object-cover h-auto w-auto object-top"
            />
          </div>

          <div>
            <h4 className="font-bold text-xl md:text-3xl xl:text-xl 2xl:text-2xl fxl:text-[25px]">
              {title}
            </h4>
            <p className="text-lightPurple">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCat;
