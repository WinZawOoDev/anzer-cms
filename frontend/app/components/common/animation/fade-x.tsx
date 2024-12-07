"use client";
import { motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef } from "react";
const FadeX: React.FC<
  PropsWithChildren<{ dir: "right" | "left"; className?: string }>
> = ({ dir, children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
  });
  const initialX = dir == "right" ? 100 : -100;
  console.log("isInView: ", isInView);
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: initialX,
      }}
      animate={{
        x: isInView ? 0 : initialX,
        transition: {
          duration: 0.5,
        },
        opacity: isInView ? 1 : 0,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default FadeX;
