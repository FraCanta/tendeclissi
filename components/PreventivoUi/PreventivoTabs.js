import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import data from "@/utils/preventivo.json";
import FormSection from "./FormSection";
import { useRouter } from "next/router";

const PreventivoTabs = () => {
  const router = useRouter();
  const tabActive = data.tabs;

  // Ottieni il valore dall'URL (se esiste) o usa il primo tab come default
  const tabLink = router.asPath.split("#")[1] || tabActive[0].link;

  const [activeTab, setActiveTab] = useState(tabLink);

  // Usa useEffect per aggiornare il tab attivo quando cambia l'URL
  useEffect(() => {
    const currentTab = router.asPath.split("#")[1];
    if (currentTab) {
      setActiveTab(currentTab);
    } else {
      setActiveTab(tabActive[0].link); // Imposta il primo tab come default se non c'è nulla nell'URL
    }
  }, [router.asPath, tabActive]);

  const openProject = (index) => {
    setActiveTab(index);
    router.push(`#${index}`);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-2 py-3 border-b md:grid-cols-2 border-b-yellow">
        {tabActive.map((tab, index) => (
          <button
            key={index}
            className={
              activeTab === tab.link
                ? "w-full h-auto py-[15px] px-[33px] flex justify-center items-center font-bold border-b-4 border-b-primary text-primary uppercase"
                : "border-b border-b-purple text-purple py-[15px] px-[33px] flex justify-center items-center font-regular uppercase"
            }
            onClick={() => openProject(tab.link)}
          >
            <h4 className="text-[22px]">{tab.name}</h4>
          </button>
        ))}
      </div>
      {tabActive.map((tab, index) => (
        <motion.div
          key={index}
          id={tab.name}
          initial={{ opacity: 0, y: 5 }}
          animate={{
            opacity: activeTab === tab.link ? 1 : 0,
            y: activeTab === tab.link ? 0 : 5,
            transition: { duration: 0.5, type: "tween" },
          }}
          className={`w-full py-10 ${
            activeTab === tab.link ? "tabcontent" : "tabcontent hidden"
          }`}
        >
          {tab.content.map((content, contentIndex) => (
            <FormSection key={contentIndex} content={content} />
          ))}
        </motion.div>
      ))}
    </>
  );
};

export default PreventivoTabs;
