import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function HorizontalWrapper({ children, direction, height }) {
  const scrollRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    isLargeScreen ? [0, 0, direction] : [0, 0, 0]
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
