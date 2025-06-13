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

export default function SuccessRateSection() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="py-10 lg:py-16 2xl:pb-40 px-4 lg:px-8 bg-white"
        >
            <div className="container mx-auto">
                {/* Desktop Layout */}
                <motion.div
                    variants={staggerContainer}
                    className="hidden lg:flex lg:items-start lg:justify-between lg:gap-16"
                >
                    {/* Left Column */}
                    <motion.div
                        variants={slideInLeft}
                        className="flex-shrink-0"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="text-5xl xl:text-7xl font-bold text-black mb-8"
                        >
                            My Success Rate
                        </motion.h2>
                        <motion.button
                            variants={fadeUp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#FDC0C5] hover:cursor-pointer hover:bg-[#FDC0C5]/80 text-black font-medium px-[70px] py-10 rounded-full text-2xl transition-colors"
                        >
                            Visit Portfolio
                        </motion.button>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        variants={slideInRight}
                        className="flex-1 max-w-xl lg:px-4"
                    >
                        <motion.p
                            variants={fadeUp}
                            className="text-[#969696] text-[28px] text-justify font-medium leading-relaxed mb-12"
                        >
                            We believe progress equals happiness. And no matter where you're looking to excel, we're here to help you
                            forge your pathway to power. Meet the man who's spent over 45
                        </motion.p>

                        {/* Success Stats */}
                        <motion.div
                            variants={staggerContainer}
                            className="flex gap-16 justify-center"
                        >
                            {/* Upwork Stat */}
                            <motion.div
                                variants={scaleUp}
                                className="text-center"
                            >
                                <motion.div
                                    variants={fadeUp}
                                    className="lg:text-[64px] font-bold text-black mb-3"
                                >
                                    98%
                                </motion.div>
                                <motion.div
                                    variants={fadeUp}
                                    className="flex items-center justify-center gap-2"
                                >
                                    <img src="/images/upworkicon.png" alt="Upwork Icon" className="w-7 h-7" />
                                    <span className="text-[#969696] text-3xl">Upwork</span>
                                </motion.div>
                            </motion.div>

                            {/* Freelancer Stat */}
                            <motion.div
                                variants={scaleUp}
                                className="text-center"
                            >
                                <motion.div
                                    variants={fadeUp}
                                    className="lg:text-[64px] font-bold text-black mb-3"
                                >
                                    99.7%
                                </motion.div>
                                <motion.div
                                    variants={fadeUp}
                                    className="flex items-center justify-center gap-2"
                                >
                                    <img src="/images/freelancericon.png" alt="Freelancer Icon" className="w-10 h-10" />
                                    <span className="text-[#969696] text-3xl">Freelancer</span>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Mobile Layout */}
                <motion.div
                    variants={staggerContainer}
                    className="lg:hidden text-center space-y-8"
                >
                    {/* Heading */}
                    <motion.h2
                        variants={fadeUp}
                        className="text-4xl font-bold text-black"
                    >
                        My Success Rate
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        className="text-[#A5A5A5] text-base font-medium leading-relaxed px-4"
                    >
                        We believe progress equals happiness. And no matter where you're looking to excel, we're here to help you
                        forge your pathway to power. Meet the man who's spent over 45
                    </motion.p>

                    {/* Success Stats */}
                    <motion.div
                        variants={staggerContainer}
                        className="flex justify-center gap-12"
                    >
                        {/* Upwork Stat */}
                        <motion.div
                            variants={scaleUp}
                            className="text-center"
                        >
                            <motion.div
                                variants={fadeUp}
                                className="text-4xl font-bold text-black mb-3"
                            >
                                98%
                            </motion.div>
                            <motion.div
                                variants={fadeUp}
                                className="flex items-center justify-center gap-2"
                            >
                                <img src="/images/upworkicon.png" alt="Upwork Icon" className="w-5 h-5" />
                                <span className="text-[#969696] text-base">Upwork</span>
                            </motion.div>
                        </motion.div>

                        {/* Freelancer Stat */}
                        <motion.div
                            variants={scaleUp}
                            className="text-center"
                        >
                            <motion.div
                                variants={fadeUp}
                                className="text-4xl font-bold text-black mb-3"
                            >
                                99.7%
                            </motion.div>
                            <motion.div
                                variants={fadeUp}
                                className="flex items-center justify-center gap-2"
                            >
                                <img src="/images/freelancericon.png" alt="Freelancer Icon" className="w-7 h-7" />
                                <span className="text-[#969696] text-base">Freelancer</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Visit Portfolio Button */}
                    <motion.button
                        variants={fadeUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#FDC0C5] hover:bg-[#FDC0C5]/80 text-black text-xs font-medium px-4 py-2 rounded-full transition-colors"
                    >
                        Visit Portfolio
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    )
}