import Link from "next/link";
import React from "react";

const CtaPrimary = ({ children, link }) => {
  return (
    <Link
      className="bg-primary py-[15px] px-[20px] lg:px-[33px] text-white uppercase text-base md:text-[25px] xl:text-lg 2xl:text-xl fxl:text-[25px] max-w-max"
      href={link}
    >
      {children}
    </Link>
  );
};

export default CtaPrimary;
