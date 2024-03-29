import React from "react";
import CtaPrimary from "./CtaPrimary";

const Banner = () => {
  return (
    <>
      <div className="w-full min-h-[40vh] bg-purple py-10 flex flex-col justify-center items-center text-white h-auto gap-y-10 lg:gap-y-[20px]">
        <div className="w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <h3 className="text-[32px] lg:text-[35px] xl:text-[34px] 2xl:text-[35px] text-white font-bold">
              Prenota un preventivo gratuito
            </h3>
            <p className="text-xl text-white font-normal">
              Scrivici per prenotare una visita dove ti mostreremo il
              campionario e prenderemo le misure necessarie a farti il
              preventivo
            </p>
          </div>
          <div className="flex flex-col max-w-max">
            <CtaPrimary link="/">richiedi preventivo</CtaPrimary>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
