import Image from "next/image";
import React from "react";
import Placeholder from "@/public/assets/imgplaceholder.svg";
import { Icon } from "@iconify/react";

const CardCat = ({ title, description }) => {
  return (
    <div>
      <div className="p-4 md:p-[25px] shadow-xl bg-white h-full ">
        <div className="flex items-start gap-4 justify-evenly">
          <div className="relative h-8 w-14">
            <Icon
              icon="material-symbols:award-star-outline"
              width="2rem"
              height="2rem"
              className="text-black 3xl:w-10 3xl:h-10"
            />
          </div>

          <div className="flex-col gap-3 3xl:flex">
            <h4 className="font-bold text-xl md:text-3xl xl:text-xl 2xl:text-2xl fxl:text-[25px] text-black 3xl:text-[30px]">
              {title}
            </h4>
            <p className="text-lightPurple 3xl:text-xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCat;
