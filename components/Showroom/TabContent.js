import React from "react";
import Image from "next/image";
import CtaPrimary from "../layout/CtaPrimary";
import Placeholder from "@/public/assets/imgplaceholder.svg";
import { Icon } from "@iconify/react";

const TabContent = ({ content, title, description, isImageLeft, img }) => {
  return (
    <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2 3xl:gap-20">
      {isImageLeft ? (
        <>
          <div className="flex flex-col order-2 gap-8 lg:order-1">
            <h3 className="text-3xl font-bold lg:text-5xl 3xl:text-6xl">
              {title}
            </h3>
            <p
              className="text-xl 3xl:text-2xl"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 3xl:gap-6">
              {content.funzio.map((el, i) => (
                <div
                  key={i}
                  className="flex gap-2 px-4 py-2 text-white bg-purple 3xlpx-8 3xl:py-4"
                >
                  <div className="relative flex">
                    <Icon
                      icon="ic:baseline-check"
                      width="1.8rem"
                      height="1.8rem"
                      className="3xl:w-10 3xl:h-10"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold lg:text-md 3xl:text-xl">
                      {el.nome}
                    </h4>
                    <p
                      className="text-white 3xl:text-xl"
                      dangerouslySetInnerHTML={{ __html: el.descrizione }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
            <div className="3xl:mt-4">
              <CtaPrimary
                link="/richiesta-preventivo#preventivo"
                title="Tendeclissi | Richiedi un preventivo gratuito"
              >
                Richiedi preventivo
              </CtaPrimary>
            </div>
          </div>
          <div className="relative w-full h-[300px] lg:h-[550px]  order-1 lg:order-2 3xl:h-[700px]">
            <Image src={img} alt="" fill className="object-cover" />
          </div>
        </>
      ) : (
        <>
          <div className="relative order-1 w-full h-[300px] lg:h-[550px] lg:order-1 3xl:h-[700px]">
            <Image src={img} alt="" fill className="object-cover" />
          </div>

          <div className="flex flex-col order-2 gap-8 lg:order-1">
            <h3 className="text-3xl font-bold lg:text-5xl 3xl:text-6xl">
              {title}
            </h3>
            <p
              className="text-xl 3xl:text-2xl"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 3xl:gap-6">
              {content.funzio.map((el, i) => (
                <div
                  key={i}
                  className="flex gap-2 px-4 py-2 text-white bg-purple 3xlpx-8 3xl:py-4"
                >
                  <div className="relative flex">
                    <Icon
                      icon="ic:baseline-check"
                      width="1.8rem"
                      height="1.8rem"
                      className="3xl:w-10 3xl:h-10"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold lg:text-md 3xl:text-xl">
                      {el.nome}
                    </h4>
                    <p
                      className="text-white 3xl:text-xl"
                      dangerouslySetInnerHTML={{ __html: el.descrizione }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
            <div className="3xl:mt-4">
              <CtaPrimary
                link="/richiesta-preventivo#preventivo"
                title="Tendeclissi | Richiedi un preventivo gratuito"
              >
                Richiedi preventivo
              </CtaPrimary>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TabContent;
