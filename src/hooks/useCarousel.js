import { useState } from "react";

const useCarousel = (length) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + length) % length);

  return { activeIndex, goNext, goPrev }
};

export default useCarousel;
