"use client"

import { useRef, useState } from "react"
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
        title: "Pitch Decks That Win Investors",
        description: "Craft compelling stories that seal the deal",
        image: "/images/article1.jpg",
        category: "Landing pages",
    },
    {
        id: 2,
        title: "Sell Your Vision with Words",
        description: "Powerful copy that makes investors say yes",
        image: "/images/article2.jpg",
        category: "Pitch decks",
    },
    {
        id: 3,
        title: "From Idea to Investment",
        description: "Pitch decks that turn heads and open wallets",
        image: "/images/article3.jpg",
        category: "Ads",
    },
    {
        id: 4,
        title: "Words That Close Deals",
        description: "Sharp, persuasive copy for high-stake pitches",
        image: "/images/article4.jpg",
        category: "VSLs",
    },
    {
        id: 5,
        title: "Make Every Slide Speak",
        description: "Clear, concise, and investor-ready messaging",
        image: "/images/article5.jpg",
        category: "Product",
    },
    {
        id: 6,
        title: "Crafting Decks That Convert",
        description: "Craft compelling stories that seal the deal",
        image: "/images/article6.jpg",
        category: "Books",
    },
    {
        id: 7,
        title: "Words That Close Deals",
        description: "Sharp, persuasive copy for high-stake pitches",
        image: "/images/article4.jpg",
        category: "Speeches",
    },
]

const socialMediaContent = [
    {
        id: 1,
        title: "LinkedIn Growth Strategy",
        description: "Build your professional network and authority",
        image: "/images/social1.jpg",
        category: "LinkedIn",
    },
    {
        id: 2,
        title: "Instagram Visual Stories",
        description: "Create engaging visual content that converts",
        image: "/images/social2.jpg",
        category: "Instagram",
    },
    {
        id: 3,
        title: "Facebook Ad Campaigns",
        description: "Drive traffic and sales with targeted ads",
        image: "/images/social3.jpg",
        category: "Facebook",
    },
    {
        id: 4,
        title: "Twitter Engagement",
        description: "Build community and drive conversations",
        image: "/images/social4.jpg",
        category: "Twitter",
    },
    {
        id: 5,
        title: "Content Documentation",
        description: "Organize and plan your content strategy",
        image: "/images/social5.jpg",
        category: "Documentation",
    },
    {
        id: 6,
        title: "Social Media Analytics",
        description: "Track performance and optimize results",
        image: "/images/social6.jpg",
        category: "LinkedIn",
    },
]

const copywritingContent = [
    {
        id: 1,
        title: "Email Marketing Campaigns",
        description: "Write emails that get opened and clicked",
        image: "/images/marketing1.jpg",
        category: "Email",
    },
    {
        id: 2,
        title: "Sales Page Copy",
        description: "Convert visitors into paying customers",
        image: "/images/marketing2.jpg",
        category: "Sales Pages",
    },
    {
        id: 3,
        title: "Website Copy",
        description: "Clear messaging that drives action",
        image: "/images/marketing3.jpg",
        category: "Website",
    },
    {
        id: 4,
        title: "Product Descriptions",
        description: "Compelling copy that sells products",
        image: "/images/marketing4.jpg",
        category: "Product",
    },
    {
        id: 5,
        title: "Blog Content",
        description: "Engaging articles that build authority",
        image: "/images/marketing5.jpg",
        category: "Blog",
    },
    {
        id: 6,
        title: "Brand Messaging",
        description: "Consistent voice across all channels",
        image: "/images/marketing6.jpg",
        category: "Branding",
    },
]

const filterCategories = ["All", "Landing pages", "Pitch decks", "Ads", "VSLs", "Product", "Books", "Speeches"]
const socialMediaCategories = ["All", "LinkedIn", "Instagram", "Facebook", "Twitter", "Documentation"]
const copywritingCategories = ["All", "Email", "Sales Pages", "Website", "Product", "Blog", "Branding"]

// Reusable Slider Component
function ProjectSlider({ title, articles, filterCategories, defaultFilter = "All", sectionId }) {
    const swiperRef = useRef()
    const [activeFilter, setActiveFilter] = useState(defaultFilter)

    // Filter articles based on selected category
    const filteredArticles =
        activeFilter === "All" ? articles : articles.filter((article) => article.category === activeFilter)

    return (
        <section className="w-full py-6">
            <div className="w-full">
                {/* Title and Navigation */}
                <div className="flex container mx-auto items-center justify-center lg:justify-between mb-4 lg:mb-8">
                    <div className="flex">
                        <h2 className="text-2xl lg:text-[40px] font-medium text-black">{title}</h2>
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

                {/* Filter Buttons */}
                <div className="container mx-auto mb-0">
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        {filterCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2 rounded-full text-[10px] lg:text-sm hover:cursor-pointer font-medium transition-all duration-300 ${activeFilter === category
                                    ? "bg-[#FDC0C5] text-black"
                                    : "bg-white text-gray-600 hover:bg-gray-100 border border-[#00000033]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
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
                                spaceBetween: 12, // Reduced from 0 to 12 for better mobile spacing
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 16, // Reduced from 24 to 16 for tablet
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
                        key={`${sectionId}-${activeFilter}`} // Force re-render when filter changes
                    >
                        {filteredArticles.map((article) => (
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

export default function MyProjects() {
    return (
        <div className="w-full">
            {/* Header - Only shown once at the top */}
            <div className="text-center lg:mb-8 pt-10 lg:pt-16">
                <div className="flex items-center justify-center gap-3 lg:mb-6">
                    <div className="w-1.5 lg:w-3 h-1.5 lg:h-3 bg-black rounded-full"></div>
                    <span className="text-[10px] md:text-base lg:text-xl font-medium tracking-[0.4em] uppercase text-black">
                        My Projects
                    </span>
                </div>
            </div>

            {/* Direct Response Copywriting Section */}
            <ProjectSlider
                title="Direct Response Copywriting"
                articles={articles}
                filterCategories={filterCategories}
                defaultFilter="All"
                sectionId="copywriting"
            />

            {/* Social Media Content Section */}
            <ProjectSlider
                title="Social Media Content"
                articles={socialMediaContent}
                filterCategories={socialMediaCategories}
                defaultFilter="All"
                sectionId="social-media"
            />

            {/* Copywriting Section */}
            <ProjectSlider
                title="Marketing Copywriting"
                articles={copywritingContent}
                filterCategories={copywritingCategories}
                defaultFilter="All"
                sectionId="copywriting-general"
            />
        </div>
    )
}
