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
      className="w-full py-8 lg:py-16 bg-white"
    >
      <div className="max-w-container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          className="flex items-center justify-between mb-8"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black">My Top Articles</h2>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <span className="text-sm font-medium">See all</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Navigation arrows */}
          <motion.div variants={fadeUp} className="hidden lg:flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
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
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView="auto"
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 16,
              },
            }}
            className="!pb-12"
          >
            {articles.map((article, index) => (
              <SwiperSlide key={article.id} className="!w-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="relative w-[220px] h-[300px] rounded-2xl overflow-hidden transform transition-all duration-300"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-lg mb-2 leading-tight">{article.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{article.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 0 !important;
        }
        
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
        }
        
        .swiper-pagination-bullet-active {
          background: #374151;
        }
      `}</style>
    </motion.section>
  )
}