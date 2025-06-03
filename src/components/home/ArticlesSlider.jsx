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
        <section className="w-full py-16">
            <div className="w-full">
                {/* Header */}
                <div className="flex container mx-auto items-center justify-between">
                    <div className="flex">
                        <h2 className="text-[40px] font-medium text-black">My Top Articles</h2>
                        <button className="flex items-center gap-2 ms-4 hover:cursor-pointer text-gray-600 hover:text-gray-900 transition-colors">
                            <span className="text-sm font-medium hover:border-b border-b-black transition-all">See all</span>
                            <ChevronRight className="w-3 h-3" />
                        </button>
                    </div>
                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        {/* See all button */}


                        {/* Navigation arrows */}
                        <div className="flex gap-3">
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
                </div>

                {/* Swiper Slider */}
                <div className="relative">
                    <Swiper
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper
                        }}
                        slidesOffsetBefore={175}
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            bulletClass: "swiper-pagination-bullet !w-3 !h-3 !bg-gray-300 !opacity-100",
                            bulletActiveClass: "swiper-pagination-bullet-active !w-3 !h-3 !bg-[#FDC0C5] !opacity-100",
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.5,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
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
                                    <div className="relative h-[446px] rounded-[30px] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700 transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                        {/* Background Image */}
                                        <div className="absolute inset-0">
                                            <img
                                                src={article.image || "/placeholder.svg"}
                                                alt={article.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <h3 className="text-white font-bold text-3xl  mb-3 text-center leading-tight">{article.title}</h3>
                                            <p className="text-[#CFCFCF] text-xl text-center leading-5">{article.description}</p>
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