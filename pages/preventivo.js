import PreventivoTabs from "@/components/PreventivoUi/PreventivoTabs";
import Tab from "@/components/ProjectUI/Tab";
import HeroPage from "@/components/hero/HeroPage";
import React from "react";

const Preventivo = () => {
  return (
    <div>
      {" "}
      <HeroPage backgroundImage="/assets/chisiamoImg.jpg">
        <h1 className="text-[40px] lxl:text-[60px] leading-[1.2] fxl:text-[70px] font-bold text-white xl:max-w-7xl">
          Richiedi il preventivo o il sopralluogo
        </h1>
        <p
          className="max-w-7xl text-xl xl:text-2xl fxl:text-[25px] font-regular text-white"
          dangerouslySetInnerHTML={{
            __html:
              "Spiegazione della differenza: per il sopralluogo prenoteranno un’incontro a casa del cliente, per il preventivo riceveranno una mail che proporrà poi il sopralluogo - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit - tipo fino qua",
          }}
        ></p>
      </HeroPage>
      <div className="w-[90%] mx-auto py-10 lg:py-20">
        <PreventivoTabs />
      </div>
    </div>
  );
};

export default Preventivo;
