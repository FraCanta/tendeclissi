import React from "react";

const HeroPage = ({ children }) => {
  return (
    <div className="min-h-screen md:min-h-[40vh] lg:min-h-[60vh] flex flex-col justify-center relative bg-gradient-to-50">
      <div className="w-[90%] mx-auto z-10 flex flex-col gap-6 xl:gap-4">
        {children}
      </div>
    </div>
  );
};

export default HeroPage;
