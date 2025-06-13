"use client"

import { Clock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
    fadeUp,
    fadeIn,
    staggerContainer,
    scaleUp,
    slideInLeft,
    slideInRight
} from '@/lib/framer-animations'

const topArticles = [
    {
        id: 1,
        title: "Be someone that everyone just thinks to be. Not someone who doesn't know himself",
        category: "Social media",
        categoryColor: "bg-[#FDC0C5]",
        image: "/videos/articlevideo.mp4",
        date: "February 24, 2025",
        featured: true,
    },
    {
        id: 2,
        title: "Be someone that everyone just thinks to be. Not someone who doesn't know himself",
        category: "Social media",
        categoryColor: "bg-[#DD8100]",
        image: "/images/article7.jpg",
        date: "February 24, 2025",
        featured: false,
    },
    {
        id: 3,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "Self Growth",
        categoryColor: "bg-[#DBD700] ",
        image: "/images/article8.jpg",
        date: "5h 5min ago",
        featured: false,
    },
    {
        id: 4,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "Social media",
        categoryColor: "bg-[#2954FF]",
        image: "/images/article9.jpg",
        date: "5h 5min ago",
        featured: false,
    },
]

export default function TopArticlesSection() {
    const featuredArticle = topArticles.find((article) => article.featured)
    const regularArticles = topArticles.filter((article) => !article.featured)

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py:16 pt-16 pb-32 px-4 lg:px-8 bg-black text-white"
        >
            <div className="container mx-auto">
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.h2 
                        variants={fadeUp}
                        className="text-3xl lg:text-5xl font-bold mb-4"
                    >
                        Top blogs
                    </motion.h2>
                    <motion.p 
                        variants={fadeUp}
                        transition={{ delay: 0.1 }}
                        className="text-white/80 text-sm lg:text-xl max-w-sm mx-auto"
                    >
                        Read by over 200+ readers globally as I help them for a successful career
                    </motion.p>
                </motion.div>

                {/* Featured Article */}
                <motion.div 
                    variants={scaleUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-8 lg:mb-12"
                >
                    {featuredArticle && (
                        <Link href={`/blog/${featuredArticle.id}`} className="group cursor-pointer block">
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="relative h-[660px] lg:h-[790px] rounded-[30px] overflow-hidden"
                            >
                                <video
                                    src={featuredArticle?.image || "/placeholder.mp4"}
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                {/* Content Overlay */}
                                <motion.div 
                                    variants={fadeIn}
                                    className="absolute bottom-0 left-0 right-0 p-6 lg:p-20"
                                >
                                    <motion.div 
                                        variants={fadeUp}
                                        className="mb-4"
                                    >
                                        <span
                                            className={`${featuredArticle?.categoryColor} text-white px-4 py-2 rounded-full text-xs lg:text-2xl font-normal`}
                                        >
                                            {featuredArticle?.category}
                                        </span>
                                    </motion.div>
                                    <motion.h3 
                                        variants={fadeUp}
                                        transition={{ delay: 0.1 }}
                                        className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-12"
                                    >
                                        {featuredArticle?.title}
                                    </motion.h3>
                                    <motion.p 
                                        variants={fadeUp}
                                        transition={{ delay: 0.2 }}
                                        className="text-[#DFDFDF] text-md lg:text-xl"
                                    >
                                        {featuredArticle?.date}
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        </Link>
                    )}
                </motion.div>

                {/* Desktop Layout - 3 articles in a row */}
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:mb-12"
                >
                    {regularArticles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            variants={fadeUp}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/blog/${article.id}`} className="group cursor-pointer block">
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    className="relative h-[425px] rounded-[30px] overflow-hidden"
                                >
                                    <img
                                        src={article.image || "/placeholder.svg"}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="mb-4">
                                            <span className={`${article.categoryColor} text-white px-3 py-1 rounded-full text-base font-normal`}>
                                                {article.category}
                                            </span>
                                        </div>
                                        <motion.h3 
                                            whileHover={{ color: "#FDC0C5" }}
                                            className="text-2xl font-bold text-white mb-3"
                                        >
                                            {article.title}
                                        </motion.h3>
                                        <p className="text-gray-300 text-sm flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            {article.date}
                                        </p>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile Layout - 3 articles stacked vertically */}
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="lg:hidden space-y-6 mb-8"
                >
                    {regularArticles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            variants={fadeUp}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/blog/${article.id}`} className="group cursor-pointer block">
                                <motion.div 
                                    whileHover={{ scale: 1.03 }}
                                    className="relative h-[660px] rounded-[30px] overflow-hidden"
                                >
                                    <img
                                        src={article.image || "/placeholder.svg"}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="mb-3">
                                            <span className={`${article.categoryColor} text-white px-3 py-1 rounded-full text-xs lg:text-sm font-medium`}>
                                                {article.category}
                                            </span>
                                        </div>
                                        <motion.h3 
                                            whileHover={{ color: "#FDC0C5" }}
                                            className="text-3xl font-bold text-white mb-2 leading-tight"
                                        >
                                            {article.title}
                                        </motion.h3>
                                        <p className="text-gray-300 text-sm">{article.date}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div 
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-black px-6 py-3 lg:px-7 lg:py-2 text-base lg:text-xl rounded-full font-medium hover:bg-gray-200 hover:cursor-pointer transition-colors"
                    >
                        View all
                    </motion.button>
                </motion.div>
            </div> 
        </motion.section>
    )
}