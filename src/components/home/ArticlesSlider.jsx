"use client"

import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import {
    fadeUp,
    fadeIn,
    staggerContainer,
    scaleUp
} from '@/lib/framer-animations';

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
            className="w-full py-6 lg:py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
        >
            <div className="w-full">
                {/* Header */}
                <motion.div
                    className="flex container mx-auto items-center justify-between ps-5 lg:mb-8"
                    variants={staggerContainer}
                >
                    <motion.div className="flex" variants={fadeUp}>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-[40px] font-medium text-black">My Top Articles</h2>
                        <motion.button
                            className="flex items-center gap-2 ms-4 hover:cursor-pointer text-gray-600 hover:text-gray-900 transition-colors"
                            whileHover={{ x: 5 }}
                            variants={fadeUp}
                        >
                            <span className="text-sm font-medium hover:border-b border-b-black transition-all">See all</span>
                            <ChevronRight className="w-3 h-3" />
                        </motion.button>
                    </motion.div>
                    {/* Navigation arrows */}
                    <motion.div className="hidden px-5 lg:flex gap-3" variants={fadeUp}>
                        <motion.button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-12 h-12 rounded-full bg-black hover:cursor-pointer text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-12 h-12 rounded-full bg-black text-white hover:cursor-pointer flex items-center justify-center hover:bg-gray-800 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Swiper Slider */}
                <motion.div className="relative" variants={fadeUp}>
                    <Swiper
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper
                        }}
                        slidesOffsetBefore={typeof window !== "undefined" && window.innerWidth >= 1024 ? 175 : 20}
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
                                slidesPerView: 1.8,
                                spaceBetween: 12,
                            },
                            280: {
                                slidesPerView: 1.5,
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
                        className="articles-swiper !pb-16 !pt-12"
                    >
                        {articles.map((article, index) => (
                            <SwiperSlide key={article.id}>
                                <motion.div
                                    className="group cursor-grab"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <div className="rounded-[30px] overflow-hidden transform transition-all duration-300 hover:scale-105">
                                        {/* Image Section */}
                                        <motion.div
                                            className="relative h-[230px] lg:h-[340px] w-[230px] lg:w-auto rounded-[30px]"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <img
                                                src={article.image || "/placeholder.svg"}
                                                alt={article.title}
                                                className="w-full h-full rounded-[30px] object-cover"
                                            />
                                            {/* Arrow Icon - Only element on the image */}
                                            <motion.div
                                                className="absolute bottom-2 right-2 w-10 h-[46px] bg-black rounded-tr-lg rounded-bl-lg rounded-tl-lg rounded-br-3xl flex items-center justify-center backdrop-blur-sm"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M7 17L17 7M17 7H7M17 7V17"
                                                    />
                                                </svg>
                                            </motion.div>
                                        </motion.div>

                                        {/* Content Section - Below the image */}
                                        <motion.div
                                            className="p-4"
                                            whileHover={{ x: 5 }}
                                        >
                                            <h3 className="text-black font-medium text-base sm:text-lg md:text-xl mb-2 leading-tight">{article.title}</h3>
                                            <p className="text-[#00000080] text-sm sm:text-base md:text-[15px] leading-4">{article.description}</p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </motion.section>
    )
}