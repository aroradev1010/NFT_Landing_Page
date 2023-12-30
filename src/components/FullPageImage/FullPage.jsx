import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function FullPage() {
  const secRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const { scrollYProgress } = useScroll({
  //   target: secRef,
  //   offset: ["start end", "end start"],
  // });

  useEffect(() => {
    // Update windowWidth when the window is resized
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });
  // Calculate dynamic xTransform and scale values based on windowWidth

  const isLargeScreen = windowWidth >= 1025;
  const xTransformValue = [
    -1000 * (windowWidth / 1920),
    300 * (windowWidth / 1920),
    300 * (windowWidth / 1920),
    300 * (windowWidth / 1920),
  ];

  const scaleValue = [
    0,
    0.5 * (windowWidth / 768),
    0.6 * (windowWidth / 1240),
    1,
  ];

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.8], scaleValue);
  // const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const xTransform = useTransform(
    scrollYProgress,
    [1, 0.5, 0.1, 0],
    // [-1000, 300, 300, 300]
    xTransformValue
  );
  return (
    <div className="fullPageStyled" ref={secRef}>
      <motion.div className="image" style={{ scale, x: xTransform }}>
        <img
          src="https://ideogram.ai/api/images/direct/MMfyRZqjTUyvIk_ZfJcrZw.jpg"
          alt="nft"
          // fill={true}
          className="fullPageImg"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            display: isLargeScreen ? "block" : "none",
          }}
        />
      </motion.div>
    </div>
  );
}

export default FullPage;
