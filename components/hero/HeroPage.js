import React from "react";

const HeroPage = ({ children, backgroundImage }) => {
  console.log(backgroundImage);
  return (
    <div
      className="min-h-[90vh] md:min-h-[60vh] flex flex-col justify-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-45"></div>
      <div className="w-[90%] mx-auto z-10 flex flex-col gap-6 xl:gap-4">
        {children}
      </div>
    </div>
  );
};

export default HeroPage;
