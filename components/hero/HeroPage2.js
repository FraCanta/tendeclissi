import React from "react";

const HeroPage2 = ({ children, backgroundImage }) => {
  return (
    <div
      className="min-h-screen md:min-h-[40vh] lg:min-h-[60vh] flex flex-col justify-center relative "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="w-[90%] mx-auto z-10 flex flex-col gap-6 xl:gap-4">
        {children}
      </div>
    </div>
  );
};

export default HeroPage2;
