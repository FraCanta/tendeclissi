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
            {/* <Image
              src={Placeholder}
              alt="avatar"
              fill
              className="object-cover object-top w-auto h-auto"
            /> */}
            <Icon
              icon="material-symbols:award-star-outline"
              width="2rem"
              height="2rem"
              className="text-black"
            />
          </div>

          <div>
            <h4 className="font-bold text-xl md:text-3xl xl:text-xl 2xl:text-2xl fxl:text-[25px] text-black">
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
