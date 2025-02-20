import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const SocialCard = () => {
  return (
    <div class=" w-[90%] lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl mx-auto !p-8 lg:!p-20 lg:text-center bg-white shadow-xl sm:p-8 flex flex-col gap-6 lg:gap-10">
      <h2 class="mb-2 text-3xl lg:text-4xl font-bold text-black">
        Seguici sui social
      </h2>
      <div className="w-full lg:w-[90%] mx-auto h-[1.02px] bg-yellow"></div>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:gap-0">
        <Link
          href="https://www.facebook.com/profile.php?id=61555867858038"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-2 3xl:gap-4 lg:justify-center"
        >
          <Icon
            icon="dashicons:facebook"
            className="w-6 h-6 text-primary 3xl:w-8 3xl:h-8"
          />
          <span className="3xl:text-2xl">@tendeclissi</span>
        </Link>
        <Link
          href="https://www.instagram.com/_tendeclissi/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-2 3xl:gap-4 lg:justify-center"
        >
          <Icon
            icon="mdi:instagram"
            className="w-6 h-6 text-primary 3xl:w-8 3xl:h-8"
          />
          <span className="3xl:text-2xl">@tendeclissi</span>
        </Link>
        <Link
          href="https://www.tiktok.com/@tendeclissi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-2 3xl:gap-4 lg:justify-center"
        >
          <Icon
            icon="ic:round-tiktok"
            className="w-6 h-6 text-primary 3xl:w-8 3xl:h-8"
          />
          <span className="3xl:text-2xl">@tendeclissi</span>
        </Link>
      </div>
    </div>
  );
};

export default SocialCard;
