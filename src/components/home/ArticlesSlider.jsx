"use client"

import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
        <section className="w-full py-6 lg:py-16">
            <div className="w-full">
                {/* Header */}
                <div className="flex container mx-auto items-center justify-between ps-5 lg:mb-8">
                    <div className="flex">
                        <h2 className="text-2xl lg:text-[40px] font-medium text-black">My Top Articles</h2>
                        <button className="flex items-center gap-2 ms-4 hover:cursor-pointer text-gray-600 hover:text-gray-900 transition-colors">
                            <span className="text-sm font-medium hover:border-b border-b-black transition-all">See all</span>
                            <ChevronRight className="w-3 h-3" />
                        </button>
                    </div>
                    {/* Navigation arrows */}
                    <div className="hidden lg:flex gap-3">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-12 h-12 rounded-full bg-black hover:cursor-pointer text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-12 h-12 rounded-full bg-black text-white hover:cursor-pointer flex items-center justify-center hover:bg-gray-800 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Swiper Slider */}
                <div className="relative">
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
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
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
                        {articles.map((article) => (
                            <SwiperSlide key={article.id}>
                                <div className="group cursor-grab">
                                    <div className="rounded-[30px] overflow-hidden transform transition-all duration-300 hover:scale-105">
                                        {/* Image Section */}
                                        <div className="relative h-[230px] lg:h-[340px] w-[230px] lg:w-auto rounded-[30px]">
                                            <img
                                                src={article.image || "/placeholder.svg"}
                                                alt={article.title}
                                                className="w-full h-full rounded-[30px] object-cover"
                                            />
                                            {/* Arrow Icon - Only element on the image */}
                                            <div className="absolute bottom-2 right-2 w-10 h-[46px] bg-black rounded-tr-lg rounded-bl-lg rounded-tl-lg rounded-br-3xl flex items-center justify-center backdrop-blur-sm">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M7 17L17 7M17 7H7M17 7V17"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Content Section - Below the image */}
                                        <div className="p-4">
                                            <h3 className="text-black font-medium text-xl mb-2 leading-tight">{article.title}</h3>
                                            <p className="text-[#00000080] text-[15px] leading-4">{article.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}