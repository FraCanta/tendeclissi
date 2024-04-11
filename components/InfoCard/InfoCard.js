import { Icon } from "@iconify/react";
import React from "react";

const InfoCard = () => {
  return (
    <div class=" w-[90%] lg:max-w-3xl 2xl:max-w-6xl mx-auto !p-20 lg:text-center bg-white shadow-xl sm:p-8 flex flex-col gap-6 lg:gap-10">
      <h2 class="mb-2 text-3xl lg:text-5xl font-bold text-primary">
        Per informazioni
      </h2>
      <div className="w-full lg:w-[90%] mx-auto h-[1.02px] bg-yellow"></div>
      <h4 class="text-lg lg:text-[25px] text-black font-bold">
        Rispondiamo ai seguenti contatti
      </h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center w-full gap-8 lg:gap-0">
        <div className="flex gap-2 w-full lg:justify-center items-center">
          <Icon icon="solar:letter-bold" className="w-6 h-6 text-primary" />
          <span>info@tendeclissi.it</span>
        </div>
        <div className="flex gap-2 w-full lg:justify-center items-center">
          <Icon icon="mage:whatsapp-filled" className="w-6 h-6 text-primary" />
          <span>877-255-7945</span>
        </div>
        <div className="flex gap-2 w-full lg:justify-center items-center">
          <Icon icon="dashicons:facebook" className="w-6 h-6 text-primary" />
          <span>@tendeclissi</span>
        </div>
        <div className="flex gap-2 w-full lg:justify-center items-center">
          <Icon icon="mdi:instagram" className="w-6 h-6 text-primary" />
          <span>@tendeclissi</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
