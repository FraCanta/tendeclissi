import React from "react";

const Faq = () => {
  return (
    <div className="min-h-screen fxl:min-h-[80vh] w-full  flex flex-col justify-center  ">
      <div className="w-[90%] mx-auto flex flex-col gap-8 py-20 lg:py-0">
        <h3 className="text-[48px] uppercase font-bold">Faq</h3>
        <p className="max-w-3xl text-xl ">
          breve spiegazione di cosa sono le cappottine - Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.- tipo fino qua
        </p>
        <div className="flex flex-col gap-y-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-[25px]">Faq1</h4>
              <p className="text-[#A1AEB7] text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat m dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor inc.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {" "}
              <h4 className="font-bold text-[25px]">Faq2</h4>
              <p className="text-[#A1AEB7] text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat m dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor inc.
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                {" "}
                <h4 className="font-bold text-[25px]">Faq3</h4>
                <p className="text-[#A1AEB7] text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat m dolor sit
                  amet, consectetur adipisicing elit, sed do eiusmod tempor inc.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {" "}
                <h4 className="font-bold text-[25px]">Faq4</h4>
                <p className="text-[#A1AEB7] text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat m dolor sit
                  amet, consectetur adipisicing elit, sed do eiusmod tempor inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
