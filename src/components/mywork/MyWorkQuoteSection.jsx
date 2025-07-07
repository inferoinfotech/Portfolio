"use client"

import { motion } from "framer-motion"
import {
    fadeUp,
    fadeIn,
    staggerContainer,
    scaleUp,
    slideInLeft,
    slideInRight
} from '@/lib/framer-animations'

export default function MyWorkQuoteSection() {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block bg-black text-white py-20 px-4"
        >
            <div className="max-w-6xl mx-auto text-center">
             {/* Quote */}
        <motion.div
          variants={fadeUp}
          className="mb-8 md:mb-12 xl:mb-20 text-center px-4 md:px-0"
        >
          <motion.h2
            variants={fadeUp}
            className="text-5xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-[86px] leading-[50px] lg:leading-16 2xl:leading-[90px] font-medium tracking-[-0.03em] text-center text-white max-w-xl xl:max-w-5xl mx-auto"
          >
            " Writing isn’t about filling space, it’s about making space for the{" "}
            <span className="text-[rgba(253,192,197,1)]">right ideas</span> to land."
          </motion.h2>
        </motion.div>

        {/* Author */}
        <motion.div
          variants={fadeIn}
          className="flex items-center justify-center mb-8 "
        >
          <div className="flex items-center space-x-3 md:space-x-4 cursor-pointer hover:scale-110 active:scale-105 transition-transform duration-300 ease-in-out">
            {" "}
            {/* Profile Image with pink background */}
            <motion.div
              variants={scaleUp}
              className="w-12 h-12 md:w-16 md:h-16 bg-[#FDC0C5] rounded-full p-1"
            >
              <div className="w-full h-full rounded-[30px] overflow-hidden">
                <img
                  src="../images/Profileimage.jpg"
                  alt="Saleh Bilal"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            {/* Text Content */}
            <motion.div variants={fadeUp} className="flex flex-col">
              <h3 className="text-white text-base md:text-lg font-normal tracking-[-0.03em]">
                Saleh Bilal
              </h3>
              <p className="text-gray-400 text-sm">Founder @ DGTL Network</p>
            </motion.div>
          </div>
        </motion.div>
            </div>
        </motion.section>
    )
}