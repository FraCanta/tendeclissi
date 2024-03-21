import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import SimpleCard from "./SimpleCard";
const MediaCards = ({ reverseLayout, img }) => {
  return (
    <div
      className={`relative  overflow-x-hidden flex ${
        reverseLayout ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="relative min-h-screen lg:aspect-video w-full lg:w-[80%]">
        <div>
          <Image src={img} fill alt="img di prova" className="object-cover" />
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 lg:text-center text-white">
            <h2 className="text-white text-[30px] lg:text-[45px] z-10 w-[90%] font-bold">
              I nostri prodotti/servizi per i privati
            </h2>
            <p className="z-10 w-[90%] lg:w-[60%] mx-auto text-xl">
              Qui andiamo a lavorare sui vari target raggruppandoli e spieghiamo
              che risolviamo tutte le esigenze - Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.- tipo fino qua
            </p>
          </div>
          <div className="lg:hidden blobk h-full  relative bottom-0 left-0 mt-10">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <SimpleCard />
              </SwiperSlide>
              <SwiperSlide>
                <SimpleCard />
              </SwiperSlide>
              <SwiperSlide>
                <SimpleCard />
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            className={`hidden absolute top-0 ${
              reverseLayout ? "-left-[350px]" : "-right-[350px]"
            } w-1/2 h-full lg:flex flex-col justify-center items-center gap-10 text-center`}
          >
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCards;
