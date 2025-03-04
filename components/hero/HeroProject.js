import React from "react";

const HeroProject = ({ children, backgroundImage }) => {
  return (
    <div
      className="min-h-[70vh] md:min-h-[30vh] lg:min-h-[50vh] flex flex-col justify-center relative bg-gradient-to-50"
      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="w-[90%] mx-auto z-10 flex flex-col gap-6 xl:gap-4">
        {children}
      </div>
    </div>
  );
};

export default HeroProject;
