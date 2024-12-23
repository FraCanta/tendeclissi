import React from "react";
import Image from "next/image";
import CtaPrimary from "../layout/CtaPrimary";
import Placeholder from "@/public/assets/imgplaceholder.svg";
import { Icon } from "@iconify/react";

const TabContent = ({ content, title, description, isImageLeft, img }) => {
  return (
    <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
      {isImageLeft ? (
        <>
          <div className="flex flex-col gap-8">
            <h3 className="text-3xl font-bold lg:text-5xl">{title}</h3>
            <p
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              {content.funzio.map((el, i) => (
                <div key={i} className="flex gap-2 p-4 text-white bg-purple">
                  <div className="relative flex">
                    {/* <Image
                      src={Placeholder}
                      alt="avatar"
                      fill
                      className="object-cover object-top w-auto h-auto"
                    /> */}
                    <Icon
                      icon="ic:baseline-check"
                      width="1.8rem"
                      height="1.8rem"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold lg:text-2xl">{el.nome}</h4>
                    <p
                      className="text-white"
                      dangerouslySetInnerHTML={{ __html: el.descrizione }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <CtaPrimary
                link="/richiesta-preventivo#preventivo"
                title="Tendeclissi | Richiedi un preventivo gratuito"
              >
                Richiedi preventivo
              </CtaPrimary>
            </div>
          </div>
          <div className="relative w-full h-[300px] lg:h-[550px]">
            <Image src={img} alt="" fill className="object-cover" />
          </div>
          <div className="order-last block lg:hidden">
            <CtaPrimary
              link="/richiesta-preventivo#preventivo"
              title="Tendeclissi | Richiedi un preventivo gratuito"
            >
              Richiedi preventivo
            </CtaPrimary>
          </div>
        </>
      ) : (
        <>
          <div className="relative order-last w-full h-[300px] lg:h-[550px] lg:order-first">
            <Image src={img} alt="" fill className="object-cover" />
          </div>
          <div className="order-last block lg:hidden">
            <CtaPrimary link="/richiesta-preventivo#preventivo">
              Richiedi preventivo
            </CtaPrimary>
          </div>
          <div className="flex flex-col order-first gap-8 lg:order-last">
            <h2 className="text-3xl font-bold lg:text-5xl">{title}</h2>
            <p
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              {content.funzio.map((el, i) => (
                <div key={i} className="flex gap-2 p-4 text-white bg-purple">
                  <div className="relative flex">
                    {/* <Image
                      src={Placeholder}
                      alt="avatar"
                      fill
                      className="object-cover object-top w-auto h-auto"
                    /> */}
                    <Icon
                      icon="ic:baseline-check"
                      width="1.8rem"
                      height="1.8rem"
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold lg:text-2xl">{el.nome}</h4>
                    <p
                      className="text-white"
                      dangerouslySetInnerHTML={{ __html: el.descrizione }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
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
