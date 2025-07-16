/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomCursor = () => {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 600, damping: 35 });
  const y = useSpring(rawY, { stiffness: 600, damping: 35 });

  const lastPosition = useRef({ x: 0, y: 0 });

  const [hoverTarget, setHoverTarget] = useState(null);

  useEffect(() => {
    const handleMove = (e) => {
      const mouseX = e.clientX - 12;
      const mouseY = e.clientY - 12;

      const dx = Math.abs(mouseX - lastPosition.current.x);
      const dy = Math.abs(mouseY - lastPosition.current.y);

      // Seulement mettre à jour si la souris a bougé d'au moins 1px
      if (dx > 0.5 || dy > 0.5) {
        rawX.set(mouseX);
        rawY.set(mouseY);
        lastPosition.current = { x: mouseX, y: mouseY };
      }

      const el = e.target.closest("[data-cursor]");
      if (el?.dataset.cursor) {
        setHoverTarget(el.dataset.cursor);
      } else {
        setHoverTarget(null);
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [rawX, rawY]);

  return (
    <motion.div
      className="fixed bg-primary top-0 left-0 w-6 h-6 z-[999] rounded-full pointer-events-none flex items-center justify-center"
      style={{
        translateX: x,
        translateY: y,
      }}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {hoverTarget === "prev" && <FaArrowLeft className="text-black text-xs" />}
      {hoverTarget === "next" && <FaArrowRight className="text-black text-xs" />}
    </motion.div>
  );
};

export default CustomCursor;
