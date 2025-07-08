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
            variants={staggerContainer}
            className="w-full flex flex-wrap justify-between gap-6 items-center"
          >
            {/* Logo 1 */}
            <motion.div variants={scaleUp} className="flex-1 flex justify-center">
              <img
                src="/images/mediumlogo.png"
                alt="Company logo"
                className="lg:w-40 lg:h-40 w-28 h-28 object-contain opacity-50 hover:opacity-100 transition duration-300"
              />
            </motion.div>



            {/* Logo 2 */}
            <motion.div variants={scaleUp} className="flex-1 flex justify-center">
              <img
                src="/images/firebaselogo.png"
                alt="Company logo"
                className="lg:w-40 lg:h-40 w-28 h-28 object-contain filter grayscale hover:filter-none transition duration-300"
              />
            </motion.div>

            {/* Logo 3 */}
            <motion.div variants={scaleUp} className="flex-1 flex justify-center">
              <img
                src="/images/adobelogo.png"
                alt="Adobe logo"
                className="lg:w-32 lg:h-32 w-24 h-24 object-contain filter grayscale hover:filter-none transition duration-300"
              />
            </motion.div>

            {/* Logo 4 */}
            <motion.div variants={scaleUp} className="flex-1 flex justify-center">
              <img
                src="/images/stacklogo.png"
                alt="Stack logo"
                className="lg:w-40 lg:h-40 w-28 h-28 object-contain filter grayscale hover:filter-none transition duration-300"
              />
            </motion.div>
          </motion.div>



        </motion.div>
      </div>
    </motion.section>
  );
}
