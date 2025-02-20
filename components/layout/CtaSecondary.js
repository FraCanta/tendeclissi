import Link from "next/link";
import React from "react";

const CtaSecondary = ({ children, link }) => {
  return (
    <Link
      href={link}
      className="bg-white  py-[15px] px-[20px] lg:px-[33px] 3xl:px-[38px] 3xl:py-[25px] text-primary max-w-max uppercase font-medium z-10 text-base md:text-[25px] lg:text-xl xl:text-base 2xl:text-xl fxl:text-[25px] 3xl:text-[30px]"
    >
      {children}
    </Link>
  );
};

export default CtaSecondary;
