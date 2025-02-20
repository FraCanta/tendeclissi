import Link from "next/link";
import React from "react";

const CtaPrimary = ({ children, link, title }) => {
  return (
    <Link
      className="bg-primary py-[15px] px-[20px] xl:px-[33px] 3xl:px-[38px] 3xl:py-[25px] text-white uppercase text-base md:text-lg xl:text-lg 2xl:text-xl fxl:text-[25px] 3xl:text-[30px] max-w-max"
      href={link}
      title={title}
    >
      {children}
    </Link>
  );
};

export default CtaPrimary;
