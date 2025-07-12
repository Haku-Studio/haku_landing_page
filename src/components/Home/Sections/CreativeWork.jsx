import React, { useState } from "react";
import SectionContent from "../base/SectionContent";
import Branche from "../base/Branche";
import { images } from "../../../assets/images/assets";
import Project from "../base/Project";
// import useCarousel from "../../../hooks/useCarousel";
import CustomCursor from "../../base/CustomCursor";
import { motion } from "motion/react";

const CreativeWork = () => {
  const Projects = [
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
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const goTo = (direction) => {
    setCurrentIndex(
      (prev) => (prev + direction + Projects.length) % Projects.length
    );
  };

  const getPosition = (index) => {
    if (index === currentIndex) return "center";
    if (index === (currentIndex - 1 + Projects.length) % Projects.length)
      return "left";
    if (index === (currentIndex + 1) % Projects.length) return "right";
    return "hidden";
  };

  // const { activeIndex, goNext, goPrev } = useCarousel(Projects.length);

  return (
    <div className=" space-y-[42px] relative h-full w-full overflow-hidden">
      <CustomCursor />
      <SectionContent
        title="Creative Work"
        content="We shape ideas into bold creative directions—defining the look, the voice, and the soul of standout brands"
      />

      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full h-full"> */}
      <div className="relative flex justify-center items-center gap-4 h-full overflow-hidden ">
        {Projects.map((project, index) => {
          // const offset = index - activeIndex;
          const position = getPosition(index);

          if (position === "hidden") return null;

          const classMap = {
            center: " scale-125 h-96 z-20 rounded-xl# scale-100",
            left: " -translate-x-16 z-10 opacity-30 rounded-md#",
            right: " translate-x-16 z-10 opacity-30 rounded-md#",
          };

          // const isActive = index === currentIndex;
          // const isPrev =
          //   index === (currentIndex - 1 + Projects.length) % Projects.length;
          // const isNext = index === (currentIndex + 1) % Projects.length;

          return (
            // <motion.div key={index} className=" carousel-item">
            // <Project
            //   key={index}
            //   imageSRC={projectItem.imageSRC}
            //   content={projectItem.content}
            //   offset={offset}
            //   onPrev={goPrev}
            //   onNext={goNext}
            // />
            // </motion.div>
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.x > 100) goTo(-1);
                if (info.offset.x < -100) goTo(1);
              }}
              className={`space-y-[23px] h-full transition-all duration-700 ease-in-out h-[80%]# overflow-hidden ${classMap[position]}`}
            >
                <img
                  src={project.imageSRC}
                  alt=""
                  className={`object-cover w-full h-[341px] min-w-[500px] ${position === "center" && "hover:rounded-t-[20px]"}`}
                />

                {/* {position === "center" && (
                  <p className=" text-8xl text-center ">
                    {project.content}
                  </p> )} */}
                {/* ): <p className="font-gtLight text-center text-xs">{project.content}</p>} */}

                {/* <p className="font-gtLight text-xs">{project.content}</p> */}
              
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CreativeWork;
