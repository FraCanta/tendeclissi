import React from "react";
import Image from "next/image";
const Card = ({ number, title, description, img }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square">
        <Image src={img} alt="" fill />
      </div>
      <div className="p-6 shadow-xl">
        <div className="flex flex-col w-full gap-4 xl:flex-row">
          <div className="rounded-full bg-yellow p-5 h-8 w-8 flex items-center justify-center font-regular text-[22px]">
            {number}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[22px] fxl:text-[25px] font-bold">{title}</h4>
            <p className="text-lightPurple fxl:text-xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
