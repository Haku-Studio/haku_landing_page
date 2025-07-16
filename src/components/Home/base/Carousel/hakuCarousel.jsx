// /* eslint-disable no-unused-vars */
// HakuCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, FreeMode } from "swiper/modules";

const HakuCarousel = ({ items }) => {
  const swiperRef = React.useRef(null);

  return (
    <div className="flex flex-col items-center w-full px-2# sm:px-6# lg:px-0 pt-12 sm:pt-14 lg:pt-10">
      <Swiper
        effect="coverflow"
        centeredSlides={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 12 },
          480: { slidesPerView: 1.3, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
        }}
        freeMode={true}
        loop={true}
        className="w-full "
        modules={[FreeMode]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slideToLoop(index);
                  }
                }}
                className={`relative shadow-lg transition-all duration-300 ease-in-out overflow-hidden
                  ${isActive ? "" : "scale-90 cursor-pointer opacity-40 rounded-none"}
                 h-[340px] lg:h-[340px]
                  w-full max-w-[400px] lg:max-w-[680px] mx-auto`}
              >
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: `url(${item.imageSRC})` }}
                ></div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HakuCarousel;