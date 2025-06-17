"use client"

import { TrendingUp, Target, Zap, Globe, BarChart3, Settings } from "lucide-react"
import { motion } from "framer-motion"
import {
    fadeUp,
    fadeIn,
    staggerContainer,
    scaleUp,
    slideInLeft,
    slideInRight
} from '@/lib/framer-animations'

const benefits = [
    {
        id: 1,
        icon: TrendingUp,
        title: "Innovative problem solving",
        description:
            "Ability to approach challenges with creative solutions that set projects apart, ensuring fresh ideas drive success in a competitive landscape.",
    },
    {
        id: 2,
        icon: Target,
        title: "Innovative problem solving",
        description:
            "Ability to approach challenges with creative solutions that set projects apart, ensuring fresh ideas drive success in a competitive landscape.",
    },
    {
        id: 3,
        icon: Zap,
        title: "Innovative problem solving",
        description:
            "Ability to approach challenges with creative solutions that set projects apart, ensuring fresh ideas drive success in a competitive landscape.",
    },
    {
        id: 4,
        icon: Globe,
        title: "Innovative problem solving",
        description:
            "Ability to approach challenges with creative solutions that set projects apart, ensuring fresh ideas drive success in a competitive landscape.",
    },
    {
        id: 5,
        icon: BarChart3,
        title: "Innovative problem solving",
        description:
            "Ability to approach challenges with creative solutions that set projects apart, ensuring fresh ideas drive success in a competitive landscape.",
    },
    {
        id: 6,
        icon: Settings,
        title: "Innovative problem solving",
        description:
            "Ability to approach challenges with creative solutions that set projects apart, ensuring fresh ideas drive success in a competitive landscape.",
    },
]

export default function KeyBenefitsSection() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="py-8 md:py-8 lg:py-12 xl:py-12 px-4 lg:px-8 bg-white"
        >
            <div className="max-w-container mx-auto">
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <motion.div
                        variants={staggerContainer}
                        className="flex justify-center items-center gap-3 mb-8"
                    >
                        <motion.div
                            variants={scaleUp}
                            className="lg:w-3 lg:h-3 w-1.5 h-1.5 bg-black rounded-full"
                        ></motion.div>
                        <motion.h2
                            variants={fadeUp}
                            className="text-[10px] lg:text-xl font-medium tracking-[5] lg:tracking-[10] uppercase"
                        >
                            Key Benefits
                        </motion.h2>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        transition={{ delay: 0.1 }}
                        className="text-[40px] lg:text-5xl xl:text-7xl font-medium text-black leading-tight"
                    >
                        Create a competitive edge
                    </motion.h1>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12"
                >
                    {benefits.map((benefit) => {
                        const IconComponent = benefit.icon
                        return (
                            <div
                                key={benefit.id}
                                className="text-center lg:text-left"
                            >
                                {/* Icon */}
                                <motion.div
                                    variants={scaleUp}
                                    className="flex justify-center lg:justify-start mb-6"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="w-12 h-12 md:h-13 xl:w-14 md:w-13 xl:h-14 cursor-pointer bg-[#D9D9D966] rounded-[5px] lg:rounded-2xl flex items-center justify-center"
                                    >
                                        <IconComponent className="w-6 h-6 2xl:w-7 2xl:h-7 text-gray-700" />
                                    </motion.div>
                                </motion.div>

                                {/* Title */}
                                <motion.h3
                                    variants={fadeUp}
                                    className="text-2xl md:text-[26px] xl:text-[28px] font-medium text-black mb-4 leading-tight"
                                >
                                    {benefit.title}
                                </motion.h3>

                                {/* Description */}
                                <motion.p
                                    variants={fadeUp}
                                    className="text-black/70 text-base md:text-xl xl:text-[26px] leading-5 px-14 lg:px-0 font-normal lg:leading-7 lg:max-w-11/12 xl:max-w-10/12"
                                >
                                    {benefit.description}
                                </motion.p>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </motion.section>
    )
}