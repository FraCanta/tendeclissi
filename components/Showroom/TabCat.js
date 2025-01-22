import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TabContent from "./TabContent";
import { useRouter } from "next/router";

const TabCat = ({ category }) => {
  const router = useRouter();
  const tabActive = category.tabs;

  // Ottieni il valore dall'URL o imposta il primo tab come default
  const tabLink = router.asPath.split("#")[1] || tabActive[0].link;

  const [activeTab, setActiveTab] = useState(tabLink);

  // Usa useEffect per impostare l'activeTab in base all'URL quando cambia
  useEffect(() => {
    const currentTab = router.asPath.split("#")[1];
    if (currentTab) {
      setActiveTab(currentTab);
    } else {
      setActiveTab(tabActive[0].link); // Fallback al primo tab
    }
  }, [router.asPath, tabActive]);

  const openProject = (index) => {
    setActiveTab(index);
    router.push(`#${index}`);
  };

  return (
    <>
      <div className="flex flex-col gap-2 py-3 border-b lg:flex-row border-b-yellow">
        {tabActive.map((tab, index) => {
          return (
            <button
              key={index}
              className={
                activeTab == tab.link
                  ? "w-full h-auto py-[15px] px-[20px]  flex justify-center items-center font-bold border-b-4 border-b-primary text-primary uppercase"
                  : "w-full border-b border-b-purple text-purple py-[15px] px-[33px] flex justify-center items-center font-regular uppercase"
              }
              onClick={() => openProject(tab.link)}
            >
              <h2 className="text-lg xl:text-[22px] lg:text-lg">{tab.name}</h2>
            </button>
          );
        })}
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
          className={`w-full py-20 flex flex-col gap-24 ${
            activeTab === tab.link ? "tabcontent" : "tabcontent hidden"
          }`}
        >
          {/* Verifica l'indice del contenuto per determinare l'alternanza */}
          {tab.content.map((content, contentIndex) => (
            <TabContent
              key={contentIndex}
              content={content}
              title={content.title}
              description={content.descrizione}
              img={content.img}
              isImageLeft={contentIndex % 2 === 0} // Alternanza: immagine a sinistra se l'indice è pari, altrimenti a destra
            />
          ))}
        </motion.div>
      ))}
    </>
  );
};

export default TabCat;
