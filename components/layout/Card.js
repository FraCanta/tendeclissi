import React from "react";

const Card = ({ number, title, description }) => {
  return (
    <div className="shadow-xl p-6">
      <div className="flex flex-col xl:flex-row w-full gap-4">
        <div className="rounded-full bg-yellow p-5 h-8 w-8 flex items-center justify-center font-regular text-[22px]">
          {number}
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-[22px] fxl:text-[25px] font-bold">{title}</h4>
          <p className="text-lightPurple fxl:text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
