import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const InfoCard = () => {
  return (
    <div class=" w-[90%] lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl mx-auto !p-8 lg:!p-20 lg:text-center bg-white shadow-xl sm:p-8 flex flex-col gap-6 lg:gap-10">
      <h2 class="mb-2 text-3xl lg:text-5xl font-bold text-primary">
        Per informazioni
      </h2>
      <div className="w-full lg:w-[90%] mx-auto h-[1.02px] bg-yellow"></div>
      <h4 class="text-lg lg:text-[25px] text-black font-bold">
        Rispondiamo ai seguenti contatti:
      </h4>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 justify-items-center lg:gap-0">
        <Link
          href="mailto:info@tendeclissi.it"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-2 lg:justify-center"
        >
          <Icon icon="solar:letter-bold" className="w-6 h-6 text-primary" />
          <span>info@tendeclissi.it</span>
        </Link>
        <Link
          href="https://wa.me/393287512239"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-2 lg:justify-center"
        >
          <Icon icon="mage:whatsapp-filled" className="w-6 h-6 text-primary" />
          <span>+39 328 7512239</span>
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61555867858038"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-2 lg:justify-center"
        >
          <Icon icon="dashicons:facebook" className="w-6 h-6 text-primary" />
          <span>@tendeclissi</span>
        </Link>
        <Link
          href="https://www.instagram.com/_tendeclissi/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-2 lg:justify-center"
        >
          <Icon icon="mdi:instagram" className="w-6 h-6 text-primary" />
          <span>@tendeclissi</span>
        </Link>
        <Link
          href="https://www.tiktok.com/@tendeclissi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-2 lg:justify-center"
        >
          <Icon icon="ic:round-tiktok" className="w-6 h-6 text-primary" />
          <span>@tendeclissi</span>
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
