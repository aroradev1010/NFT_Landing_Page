import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function HorizontalWrapper({ children, direction, height }) {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, 0, direction]
  );

  return (
    <div ref={scrollRef}>
      <motion.div
        style={{
          height: height,
          zIndex: 6,
          position: "relative",
          translateX: xTransform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default HorizontalWrapper;
