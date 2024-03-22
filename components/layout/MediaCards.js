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
      className={`relative  flex ${
        reverseLayout ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="relative h-screen 2xla:h-[80vh] w-full lg:w-[80%]">
        <div>
          <Image src={img} fill alt="img di prova" className="object-cover" />
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="absolute inset-0 flex flex-col items-center lg:justify-center gap-4 lg:text-center text-white my-16 sm:my-32 lg:mt-0">
            <h2 className="text-white text-[30px] lg:text-[45px] z-10 w-[90%] mx-auto font-bold">
              I nostri prodotti/servizi per i privati
            </h2>
            <p className="z-10 w-[90%] lg:w-[60%] mx-auto text-xl">
              Qui andiamo a lavorare sui vari target raggruppandoli e spieghiamo
              che risolviamo tutte le esigenze - Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.- tipo fino qua
            </p>
            <div className="lg:hidden absolute bottom-5 sm:bottom-10 w-[90%] left-5 right-0  text-darkGray ">
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
                className="mySwiper !mt-10"
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
          </div>

          <div
            className={`hidden absolute top-0 ${
              reverseLayout ? "-left-[350px]" : "-right-[350px]"
            } w-[48%] h-full lg:flex flex-col justify-center items-center gap-6 2xla:gap-8 text-center`}
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
