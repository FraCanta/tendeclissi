import React from "react";
import { Rubik } from "next/font/google";
import CtaSecondary from "../layout/CtaSecondary";
import { CardHero } from "../layout/CardHero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const rubik = Rubik({ subsets: ["latin"] });

const HeroHome = () => {
  return (
    <div
      className={`min-h-screen mx-auto relative flex flex-col lg:items-center justify-center gap-12 lg:mt-0 bg-hero ${rubik.className} overflow-x-hidden`}
    >
      {/* Overlay nero opaco */}
      <div className="absolute inset-0 bg-black opacity-45"></div>

      <div className="flex flex-col lg:justify-center lg:items-center z-10 w-[90%] mx-auto gap-10">
        <div className="flex flex-col justify-center lg:items-center">
          <h1 className="text-[45px] lg:text-[70px] fxl:text-[80px] text-white font-bold">
            Tende da sole
          </h1>
          <p className="text-white text-md lg:text-xl fxl:text-3xl w-full lg:w-[60%] mx-auto lg:text-center font-regular leading-normal">
            Vivamus pretium ultricies lacus, vitae tincidunt arcu malesuada nec.
            Aliquam erat volutpat. Aenean finibus eros et metus eleifend
          </p>
        </div>

        <CtaSecondary link="/">scopri i prodotti</CtaSecondary>
      </div>

      <div className="lg:w-[70%] mx-auto flex lg:gap-12 z-10 w-[90%]">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1920: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            2500: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <CardHero />
          </SwiperSlide>
          <SwiperSlide>
            <CardHero />
          </SwiperSlide>
          <SwiperSlide>
            <CardHero />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroHome;
