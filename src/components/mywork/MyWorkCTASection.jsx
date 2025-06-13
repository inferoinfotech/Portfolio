"use client"

import { motion } from "framer-motion"
import React from 'react'
import {
    fadeUp,
    fadeIn,
    staggerContainer,
    scaleUp
} from '@/lib/framer-animations'

const MyWorkCTASection = () => {
    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative w-full h-[50vh] lg:min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image - Placed at lower z-index */}
            <motion.div 
                variants={scaleUp}
                className="absolute inset-0 z-0 rounded-t-[30px]"
            >
                <video autoPlay muted loop playsInline className="w-full h-full object-cover rounded-t-[30px]">
                    <source src="/videos/home-cta-video.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Linear Gradient Overlay - Higher z-index */}
            <motion.div
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="absolute inset-0 z-10 rounded-t-3xl"
                style={{
                    background: `linear-gradient(180deg, 
                        rgba(82, 77, 77, 0.3) 10%, 
                        rgba(11, 11, 11, 0.9) 75.14%, 
                        rgba(0, 0, 0, 1) 86%)`,
                }}
            ></motion.div>
            
            <motion.div 
                variants={staggerContainer}
                className="relative z-20 text-center px-4 max-w-4xl mx-auto"
            >
                {/* Main Heading */}
                <motion.h1 
                    variants={fadeUp}
                    className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-[80px] tracking-tighter font-bold mb-8 lg:mb-12"
                >
                    Let's make something<br />
                    <motion.span 
                        variants={fadeUp}
                        transition={{ delay: 0.1 }}
                        className='text-[#FDC0C5]'
                    > 
                        "converting" 
                    </motion.span>
                    {" "}together
                </motion.h1>

                {/* CTA Button */}
                <motion.button 
                    variants={fadeUp}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white hover:cursor-pointer hover:bg-[#f8a8b0] text-black text-[10px] md:text-base lg:text-[22px] font-medium px-8 py-4 lg:px-24 lg:py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                    Schedule a Free Consultation
                </motion.button>
            </motion.div>
        </motion.section>
    )
}

export default MyWorkCTASection