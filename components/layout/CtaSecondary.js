import Link from "next/link";
import React from "react";

const CtaSecondary = ({ children, link }) => {
  return (
    <Link
      href={link}
      className="bg-white py-[15px] px-[33px] text-primary max-w-max uppercase font-medium z-10 text-[22px]"
    >
      {children}
    </Link>
  );
};

export default CtaSecondary;
