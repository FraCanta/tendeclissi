import React from "react";

const HeroSingleCat = ({ children, backgroundImage }) => {
  return (
    <div
      className="min-h-screen md:min-h-[40vh] lg:min-h-[80vh] flex flex-col justify-center relative bg-gradient-to-50 py-10 lg:py-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="w-[90%] mx-auto z-10 flex flex-col gap-6 xl:gap-10">
        {children}
      </div>
    </div>
  );
};

export default HeroSingleCat;
