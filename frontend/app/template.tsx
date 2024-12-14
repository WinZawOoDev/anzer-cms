"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}
