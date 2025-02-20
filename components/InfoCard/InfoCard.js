import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const InfoCard = () => {
  return (
    <div class=" w-[90%] lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl mx-auto !p-8 lg:!p-20 lg:text-center bg-white shadow-xl sm:p-8 flex flex-col gap-6 lg:gap-10">
      <h2 class="mb-2 text-3xl lg:text-5xl font-bold text-primary 3xl:text-6xl">
        Per informazioni
      </h2>
      <div className="w-full lg:w-[90%] mx-auto h-[1.02px] bg-yellow"></div>
      <h4 class="text-lg lg:text-[25px] text-black font-bold 3xl:text-3xl">
        Rispondiamo ai seguenti contatti:
      </h4>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 justify-items-center lg:gap-0 3xl:text-2xl">
        <Link
          href="mailto:info@tendeclissi.it"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-2 3xl:gap-4 lg:justify-center"
        >
          <Icon
            icon="solar:letter-bold"
            className="w-6 h-6 text-primary 3xl:w-8 3xl:h-8"
          />
          <span>info@tendeclissi.it</span>
        </Link>
        <Link
          href="https://wa.me/393287512239"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-2 3xl:gap-4 lg:justify-center"
        >
          <Icon
            icon="mage:whatsapp-filled"
            className="w-6 h-6 text-primary 3xl:w-8 3xl:h-8"
          />
          <span>+39 328 7512239</span>
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
