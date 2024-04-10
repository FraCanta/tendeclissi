import React from "react";
import Image from "next/image";
const Card = ({ number, title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-square relative">
        <Image src="https://placehold.jp/500x500.png" alt="" fill />
      </div>
      <div className="shadow-xl p-6">
        <div className="flex flex-col xl:flex-row w-full gap-4">
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
