import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import TabContent from "./TabContent";

const TabCat = ({ category }) => {
  const tabActive = category.tabs;
  console.log(tabActive);
  const [activeTab, setActiveTab] = useState(0);

  const openProject = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row py-3 border-b border-b-yellow gap-2">
        {tabActive.map((tab, index) => (
          <button
            key={index}
            className={
              activeTab === index
                ? "w-full h-auto  py-[15px] px-[33px] flex justify-center items-center  font-bold border-b-4 border-b-primary text-primary uppercase"
                : "w-full border-b border-b-purple text-purple py-[15px] px-[33px] flex justify-center items-center  font-regular uppercase"
            }
            onClick={() => openProject(index)}
          >
            <h4 className={`text-[22px] `}>{tab.name}</h4>
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
          className={`w-full py-10 flex flex-col gap-10 ${
            activeTab === index ? "tabcontent" : "tabcontent hidden"
          }`}
        >
          {/* Verifica l'indice del contenuto per determinare l'alternanza */}
          {tab.content.map((content, contentIndex) => (
            <TabContent
              key={contentIndex}
              content={content}
              title={content.title}
              description={content.descrizione}
              isImageLeft={contentIndex % 2 === 0} // Alternanza: immagine a sinistra se l'indice è pari, altrimenti a destra
            />
          ))}
        </motion.div>
      ))}
    </>
  );
};

export default TabCat;
