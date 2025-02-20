import React from "react";
import CtaPrimary from "./CtaPrimary";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Banner = ({ text, description, cta, link, icon }) => {
  return (
    <>
      <div className="w-full min-h-[40vh] bg-purple py-10 flex flex-col justify-center items-center text-white h-auto gap-y-10 lg:gap-y-[20px]">
        <div className="w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <h3 className="text-[32px] lg:text-[35px] xl:text-[34px] 2xl:text-[35px] text-white font-bold 3xl:text-[50px]">
              {text}
            </h3>
            <p
              className="text-xl font-normal text-white 3xl:text-3xl"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></p>
          </div>
          {icon ? (
            <div className="flex items-center lg:justify-self-end">
              <Link
                className="bg-primary py-[15px] px-[20px] xl:px-[33px] flex items-center gap-4 3xl:px-[38px] 3xl:py-[25px] text-white uppercase text-base md:text-lg xl:text-lg 2xl:text-xl fxl:text-[25px] 3xl:text-[30px] max-w-max"
                href={link}
                target="_blank"
              >
                {cta}{" "}
                <Icon
                  icon={icon}
                  className="w-6 h-6 text-white 3xl:w-10 3xl:h-10"
                />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col max-w-max lg:justify-self-end">
              <CtaPrimary link={link}>{cta}</CtaPrimary>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Banner;
