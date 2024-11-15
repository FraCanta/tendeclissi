import React, { useState } from "react";
import Form from "./Form";
import Image from "next/image";

const FormSection = ({ content }) => {
  // Stato inizializzato a null per indicare nessuna immagine di default
  const [imageSrc, setImageSrc] = useState("/assets/img/vendita.webp");

  const handleCategoryChange = (category) => {
    let newImageSrc = null; // Inizializza senza immagine
    switch (category) {
      case "Cappottine":
        newImageSrc = "/assets/showroom/cappottine_cover.webp";
        break;
      case "Tende da sole":
        newImageSrc = "/assets/showroom/tendesole_cover.webp";
        break;
      case "Tende da sole per esterni e giardini":
        newImageSrc = "/assets/showroom/pergola_cover.webp";
        break;
      case "Manutenzione":
        newImageSrc = "/assets/img/riparazione.webp";
        break;
      case "Motorizzazione":
        newImageSrc = "/assets/almot_azienda.jpg";
        break;
      default:
        newImageSrc = "/assets/img/riparazione.webp"; // Nessuna immagine di default
    }
    setImageSrc(newImageSrc);
  };

  const handleRadioChange = (selectedRadio) => {
    if (selectedRadio === "bordered-radio-2") {
      setImageSrc("/assets/almot_azienda.jpg"); // Immagine specifica per "Servizio"
    } else {
      setImageSrc("/assets/img/vendita.webp"); // Nessuna immagine per altre opzioni
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[90%] lg:w-full mx-auto">
      <Form
        content={content}
        onCategoryChange={handleCategoryChange}
        onRadioChange={handleRadioChange}
      />
      <div className="relative hidden h-full lg:block">
        <Image
          src={imageSrc}
          alt="Selected Category"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default FormSection;
