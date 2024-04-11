import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Gallery3d = () => {
  return (
    <div className="w-full lg:w-[90%] mx-auto">
      <h2 className="text-black font-bold text-3xl lg:text-5xl text-center mb-10">
        Risultato finale
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="/assets/progetti/img2.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/progetti/img3.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/progetti/img4.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/progetti/img5.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/progetti/img6.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/progetti/img7.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/progetti/img8.jpg" alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Gallery3d;
