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
} from '@/lib/framer-animations';

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

export default function FinalCTASection() {
  const featuredArticle = topArticles.find((article) => article.featured)
  const regularArticles = topArticles.filter((article) => !article.featured)
  
  return (
    <>
      <section className="w-full bg-black py-8 md:py-16 hidden md:block">
        <div className="container mx-auto md:px-6">
          {/* Main CTA */}
          <motion.div 
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-[30px] overflow-hidden mb-6 md:mb-8 h-[300px] md:h-[400px] lg:h-[598px]"
          >
            <div className="relative w-full h-full overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/work-video.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <motion.div 
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center z-10 px-4"
                >
                  <motion.h2 
                    variants={fadeUp}
                    className="text-white text-2xl cursor-pointer md:text-4xl lg:text-5xl xl:text-[64px] font-bold mb-6 md:mb-8"
                  >
                    Let's build something together
                  </motion.h2>
                  <motion.button 
                    variants={fadeUp}
                    transition={{ delay: 0.1 }}
                    className="backdrop-blur-[40px] cursor-pointer bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,_255,_255,_0.4)_89.2%)] text-white px-6 md:px-11 py-7 rounded-full font-normal text-sm md:text-[25px] hover:opacity-90 transition-opacity"
                  >
                    Let's have a Free call
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTAs - Stack on mobile */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8"
          >
            {/* First Card */}
            <motion.div
              variants={slideInLeft}
              className="relative rounded-[30px] overflow-hidden bg-cover bg-center h-[250px] md:h-[300px] lg:h-[378px]"
              style={{ backgroundImage: "url('../images/work-img-1.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center px-6 md:px-10">
                <motion.div variants={fadeIn}>
                  <motion.h3 variants={fadeUp} className="text-white text-2xl md:text-3xl lg:text-[40px] font-bold mb-2">Change the system</motion.h3>
                  <motion.p variants={fadeUp} transition={{ delay: 0.1 }} className="text-white/70 mb-4 md:mb-6 text-base md:text-lg lg:text-[20px] font-normal">
                    Giving best services across the globe
                  </motion.p>
                  <motion.button 
                    variants={fadeUp}
                    transition={{ delay: 0.2 }}
                    className="backdrop-blur-[40px] cursor-pointer bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,255,255,0.4)_89.2%)] text-white px-6 md:px-10 py-6 rounded-full font-normal text-[20px] hover:opacity-90 transition-opacity"
                  >
                    Meet Saleh Bilal
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Second Card */}
            <motion.div
              variants={slideInRight}
              className="relative rounded-[30] overflow-hidden h-[250px] md:h-[300px] lg:h-[378px] bg-cover bg-center"
              style={{ backgroundImage: "url('../images/work-img-2.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center px-6 md:px-10">
                <motion.div variants={fadeIn}>
                  <motion.h3 variants={fadeUp} className="text-white text-2xl md:text-3xl lg:text-[40px] font-bold mb-2">Time to level up</motion.h3>
                  <motion.p variants={fadeUp} transition={{ delay: 0.1 }} className="text-white/70 mb-4 md:mb-6 text-base md:text-lg lg:text-[20px] font-normal">
                    Giving best services across the globe
                  </motion.p>
                  <motion.button 
                    variants={fadeUp}
                    transition={{ delay: 0.2 }}
                    className="backdrop-blur-[40px] cursor-pointer bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,255,255,0.4)_89.2%)] text-white px-6 md:px-12 py-6 rounded-full font-normal text-[20px] hover:opacity-90 transition-opacity"
                  >
                    Visit portfolio
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Desktop screen visible */}

      {/* Mobile screen visible  */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-4 lg:px-8 bg-black text-white md:hidden lg:hidden"
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
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-bold mb-4">Top blogs</motion.h2>
            <motion.p variants={fadeUp} transition={{ delay: 0.1 }} className="text-white text-sm lg:text-xl max-w-sm mx-auto">
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
                <div className="relative h-[660px] lg:h-[790px] rounded-[30px] overflow-hidden">
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
                    <motion.div variants={fadeUp} className="mb-4">
                      <span
                        className={`${featuredArticle?.categoryColor} text-white px-4 py-2 rounded-full text-xs lg:text-2xl font-normal`}
                      >
                        {featuredArticle?.category}
                      </span>
                    </motion.div>
                    <motion.h3 variants={fadeUp} transition={{ delay: 0.1 }} className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-12">
                      {featuredArticle?.title}
                    </motion.h3>
                    <motion.p variants={fadeUp} transition={{ delay: 0.2 }} className="text-[#DFDFDF] text-md lg:text-xl">{featuredArticle?.date}</motion.p>
                  </motion.div>
                </div>
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
              <motion.div key={article.id} variants={fadeUp}>
                <Link href={`/blog/${article.id}`} className="group cursor-pointer block">
                  <div className="relative h-[425px] rounded-[30px] overflow-hidden">
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
                      <h3 className="text-2xl font-bold text-white mb-3 ">{article.title}</h3>
                      <p className="text-gray-300 text-sm flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {article.date}
                      </p>
                    </div>
                  </div>
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
                  <div className="relative h-[660px] rounded-[30px] overflow-hidden">
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
                      <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{article.title}</h3>
                      <p className="text-gray-300 text-sm">{article.date}</p>
                    </div>
                  </div>
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
            <button className="bg-white text-black lg:px-8 lg:py-3 px-20 py-6 text-[22px] lg:text-xl rounded-full font-medium hover:bg-gray-200 hover:cursor-pointer transition-colors">
              View all
            </button>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}