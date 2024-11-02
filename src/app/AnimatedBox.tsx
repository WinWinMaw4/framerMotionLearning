"use client"
import { motion } from "framer-motion";

const AnimatedBox: React.FC = () => {
  console.log("AnimatedBox rendered"); // Debugging log
  return (
    <motion.div
      animate={{ x: 100, opacity: 1 }}
      initial={{ x: 0, opacity: 0 }}
      transition={{ duration: 3 }}
      style={{ width: 100, height: 100, backgroundColor: "blue" }}
    />
  );
};

export default AnimatedBox;
