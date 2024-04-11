import Link from "next/link";
import React from "react";

const CtaOutline = ({ link, children }) => {
  return (
    <Link
      className="border border-white  py-[15px] px-[20px] lg:px-[33px] text-white uppercase text-base md:text-[25px] lg:text-xl xl:text-base 2xl:text-xl fxl:text-[25px] max-w-max"
      href={link}
    >
      {children}
    </Link>
  );
};

export default CtaOutline;
