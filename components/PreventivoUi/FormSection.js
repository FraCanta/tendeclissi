import React from "react";
import Form from "./Form";
import Image from "next/image";
const FormSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[90%] lg:w-full mx-auto">
      <Form />
      <div className="relative h-full hidden lg:block">
        <Image
          src="/assets/progetti/img8.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default FormSection;
