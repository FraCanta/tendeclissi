import React from "react";
import Image from "next/image";
import CtaPrimary from "../layout/CtaPrimary";
import Placeholder from "@/public/assets/imgplaceholder.svg";

const TabContent = ({ content, title, description, isImageLeft }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      {isImageLeft ? (
        <>
          <div className="flex flex-col gap-8">
            <h3 className="text-3xl lg:text-5xl font-bold">{title}</h3>
            <p
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {content.funzio.map((el, i) => (
                <div key={i} className="p-8 bg-purple text-white flex gap-4">
                  <div className="h-14 w-14 relative">
                    <Image
                      src={Placeholder}
                      alt="avatar"
                      fill
                      className="object-cover h-auto w-auto object-top"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl">{el.nome}</h4>
                    <p
                      className="text-white"
                      dangerouslySetInnerHTML={{ __html: el.descrizione }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <CtaPrimary link="/richiesta-preventivo#preventivo">
                Richiedi preventivo
              </CtaPrimary>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image src="https://placehold.jp/500x500.png" alt="" fill />
          </div>
          <div className="block lg:hidden order-last">
            <CtaPrimary link="/richiesta-preventivo#preventivo">
              preventivo per questo prodotto
            </CtaPrimary>
          </div>
        </>
      ) : (
        <>
          <div className="relative aspect-square order-last lg:order-first">
            <Image src="https://placehold.jp/500x500.png" alt="" fill />
          </div>
          <div className="block lg:hidden order-last">
            <CtaPrimary link="/richiesta-preventivo#preventivo">
              Richiedi preventivo
            </CtaPrimary>
          </div>
          <div className="flex flex-col gap-8 order-first lg:order-last">
            <h2 className="text-3xl lg:text-5xl font-bold">{title}</h2>
            <p
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {content.funzio.map((el, i) => (
                <div key={i} className="p-8 bg-purple text-white flex gap-4">
                  <div className="h-14 w-14 relative">
                    <Image
                      src={Placeholder}
                      alt="avatar"
                      fill
                      className="object-cover h-auto w-auto object-top"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-2xl">{el.nome}</h4>
                    <p
                      className="text-white"
                      dangerouslySetInnerHTML={{ __html: el.descrizione }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <CtaPrimary link="/richiesta-preventivo#preventivo">
                richiedi preventivo
              </CtaPrimary>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TabContent;
