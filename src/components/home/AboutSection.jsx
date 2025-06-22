"use client"

import { motion } from "framer-motion";
import React from 'react'
import {
    fadeUp,
    fadeIn,
    staggerContainer,
    scaleUp,
    slideInLeft,
    slideInRight
} from '@/lib/framer-animations'; // Update with correct path

export default function AboutSection() {
    return (
        <section className="lg:py-12 py-8 lg:px-8 px-4 bg-white h-screen flex flex-col items-center justify-center">
            <div className="max-w-container mx-auto">
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-8 lg:mb-12"
                >
                    <div className="flex items-center justify-center mb-3 lg:mb-4">
                        <div className="lg:w-3 lg:h-3 w-1.5 h-1.5 bg-black rounded-full mr-4"></div>
                        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-[5] lg:tracking-[10] uppercase text-black">ABOUT ME</h2>
                    </div>

                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-5xl lg:text-[50px] xl:text-[55px] 2xl:text-[60px] font-bold text-black mb-4 xl:mt-12"
                    >
                        Who Is <span className="text-[#FDC0C5]">Saleh Bilal?</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#1E1E1E] font-normal text-xs sm:text-sm md:text-base lg:text-xl xl:text-xl -mt-2"
                    >
                        Words That Drive Success.
                    </motion.p>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-8 xl:gap-32 items-start">
                    {/* First Column - Image and Social Icons (occupies 1 column) */}
                    <motion.div
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col items-center lg:items-center"
                    >
                        {/* Profile Image Placeholder */}
                        <motion.div variants={scaleUp} className="w-60 h-60 md:w-80 md:h-80 lg:w-80 lg:h-80 xl:w-[350px] xl:h-[350px] 2xl:w-[350px] 2xl:h-[350px]  rounded-full mb-8 flex items-center justify-center shrink-0">
                            <img
                                src="/images/Profileimage.jpg"
                                alt="Saleh Bilal"
                                className="w-full h-full object-cover rounded-full" />
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="lg:flex hidden space-x-3 items-center justify-center"
                        >
                            {/* Instagram Icon */}
                            <motion.div whileHover={{ scale: 1.1 }} className="lg:w-10 lg:h-10 w-6 h-6 rounded flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                                    <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                                </svg>
                            </motion.div>
                            {/* Twitter Icon */}
                            <motion.div whileHover={{ scale: 1.1 }} className="lg:w-10 lg:h-10 w-6 h-6 rounded flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                                </svg>
                            </motion.div>
                            {/* LinkedIn Icon */}
                            <motion.div whileHover={{ scale: 1.1 }} className="lg:w-10 lg:h-10 w-6 h-6 rounded flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </motion.div>
                            {/* Facebook Icon */}
                            <motion.div whileHover={{ scale: 1.1 }} className="lg:w-10 lg:h-10 w-6 h-6 rounded flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                                </svg>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Second and Third Columns - Text Content (spans 2 columns) */}
                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center lg:text-left lg:col-span-2"
                    >
                        <motion.h3
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl lg:text-4xl xl:text-3xl font-bold text-black mb-6"
                        >
                            Hey, I'm Saleh
                        </motion.h3>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-6 text-black lg:px-0 tracking-normal text-base md:text-xl 2xl:text-xl font-medium leading-5 lg:leading-relaxed"
                        >
                            <motion.p variants={fadeUp}>
                                I'm a dynamic content writer and digital marketer, passionate about crafting compelling narratives that
                                resonate deeply with audiences.
                            </motion.p>

                            <motion.p variants={fadeUp}>
                                With a strong foundation in SEO strategies and data-driven insights, I focus on elevating brand
                                visibility and enhancing engagement across digital platforms, from websites to social media.
                            </motion.p>

                            <motion.p variants={fadeUp} className='hidden lg:block'>
                                My expertise spans from creating high-converting copy to managing comprehensive marketing campaigns,
                                combining creativity with precision in every project. I bring a strategic approach, innovation, and a
                                flair for storytelling, ensuring impactful results aligned with your business goals. Whether crafting a
                                blog series or launching a digital ad campaign, I tailor each piece to connect authentically with your
                                target audience and drive measurable results.
                            </motion.p>

                            <motion.p variants={fadeUp} className="font-bold">
                                If you'd like to learn from me, consider enrolling in one of my courses above
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Mobile Social Icons */}
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center space-x-4 mt-8 lg:hidden"
                >
                    <motion.div whileHover={{ scale: 1.1 }} className="w-8 h-8 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                            <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                        </svg>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="w-8 h-8 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                        </svg>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="w-8 h-8 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="w-8 h-8 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}