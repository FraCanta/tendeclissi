import React from "react";
import { CardHero } from "../layout/CardHero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CtaPrimary from "../layout/CtaPrimary";
import { Autoplay, Pagination } from "swiper/modules";

const HeroHome = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen gap-12 mx-auto overflow-x-hidden lg:items-center lg:mt-0 bg-hero">
      {/* Overlay nero opaco */}
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="flex flex-col lg:justify-center xl:items-center z-10 w-[90%] mx-auto gap-10">
        <div className="flex flex-col justify-center xl:items-center">
          <h1 className="text-[45px] md:text-[70px] lg:text-[100px] fxl:text-[80px] text-white font-bold leading-none">
            Tendeclissi
          </h1>
          <h2 className="text-[45px] md:text-[70px] lg:text-[100px] xl:text-[70px] fxl:text-[80px] leading- text-white font-bold">
            Fra voi e il sole
          </h2>

          <p className="text-white text-md md:text-xl lg:text-3xl xl:text-xl fxl:text-3xl w-full xl:w-[60%] mx-auto xl:text-center font-regular leading-normal">
            Entra nel nostro spazio dedicato al mondo delle tende da sole, per
            abitazioni private, attività commerciali ed esterni: la nostra
            squadra è pronta a fornirti la soluzione su misura per te!
          </p>
        </div>

        <CtaPrimary link="/showroom">scopri i nostri prodotti</CtaPrimary>
      </div>

      <div className="xl:w-[70%] mx-auto flex lg:gap-12 z-10 w-[90%]">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1500: {
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
            <CardHero
              title="Più di 40 anni di esperienza"
              descrizione="dei nostri esperti a disposizione per te"
              icon="material-symbols-light:event-available-outline"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardHero
              title="Impegno per l’eccellenza"
              descrizione="per un servizio su misura per le tue esigenze"
              icon="material-symbols:favorite-outline"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardHero
              title="Sguardo rivolto al futuro"
              descrizione="per offrirti prodotti resistenti, affidabili e innovativi"
              icon="material-symbols:fast-forward-outline"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroHome;
