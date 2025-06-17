"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  scaleUp,
  slideInLeft,
  slideInRight,
} from "@/lib/framer-animations";

export default function PressSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="w-full pb-10 bg-white"
    >
      <div className="max-w-container mx-auto px-4 md:px-0">
        <motion.div
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          {/* Title */}
          <motion.h3
            variants={fadeUp}
            className="text-base md:text-xl lg:text-[35px] font-medium text-black lg:mb-6 mb-4"
          >
            You Might Have Seen Me On
          </motion.h3>

          {/* Logos Grid */}
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="w-full container mx-auto"
          >
            <div className="flex justify-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src="../images/pressimage.png"
                alt="press"
                className="w-full cursor-pointer transition duration-300 transform hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
