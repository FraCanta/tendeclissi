import Link from "next/link";
import React from "react";

const CtaPrimary = ({ children, link }) => {
  return (
    <Link
      className="bg-primary py-[15px] px-[33px] text-white uppercase text-[22px]"
      href={link}
    >
      {children}
    </Link>
  );
};

export default CtaPrimary;
