"use client"

import { motion } from "framer-motion";
import {
    fadeUp,
    fadeIn,
    staggerContainer,
    scaleUp,
    slideInLeft,
    slideInRight
} from '@/lib/framer-animations';

export default function HeroCTASectionAbout() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-black pt-5"
    >
      <div className="relative w-full h-[50vh] lg:min-h-screen flex items-center justify-center overflow-hidden rounded-t-[30px]">
        {/* Background Video */}
        <motion.div 
          variants={scaleUp}
          className="absolute inset-0 z-0"
        >
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/About-video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Linear Gradient Overlay */}
        <motion.div
          variants={fadeIn}
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(180deg, 
                        rgba(82, 77, 77, 0.3) 10%, 
                        rgba(11, 11, 11, 0.9) 75.14%, 
                        rgba(0, 0, 0, 1) 86%)`,
          }}
        ></motion.div>

        {/* Content */}
        <motion.div 
          variants={staggerContainer}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1 
            variants={fadeUp}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] font-bold mb-6 md:mb-8 lg:mb-12 leading-tighter"
          >
            Get the guidance
            <br />
            you need to grow
          </motion.h1>

          {/* CTA Button */}
          <motion.button 
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#FDC0C5] via-white/40 to-white/40 backdrop-blur-2xl text-white cursor-pointer font-medium text-lg md:text-xl lg:text-2xl tracking-wider capitalize px-6 xl:px-12 py-7 xl:py-9 rounded-full shadow-lg hover:opacity-90 transition"
          >
            Meet Saleh Bilal
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}