import Link from "next/link";
import React from "react";

const CtaOutlinePrimary = ({ link, children }) => {
  return (
    <Link
      className="border border-primary py-[15px] px-[33px] text-primary uppercase md:text-[25px] xl:text-lg 2xl:text-xl fxl:text-[25px] max-w-max font-bold"
      href={link}
    >
      {children}
    </Link>
  );
};

export default CtaOutlinePrimary;
