"use client"

import { Clock, CircleDollarSign, Users } from "lucide-react"
import { motion } from "framer-motion"
import {
    fadeUp,
    fadeIn,
    staggerContainer,
    scaleUp,
    slideInLeft,
    slideInRight
} from '@/lib/framer-animations';

export default function BookCallSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full bg-black py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Badge Pills - Responsive layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12"
        >
          <motion.div 
            variants={fadeUp}
            className="bg-[#009D18] text-white px-3 sm:px-4 py-1 sm:py-1.5 md:py-2 rounded-[40px] text-xs sm:text-sm md:text-[14px] font-normal flex items-center gap-1.5 sm:gap-2"
          >
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            <span>30 min</span>
          </motion.div>
          <motion.div 
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="bg-[#E07400] text-white px-3 sm:px-4 py-1 sm:py-1.5 md:py-2 rounded-[40px] text-xs sm:text-sm md:text-[14px] font-normal flex items-center gap-1.5 sm:gap-2"
          >
            <CircleDollarSign className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            <span>Free</span>
          </motion.div>
          <motion.div 
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="bg-[#3A0070] text-white px-3 sm:px-4 py-1 sm:py-1.5 md:py-2 rounded-[40px] text-xs sm:text-sm md:text-[14px] font-normal flex items-center gap-1.5 sm:gap-2"
          >
            <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            <span>1-on-1</span>
          </motion.div>
        </motion.div>

        {/* Main Text - Fully responsive typography */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white leading-tight sm:leading-tight md:leading-tight lg:leading-[60px] xl:leading-[60px]"
          >
            Feel free to book <br /> <span className="text-[#FDC0C5]">one-to-one </span>call anytime
            <br className="hidden sm:block" />
            to explore what we could do
            <br className="hidden sm:block" />
            together to{" "}
            <span className="text-[#FDC0C5]">
              launch your
              <br className="hidden md:block" /> products
            </span>
          </motion.h2>
        </motion.div>
      </div>
    </motion.section>
  )
}