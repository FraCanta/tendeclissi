import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import data from "@/utils/preventivo.json";
import FormSection from "./FormSection";

const PreventivoTabs = () => {
  const tabActive = data.tabs;
  const [activeTab, setActiveTab] = useState(0);

  const openProject = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  py-3 border-b border-b-yellow gap-2">
        {tabActive.map((el, index) => (
          <button
            key={index}
            className={
              activeTab === index
                ? "w-full h-auto  py-[15px] px-[33px] flex justify-center items-center  font-bold border-b-4 border-b-primary text-primary uppercase"
                : "border-b border-b-purple text-purple py-[15px] px-[33px] flex justify-center items-center  font-regular uppercase"
            }
            onClick={() => openProject(index)}
          >
            <h4 className={`text-[22px] `}>{el.name}</h4>
          </button>
        ))}
      </div>
      {tabActive.map((tab, index) => (
        <motion.div // Usa motion.div anziché div
          key={index}
          id={tab.name}
          initial={{ opacity: 0, y: 5 }} // Aggiungi animazioni iniziali
          animate={{
            opacity: activeTab === index ? 1 : 0,
            y: activeTab === index ? 0 : 5,
            transition: { duration: 0.5, type: "tween" }, // Specifica la durata dell'animazione
          }}
          className={`w-full py-10 ${
            activeTab === index ? "tabcontent" : "tabcontent hidden"
          }`}
        >
          {tab.content.map((content, contentIndex) => (
            <FormSection key={contentIndex} />
          ))}
        </motion.div>
      ))}
    </>
  );
};

export default PreventivoTabs;
