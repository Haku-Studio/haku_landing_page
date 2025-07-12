/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  FreeMode,
} from "swiper/modules";
import { images } from "../../../../assets/images/assets";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { RxArrowTopLeft } from "react-icons/rx";

const HakuCarousel = () => {
  const items = [
    {
      imageSRC: images.work.work1,
      content: "Web development",
    },
    {
      imageSRC: images.work.work2,
      content: "Brand idea",
    },
    {
      imageSRC: images.work.work3,
      content: "Lorem ipsum",
    },
    {
      imageSRC: images.design,
      content: "Lorem ipsum",
    },
  ];

  return (
    <div className="flex pt-40 m-auto w-full justify-center items-center">
      {/* <h1 className="heading">Haku carousel</h1> */}
      <Swiper
        effect="coverflow"
        breakpoints={{
          340: {
            slidesPerView: 2,
            // spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            // spaceBetween: 15,
          },
        }}
        pagination={{ clickable: true }}
        freeMode={true}
        modules={{ FreeMode, Pagination }}
        loop={true}
        className=" swiper_container# max-w-[90%]# lg:max-w-[80%]# w-full gap-64"
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className=" flex flex-col gap-6 relative shadow-lg text-white rounded-xl p-8 h-[250px] w-[215px] lg:h-[600px] lg:w-full ">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.imageSRC})`,
                  }}
                ></div>
                <div className="relative flex felx-col gap-3">
                  <h1 className="text-xl lg:text-2xl">{item.content} </h1>
                </div>

                {/* <RxArrowTopLeft className=" absolute bottom-5 left-5 w-[35px] h-[35px] group-hover: " */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default HakuCarousel;
