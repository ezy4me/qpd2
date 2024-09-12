"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  scaleRange?: [number, number];
  opacityRange?: [number, number];
  offset?: [`${number} ${number}`, `${number} ${number}`];
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  scaleRange = [0.8, 1],
  opacityRange = [0.6, 1],
  offset = ["0 1", "1.33 1"],
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], scaleRange);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], opacityRange);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        width: '100%'
      }}
      ref={ref}>
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
