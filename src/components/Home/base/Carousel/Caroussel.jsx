/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "motion/react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import { images } from "../../../../assets/images/assets";

const AdvancedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInSection, setIsInSection] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState("default");
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [centerImageHovered, setCenterImageHovered] = useState(false);
  const [imageTranslationX, setImageTranslationX] = useState(0);

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
  const x = useMotionValue(0);
  const containerWidth =
    typeof window !== "undefined" ? window.innerWidth : 1200;
  const dragConstraints = containerWidth * 0.15;

  const springConfig = {
    type: "spring",
    stiffness: 400,
    damping: 40,
    mass: 0.8,
  };

  const smoothSpringConfig = {
    type: "spring",
    stiffness: 300,
    damping: 35,
    mass: 1,
  };

  const dragOpacity = useTransform(
    x,
    [-dragConstraints, 0, dragConstraints],
    [0.9, 1, 0.9]
  );
  const dragRotation = useTransform(
    x,
    [-dragConstraints, 0, dragConstraints],
    [2, 0, -2]
  );

  const cursorX = useSpring(0, { stiffness: 500, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 30 });

  const getPrevIndex = () =>
    currentIndex === 0 ? items.length - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === items.length - 1 ? 0 : currentIndex + 1;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 30);
      cursorY.set(e.clientY - 30);
    };

    if (isInSection) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isInSection, cursorX, cursorY]);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    setImageTranslationX(120);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setImageTranslationX(-120);

    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleDragStart = () => {
    setIsDragging(true);
    setCursorType("center");
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const threshold = 80;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (Math.abs(velocity) > 300 || Math.abs(offset) > threshold) {
      if (offset > 0 || velocity > 300) {
        goToNext();
      } else if (offset < 0 || velocity < -300) {
        goToPrevious();
      }
    }

    x.set(0);
  };

  const handleMouseEnterSection = (e) => {
    setIsInSection(true);
    updateCursorType(e);
  };

  const handleMouseMoveSection = (e) => {
    if (!isDragging) {
      updateCursorType(e);
    }
  };

  const updateCursorType = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const width = rect.width;

    if (mouseX < width * 0.25) {
      setCursorType("prev");
    } else if (mouseX > width * 0.75) {
      setCursorType("next");
    } else {
      setCursorType("center");
    }
  };

  const handleSectionClick = (e) => {
    if (isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const width = rect.width;

    if (mouseX < width * 0.25) {
      goToPrevious();
    } else if (mouseX > width * 0.75) {
      goToNext();
    }
  };

  return (
    <div className="absolute w-full h-screen overflow-hidden bg-black">
      <motion.div
        className="absolute w-full h-full flex items-center justify-center"
        onMouseEnter={handleMouseEnterSection}
        onMouseMove={handleMouseMoveSection}
        onMouseLeave={() => {
          setIsInSection(false);
          setCursorType("default");
        }}
        onClick={handleSectionClick}
        style={{
          cursor: isInSection ? "none" : "default",
          x,
          opacity: dragOpacity,
          rotate: dragRotation,
        }}
      >
        <div className="relative flex items-center justify-center w-full h-full">
          {/* LEFT */}
          <motion.div
            key={`left-${getPrevIndex()}`}
            className="absolute left-[-5%] w-80 h-96"
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 0.4, scale: 1 }}
            exit={{ x: 100, opacity: 0, scale: 0.8 }}
            transition={smoothSpringConfig}
            whileHover={{ opacity: 0.85 }}
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            drag="x"
            dragConstraints={{ left: dragConstraints, right: -dragConstraints }}
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <img
              src={items[getPrevIndex()].imageSRC}
              alt={items[getPrevIndex()].content}
              className="w-full h-full object-cover shadow-xl"
              style={{
                filter: "brightness(0.8) saturate(0.9)",
                borderRadius: "0px",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
              <h4 className="text-white text-lg font-medium opacity-90">
                {items[getPrevIndex()].content}
              </h4>
            </div>
          </motion.div>

          {/* CENTER */}
          <motion.div
            key={`center-${currentIndex}`}
            className="relative w-[700px] h-[500px] scale-125 z-10"
            initial={{ scale: 0.8, opacity: 0, x: imageTranslationX }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.8, opacity: 0, x: imageTranslationX }}
            transition={smoothSpringConfig}
            onMouseEnter={() => setCenterImageHovered(true)}
            onMouseLeave={() => setCenterImageHovered(false)}
            drag="x"
            dragConstraints={{ left: dragConstraints, right: -dragConstraints }}
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <motion.img
              src={items[currentIndex].imageSRC}
              alt={items[currentIndex].content}
              className="w-full h-full object-cover shadow-2xl transition-all duration-500"
              style={{
                borderRadius: centerImageHovered ? "20px" : "0px",
                transform: centerImageHovered
                  ? "perspective(1000px) rotateY(0deg)"
                  : "none",
              }}
              animate={{
                scale: centerImageHovered ? 1.02 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
              style={{ borderRadius: centerImageHovered ? "20px" : "0px" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <motion.h3
                className="text-white text-3xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...smoothSpringConfig, delay: 0.2 }}
              >
                {items[currentIndex].content}
              </motion.h3>
            </div>
            <AnimatePresence>
              {centerImageHovered && (
                <motion.div
                  className="absolute inset-0 bg-white/5 border-2 border-white/20"
                  style={{ borderRadius: "20px" }}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            key={`right-${getNextIndex()}`}
            className="absolute right-[-5%] w-80 h-96 "
            initial={{ x: -100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 0.4, scale: 1 }}
            exit={{ x: -100, opacity: 0, scale: 0.8 }}
            transition={smoothSpringConfig}
            whileHover={{ opacity: 0.85 }}
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            drag="x"
            dragConstraints={{ left: dragConstraints, right: -dragConstraints }}
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <img
              src={items[getNextIndex()].imageSRC}
              alt={items[getNextIndex()].content}
              className="w-full h-full object-cover shadow-xl"
              style={{
                filter: "brightness(0.8) saturate(0.9)",
                borderRadius: "0px",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
              <h4 className="text-white text-lg font-medium opacity-90">
                {items[getNextIndex()].content}
              </h4>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {isDragging && (
            <motion.div
              className="absolute inset-0 bg-yellow-400/5 border-2 border-yellow-400/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Cursor */}
      <AnimatePresence>
        {isInSection && (
          <motion.div
            className="fixed pointer-events-none z-50 mix-blend-difference"
            style={{ left: cursorX, top: cursorY }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={springConfig}
          >
            <motion.div
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 ${
                isDragging ? "bg-yellow-500" : "bg-yellow-400"
              }`}
              animate={{
                scale: isDragging ? 1.3 : 1,
                rotate: isDragging ? 180 : 0,
              }}
              transition={springConfig}
            >
              <AnimatePresence mode="wait">
                {cursorType === "prev" && !isDragging && (
                  <motion.div
                    key="prev"
                    initial={{ opacity: 0, x: 8, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -8, scale: 0.8 }}
                    transition={springConfig}
                  >
                    <LuChevronLeft className="w-8 h-8 text-black" />
                  </motion.div>
                )}
                {cursorType === "next" && !isDragging && (
                  <motion.div
                    key="next"
                    initial={{ opacity: 0, x: -8, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 8, scale: 0.8 }}
                    transition={springConfig}
                  >
                    <LuChevronRight className="w-8 h-8 text-black" />
                  </motion.div>
                )}
                {(cursorType === "center" || isDragging) && (
                  <motion.div
                    key="center"
                    className={`bg-black rounded-full ${
                      isDragging ? "w-4 h-4" : "w-3 h-3"
                    }`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={springConfig}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dots */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {items.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-yellow-400" : "bg-white/30"
            }`}
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              if (!isAnimating) {
                setCurrentIndex(index);
              }
            }}
          />
        ))}
      </div> */}
    </div>
  );
};

export default AdvancedCarousel;

// import React from "react";
// import { images } from "../../../../assets/images/assets";
// import './Carousel.css'

// const Caroussel = () => {
//   const Projects = [
//     {
//       imageSRC: images.work.work1,
//       content: "Web development",
//     },
//     {
//       imageSRC: images.work.work2,
//       content: "Brand idea",
//     },
//     {
//       imageSRC: images.work.work3,
//       content: "Lorem ipsum",
//     },
//   ];
//   return (
//     <div className=" flex justify-center items-center gap-32 transform  ">
//       <img
//         src={Projects[0].imageSRC}
//         alt=""
//         className={`object-cover w-full h-[341px] min-w-[500px] opacity-30`
//     }
//       />
//       <img
//         src={Projects[1].imageSRC}
//         alt=""
//         className={`image1 object-cover# w-full h-[341px] min-w-[500px] scale-[135%] hover:rounded-lg `
//     }
//       />
//       <img
//         src={Projects[2].imageSRC}
//         alt=""
//         className={`object-cover w-full h-[341px] min-w-[500px] opacity-30`
//     }
//       />
//     </div>
//   );
// };

// export default Caroussel;
