import InfoCard from "@/components/InfoCard/InfoCard";
import HeroPage from "@/components/hero/HeroPage";
import React from "react";

const Contatti = () => {
  return (
    <div>
      {" "}
      <HeroPage backgroundImage="/assets/chisiamoImg.jpg">
        <h1 className="text-[40px] xl:text-[60px] xl:leading-[1.2] fxl:text-[70px] font-bold text-white xl:max-w-4xl">
          Dove trovarci
        </h1>
        <p
          className="max-w-8xl text-xl xl:text-2xl fxl:text-[25px] font-regular text-white"
          dangerouslySetInnerHTML={{
            __html:
              "Offriamo i nostri servizi <strong>in Veneto e nelle Marche</strong>, e grazie al nostro <strong>showroom completamente digitale</strong> è possibile esplorare i prodotti che offriamo da qualsiasi posto e a qualsiasi ora: una scelta che abbiamo preso per poter raggiungere con la passione per il nostro lavoro sempre più persone. Contattaci per richiedere un campione dei nostri prodotti, richiedere un preventivo gratuito senza impegno e fissare un sopralluogo!",
          }}
        ></p>
      </HeroPage>
      <div className="pt-20 relative">
        <div className="absolute top-16 left-0 right-0 bottom-0">
          <InfoCard />
        </div>
        <div
          className="min-h-[70vh] lg:min-h-[60vh]  mt-40"
          style={{
            backgroundImage: "url(/assets/contatti.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Contatti;
