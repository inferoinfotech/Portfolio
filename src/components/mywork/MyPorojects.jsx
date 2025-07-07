"use client"

import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { fadeUp, fadeIn } from "@/lib/framer-animations"

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
     link: "https://drive.google.com/drive/folders/1j0n0miLs100TfIp8evlJH4UnrfwmbMkb?usp=drive_link",
  },
  {
    id: 2,
    title: "Sell Your Vision with Words",
    description: "Powerful copy that makes investors say yes",
    image: "/images/article2.jpg",
    category: "Pitch decks",
     link: "https://drive.google.com/drive/folders/1FooMzukka3xbxnUTsL9Z4ZYfMm5lcszo?usp=drive_link",
  },
  {
    id: 3,
    title: "From Idea to Investment",
    description: "Pitch decks that turn heads and open wallets",
    image: "/images/article3.jpg",
    category: "Ads",
     link: "/projects/pitch-deck-1",
  },
  {
    id: 4,
    title: "Words That Close Deals",
    description: "Sharp, persuasive copy for high-stake pitches",
    image: "/images/article4.jpg",
    category: "VSLs",
      link: "/projects/pitch-deck-1",
  },
  {
    id: 5,
    title: "Make Every Slide Speak",
    description: "Clear, concise, and investor-ready messaging",
    image: "/images/article5.jpg",
    category: "Product",
    link: "/projects/pitch-deck-1",
  },
  {
    id: 6,
    title: "Crafting Decks That Convert",
    description: "Craft compelling stories that seal the deal",
    image: "/images/article6.jpg",
    category: "Books",
    link: "/projects/pitch-deck-1",
  },
  {
    id: 7,
    title: "Words That Close Deals",
    description: "Sharp, persuasive copy for high-stake pitches",
    image: "/images/article4.jpg",
    category: "Speeches",
    link: "/projects/pitch-deck-1",
  },
]

const socialMediaContent = [
  {
    id: 1,
    title: "LinkedIn Growth Strategy",
    description: "Build your professional network and authority",
    image: "/images/social1.jpg",
    category: "LinkedIn",
     link: "/projects/pitch-deck-1",
  },
  {
    id: 2,
    title: "Instagram Visual Stories",
    description: "Create engaging visual content that converts",
    image: "/images/social2.jpg",
    category: "Instagram",
    link: "/projects/pitch-deck-1",
  },
  {
    id: 3,
    title: "Facebook Ad Campaigns",
    description: "Drive traffic and sales with targeted ads",
    image: "/images/social3.jpg",
    category: "Facebook",
    link: "/projects/pitch-deck-1",
  },
  {
    id: 4,
    title: "Twitter Engagement",
    description: "Build community and drive conversations",
    image: "/images/social4.jpg",
    category: "Twitter",
    link: "/projects/pitch-deck-1",
  },
  {
    id: 5,
    title: "Content Documentation",
    description: "Organize and plan your content strategy",
    image: "/images/social5.jpg",
    category: "Documentation",
    link: "/projects/pitch-deck-1",
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description: "Track performance and optimize results",
    image: "/images/social6.jpg",
    category: "LinkedIn",
    link: "/projects/pitch-deck-1",
  },
]

const copywritingContent = [
  {
    id: 1,
    title: "Email Marketing Campaigns",
    description: "Write emails that get opened and clicked",
    image: "/images/marketing1.jpg",
    category: "Email",
     link: "/projects/pitch-deck-1",
  },
  {
    id: 2,
    title: "Sales Page Copy",
    description: "Convert visitors into paying customers",
    image: "/images/marketing2.jpg",
    category: "Sales Pages",
     link: "/projects/pitch-deck-1",
  },
  {
    id: 3,
    title: "Website Copy",
    description: "Clear messaging that drives action",
    image: "/images/marketing3.jpg",
    category: "Website",
     link: "/projects/pitch-deck-1",
  },
  {
    id: 4,
    title: "Product Descriptions",
    description: "Compelling copy that sells products",
    image: "/images/marketing4.jpg",
    category: "Product",
     link: "/projects/pitch-deck-1",
  },
  {
    id: 5,
    title: "Blog Content",
    description: "Engaging articles that build authority",
    image: "/images/marketing5.jpg",
    category: "Blog",
     link: "/projects/pitch-deck-1",
  },
  {
    id: 6,
    title: "Brand Messaging",
    description: "Consistent voice across all channels",
    image: "/images/marketing6.jpg",
    category: "Branding",
     link: "/projects/pitch-deck-1",
  },
]

const filterCategories = ["All", "Landing pages", "Pitch decks", "Ads", "VSLs", "Product", "Books", "Speeches"]
const socialMediaCategories = ["All", "LinkedIn", "Instagram", "Facebook", "Twitter", "Documentation"]
const copywritingCategories = ["All", "Email", "Sales Pages", "Website", "Product", "Blog", "Branding"]

function ProjectSlider({ title, articles, filterCategories, defaultFilter = "All", sectionId }) {
  const swiperRef = useRef()
  const [activeFilter, setActiveFilter] = useState(defaultFilter)

  const filteredArticles =
    activeFilter === "All" ? articles : articles.filter((article) => article.category === activeFilter)

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full py-6"
    >
      <div className="w-full">
        {/* Title and Navigation */}
        <motion.div
          variants={fadeUp}
          className="flex max-w-container w-full mx-auto items-center justify-center lg:justify-between mb-4 lg:mb-8"
        >
          <div className="flex">
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl lg:text-4xl 2xl:text-[40px] font-medium md:ps-5 2xl:ps-0 text-black"
            >
              {title}
            </motion.h2>
          </div>
          {/* Navigation arrows */}
          <motion.div variants={fadeUp} transition={{ delay: 0.1 }} className="hidden px-5 lg:flex gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full bg-black hover:cursor-pointer text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full bg-black text-white hover:cursor-pointer flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="max-w-container w-full mx-auto md:px-5 2xl:px-0 mb-0">
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {filterCategories.map((category, index) => (
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
        <div className="relative max-w-container mx-auto w-full">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={12}
            slidesPerView={1.2}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet custom-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 1.8,
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
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4.5,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 5.5,
                spaceBetween: 24,
              },
            }}
            className="articles-swiper !pb-16 !pt-12 !px-5 2xl:!px-0"
            key={`${sectionId}-${activeFilter}`}
          >
            {filteredArticles.map((article, index) => (
              <SwiperSlide key={article.id}>
                <div className="w-full max-w-[280px] mx-auto cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="rounded-[20px] lg:rounded-[30px] overflow-hidden transform transition-all duration-300"
                  >
                    {/* Image Section */}
                    <div className="relative h-[230px] lg:h-[280px] w-full rounded-[20px] lg:rounded-[30px]">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full rounded-[20px] lg:rounded-[30px] object-cover"
                      />
                      {/* Arrow Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="absolute bottom-2 right-2 w-10 h-[46px] bg-black rounded-tr-lg rounded-bl-lg rounded-tl-lg rounded-br-3xl flex items-center justify-center backdrop-blur-sm"
                        onClick={() => article.link && (window.location.href = article.link)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && article.link) {
                            window.location.href = article.link
                          }
                        }}
                      >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4">
                      <motion.h3
                        whileHover={{ color: "#FDC0C5" }}
                        className="text-black font-medium text-base sm:text-lg md:text-xl mb-2 leading-tight"
                      >
                        {article.title}
                      </motion.h3>
                      <p className="text-[#00000080] text-sm sm:text-base md:text-[15px] leading-4">
                        {article.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  )
}

export default function MyProjects() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="w-full">
      {/* Header - Only shown once at the top */}
      <motion.div variants={fadeUp} className="text-center lg:mb-8 pt-10 lg:pt-20">
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 lg:mb-6">
          <div className="w-1.5 lg:w-3 h-1.5 lg:h-3 bg-black rounded-full"></div>
          <span className="text-[10px] md:text-base lg:text-xl font-medium tracking-[0.4em] uppercase text-black">
            My Projects
          </span>
        </motion.div>
      </motion.div>

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
    </motion.div>
  )
}
