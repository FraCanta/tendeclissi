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
      <div className="relative min-h-screen md:h-[80vh] lg:h-[60vh] xl:h-screen 2xl:h-[95vh] 2xla:h-[80vh] fxl:h-[90vh] w-full xl:w-[70%] 2xl:w-[78%] fxl:w-[80%]">
        <div>
          <Image
            src={img}
            fill
            alt="immagine copertina"
            className="object-cover "
          />
          <div className="absolute inset-0 bg-black/45"></div>

          <div className="absolute inset-0 flex flex-col items-center xl:justify-center gap-4 lg:text-center text-white mt-20 sm:mt-[3rem] md:mt-[90px] lg:mt-[150px] xl:mt-0 h-full">
            <h2 className="text-white text-[28px] md:text-[44px] lg:text-[45px] xl:text-[35px] 2xl:text-[45px] z-10 w-[90%] xl:w-[70%] 2xl:w-[65%] 2xla:w-[60%] mx-auto font-bold">
              {mainTitle}
            </h2>
            <p
              className="z-10 w-[90%] xl:w-[70%] fxl:w-[60%] mx-auto sm:text-[16px] md:text-[22px] xl:text-xl text-white"
              dangerouslySetInnerHTML={{ __html: mainDescription }}
            ></p>
            <div className="xl:hidden absolute bottom-[6rem] sm:bottom-[3.5rem]   md:bottom-40 md:left-10 lg:bottom-52 xl:left-16 w-[90%] left-5 right-0  text-darkGray ">
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
                      link={card.link}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div
            className={`hidden absolute top-0 ${
              reverseLayout ? "-left-[380px]" : "-right-[335px]"
            } w-[48%] fxl:w-[45%] h-full xl:flex flex-col justify-center items-center gap-6 2xl:gap-3 2xla:gap-6 text-center`}
          >
            {cardsData.map((card, index) => (
              <SimpleCard
                key={index}
                title={card.title}
                description={card.description}
                cta={card.cta}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCards;
