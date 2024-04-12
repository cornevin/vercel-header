"use client";
import { motion } from "framer-motion";

export const ClipText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <motion.div
      initial="initial"
      animate="active"
      exit="exit"
      transition={{ staggerChildren: 0.01 }}
      className="relative z-10"
    >
      {text.split("").map((char, i) => (
        <motion.div
          key={i}
          className="inline-block bg-slate-100"
          variants={{
            initial: { y: "-2em" },
            active: { y: "0em" },
            exit: { y: "2em" },
          }}
          transition={{ duration: 0.2, ease: "circOut" }}
        >
          {char}
        </motion.div>
      ))}
    </motion.div>
  );
};
