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
                <motion.blockquote 
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <motion.p 
                        variants={fadeUp}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl xl:text-[64px] font-bold leading-slug max-w-6xl mx-auto"
                    >
                        <motion.span 
                            variants={scaleUp}
                            className="text-5xl lg:text-6xl xl:text-[64px]"
                        >" </motion.span>
                        Pirate ipsum arrgh bounty warp jack. Shrouds grog <motion.span 
                            whileHover={{ scale: 1.05 }}
                            className="text-[#FDC0C5]"
                        > lubber bow</motion.span> red gabion sloop black crow's
                        <motion.span 
                            variants={scaleUp}
                            transition={{ delay: 0.2 }}
                            className="text-5xl lg:text-6xl xl:text-7xl"
                        > "</motion.span>
                    </motion.p>
                </motion.blockquote>

                {/* Author Profile */}
                <motion.div 
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-4"
                >
                    {/* Profile Image */}
                    <motion.div 
                        variants={scaleUp}
                        className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden flex-shrink-0"
                    >
                        <img 
                            src="/images/Profileimage.jpg" 
                            alt="Saleh Bilal" 
                            className="w-full h-full object-cover" 
                        />
                    </motion.div>

                    {/* Author Info */}
                    <motion.div 
                        variants={fadeUp}
                        transition={{ delay: 0.1 }}
                        className="text-left"
                    >
                        <motion.h3 
                            whileHover={{ color: "#FDC0C5" }}
                            className="text-xl lg:text-2xl font-medium text-white mb-1"
                        >
                            Saleh Bilal
                        </motion.h3>
                        <motion.p 
                            whileHover={{ scale: 1.02 }}
                            className="text-gray-400 text-sm lg:text-base"
                        >
                            Founder @ DGTL Network
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}