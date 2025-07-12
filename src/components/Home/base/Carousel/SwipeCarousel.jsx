/* eslint-disable no-unused-vars */
import React from "react";
import { images } from "../../../../assets/images/assets";
import { motion } from "motion/react";

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

const SwipeCarousel = () => {
  return (
    <div className="relative overflow-hiden  ">
      <motion.div
        drag="x"
        className="flex items-center cursor-grab active:cursor-grabing"
      >
        <Images />
      </motion.div>
    </div>
  );
};

const Images = () => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundImage: `url(${item.imageSRC}`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="aspect-video w-1/3 shrink-0 object-cover"
          ></div>
        );
      })}
    </>
  );
};

export default SwipeCarousel;
