"use client"

import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion"
import {
    fadeUp,
    fadeIn,
    staggerContainer,
    scaleUp,
    slideInLeft,
    slideInRight
} from '@/lib/framer-animations'

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const articles = [
    {
        id: 1,
        title: "LINKEDIN CONVERSION",
        description: "Turn connections into clients",
        image: "/images/article1.jpg",
    },
    {
        id: 2,
        title: "MARKETING & COPYWRITING",
        description: "Write best-selling copies",
        image: "/images/article2.jpg",
    },
    {
        id: 3,
        title: "HOW TO USE UPWORK",
        description: "2025's tops and techniques",
        image: "/images/article3.jpg",
    },
    {
        id: 4,
        title: "MONEY-MACHINE FIVERR TIPS",
        description: "How to use Fiverr for $1000+ projects",
        image: "/images/article4.jpg",
    },
    {
        id: 5,
        title: "ETHEREUM VS SOLANA",
        description: "Which chain can top in 2025",
        image: "/images/article5.jpg",
    },
    {
        id: 6,
        title: "HEALTH MAKES",
        description: "Why millions choose this",
        image: "/images/article6.jpg",
    },
    {
        id: 7,
        title: "LINKEDIN CONVERSION",
        description: "Turn connections into clients",
        image: "/images/article1.jpg",
    },
    {
        id: 8,
        title: "MARKETING & COPYWRITING",
        description: "Write best-selling copies",
        image: "/images/article2.jpg",
    },
    {
        id: 9,
        title: "HOW TO USE UPWORK",
        description: "2025's tops and techniques",
        image: "/images/article3.jpg",
    },
    {
        id: 10,
        title: "MONEY-MACHINE FIVERR TIPS",
        description: "How to use Fiverr for $1000+ projects",
        image: "/images/article4.jpg",
    },
    {
        id: 11,
        title: "ETHEREUM VS SOLANA",
        description: "Which chain can top in 2025",
        image: "/images/article5.jpg",
    },
    {
        id: 12,
        title: "HEALTH MAKES",
        description: "Why millions choose this",
        image: "/images/article6.jpg",
    },
]

export default function ArticlesSlider() {
    const swiperRef = useRef()

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="w-full py-6 lg:py-16"
        >
            <div className="w-full">
                {/* Header */}
                <motion.div
                    variants={staggerContainer}
                    className="flex container mx-auto items-center justify-between"
                >
                    <motion.div
                        variants={fadeUp}
                        className="flex ml-5 xl:ml-0"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-[40px] font-medium text-black">My Top Articles</h2>
                        <button className="flex items-center gap-2 ms-4 hover:cursor-pointer text-gray-600 hover:text-gray-900 transition-colors">
                            <span className="text-sm font-medium hover:border-b border-b-black transition-all">See all</span>
                            <ChevronRight className="w-3 h-3" />
                        </button>
                    </motion.div>
                    {/* Actions */}
                    <motion.div
                        variants={fadeUp}
                        className="flex items-center gap-6"
                    >
                        {/* Navigation arrows */}
                        <div className="hidden px-5 lg:flex gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="w-12 h-12 rounded-full bg-black hover:cursor-pointer text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => swiperRef.current?.slideNext()}
                                className="w-12 h-12 rounded-full bg-black text-white hover:cursor-pointer flex items-center justify-center hover:bg-gray-800 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Swiper Slider */}
                <motion.div
                    variants={fadeUp}
                    className="relative"
                >
                    <Swiper
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper
                        }}
                        slidesOffsetBefore={
                            typeof window !== "undefined" ? window.innerWidth > 1440 ? 190 : window.innerWidth >= 1024 ? 70 : window.innerWidth >= 768 ? 70 : 20 : 20
                        }
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={12}
                        slidesPerView={typeof window !== "undefined" && window.innerWidth >= 1024 ? 1 : 1.8}
                        pagination={{
                            clickable: true,
                            bulletClass: "swiper-pagination-bullet custom-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.5,
                                spaceBetween: 12,
                            },
                            280: {
                                slidesPerView: 1.8,
                                spaceBetween: 12,
                            },
                            374: {
                                slidesPerView: 2.2,
                                spaceBetween: 12,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 12,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1536: {
                                slidesPerView: 6.2,
                                spaceBetween: 20,
                            },
                        }}
                        className="articles-swiper !pb-16 !pt-8"
                    >
                        {articles.map((article, index) => (
                            <SwiperSlide key={article.id}>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    transition={{ delay: index * 0.1 }}
                                    className="group cursor-grab"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        className="relative w-[166px] h-[173px] md:w-[230px] md:h-[300px] lg:w-auto lg:h-[446px] xl:w-auto xl:h-[446px] rounded-[10px] lg:rounded-[30px] overflow-hidden transform transition-all duration-300"
                                    >
                                        {/* Background Image */}
                                        <div className="absolute inset-0">
                                            <img
                                                src={article.image || "/placeholder.svg"}
                                                alt={article.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Gradient Overlay - hidden on mobile, visible on larger screens */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent hidden lg:block" />
                                        {/* Content - positioned absolutely on larger screens, hidden on mobile */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            className="absolute bottom-0 left-0 right-0 p-8 hidden lg:block"
                                        >
                                            <h3 className="text-white font-bold text-base md:text-xl lg:text-2xl xl:text-3xl mb-3 text-center leading-tight">{article.title}</h3>
                                            <p className="text-[#CFCFCF] text-xs md:text-sm lg:text-base xl:text-xl text-center leading-5">{article.description}</p>
                                        </motion.div>
                                    </motion.div>
                                    {/* Mobile Content - outside image, visible only on mobile */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        className="block lg:hidden mt-4 px-2"
                                    >
                                        <h3 className="text-black font-bold text-base md:text-xl lg:text-2xl mb-0 text-left leading-tight">{article.title}</h3>
                                        <p className="text-[#A5A5A5] text-xs md:text-sm lg:text-base text-left leading-5">{article.description}</p>
                                    </motion.div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </motion.section>
    )
}