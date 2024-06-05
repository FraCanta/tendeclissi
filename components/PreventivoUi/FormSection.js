import React, { useState } from "react";
import Form from "./Form";
import Image from "next/image";

const FormSection = ({ content }) => {
  const [imageSrc, setImageSrc] = useState("/assets/progetti/img8.jpg");

  const handleCategoryChange = (category) => {
    let newImageSrc = "/assets/progetti/img8.jpg"; // Immagine predefinita
    switch (category) {
      case "Cappottine":
        newImageSrc = "/assets/progetti/img7.jpg";
        break;
      case "Tende da sole":
        newImageSrc = "/assets/progetti/img2.jpg";
        break;
      case "Tende da sole per esterni e giardini":
        newImageSrc = "/assets/progetti/img5.jpg";
        break;
      case "Manutenzione":
        newImageSrc = "/assets/progetti/img8.jpg";
        break;
      case "Motorizzazione":
        newImageSrc = "/assets/progetti/img8.jpg";
        break;
      default:
        newImageSrc = "/assets/progetti/img8.jpg"; // Immagine predefinita
    }
    setImageSrc(newImageSrc);
  };

  const handleRadioChange = (selectedRadio) => {
    if (selectedRadio === "bordered-radio-2") {
      setImageSrc("/assets/progetti/img8.jpg"); // Immagine predefinita per "Servizio"
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[90%] lg:w-full mx-auto">
      <Form
        content={content}
        onCategoryChange={handleCategoryChange}
        onRadioChange={handleRadioChange}
      />
      <div className="relative h-full hidden lg:block">
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
