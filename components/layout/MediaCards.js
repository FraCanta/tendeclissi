import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import SimpleCard from "./SimpleCard";
const MediaCards = ({
  reverseLayout,
  img,
  title,
  description,
  cta,
  mainTitle,
  mainDescription,
  cardsData,
}) => {
  return (
    <div
      className={`relative  flex ${
        reverseLayout ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="relative h-screen md:h-[70vh] lg:h-screen 2xla:h-[80vh] fxl:h-[90vh] w-full lg:w-[80%]">
        <div>
          <Image src={img} fill alt="img di prova" className="object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0 flex flex-col items-center lg:justify-center gap-4 lg:text-center text-white mt-24 sm:my-32 md:mt-[70px] lg:mt-0 h-full">
            <h2 className="text-white text-[30px] md:text-[47px] lg:text-[45px] z-10 w-[90%] 2xl:w-[65%] 2xla:w-[60%] mx-auto font-bold">
              {mainTitle}
            </h2>
            <p className="z-10 w-[90%] lg:w-[60%] mx-auto sm:text-xl md:text-[22px] lg:text-xl">
              {mainDescription}
            </p>
            <div className="lg:hidden absolute bottom-32 sm:bottom-40  md:bottom-36 md:left-10 w-[90%] left-5 right-0  text-darkGray ">
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
                modules={[Autoplay, Pagination]}
                className="mySwiper !mt-10"
              >
                {cardsData.map((card, index) => (
                  <SwiperSlide key={index}>
                    <SimpleCard
                      title={card.title}
                      description={card.description}
                      cta={card.cta}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div
            className={`hidden absolute top-0 ${
              reverseLayout ? "-left-[350px]" : "-right-[350px]"
            } w-[48%] fxl:w-[45%] h-full lg:flex flex-col justify-center items-center gap-6 2xla:gap-8 text-center`}
          >
            {cardsData.map((card, index) => (
              <SimpleCard
                key={index}
                title={card.title}
                description={card.description}
                cta={card.cta}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCards;
