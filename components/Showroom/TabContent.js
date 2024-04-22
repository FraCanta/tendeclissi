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
            <h2 className="text-3xl lg:text-5xl font-bold">{title}</h2>
            <p className="text-xl">{description}</p>
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
                    <p className="text-white">{el.descrizione}</p>
                  </div>
                </div>
              ))}
            </div>
            <CtaPrimary link="/preventivo">
              preventivo per questo prodotto
            </CtaPrimary>
          </div>
          <div className="relative aspect-square">
            <Image src="https://placehold.jp/500x500.png" alt="" fill />
          </div>
        </>
      ) : (
        <>
          <div className="relative aspect-square">
            <Image src="https://placehold.jp/500x500.png" alt="" fill />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl lg:text-5xl font-bold">{title}</h2>
            <p className="text-xl">{description}</p>
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
                    <p className="text-white">{el.descrizione}</p>
                  </div>
                </div>
              ))}
            </div>
            <CtaPrimary link="/preventivo">
              preventivo per questo prodotto
            </CtaPrimary>
          </div>
        </>
      )}
    </div>
  );
};

export default TabContent;
