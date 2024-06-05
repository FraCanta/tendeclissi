import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import data from "@/utils/progetti.json";
import ProjectCard from "./ProjectCard";

const Tab = () => {
  const tabActive = data.tabs;
  console.log(tabActive);
  const [activeTab, setActiveTab] = useState(0);

  const openProject = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-3 border border-yellow gap-2">
        {tabActive.map((el, index) => (
          <button
            key={index}
            className={
              activeTab === index
                ? "w-full h-auto  py-[15px] px-[33px] flex justify-center items-center  font-bold tab-bordered tab-active"
                : "border border-purple text-purple py-[15px] px-[33px] flex justify-center items-center  font-bold"
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
          className={`w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 ${
            activeTab === index ? "tabcontent" : "tabcontent hidden"
          }`}
        >
          {tab.content.map((content, contentIndex) => (
            <ProjectCard
              key={contentIndex}
              content={content}
              link={content.link}
              img={content.img}
              title={content.title}
              description={content.descrizione}
            />
          ))}
        </motion.div>
      ))}
    </>
  );
};

export default Tab;
