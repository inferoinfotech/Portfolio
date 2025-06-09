"use client"

import { Clock } from "lucide-react"
import Link from "next/link"
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
        <div className="container mx-auto  md:px-6">
          {/* Main CTA */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden mb-6 md:mb-8 h-[300px] md:h-[400px] lg:h-[598px]">
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
                <div className="text-center z-10 px-4">
                  <h2 className="text-white text-2xl cursor-pointer md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8">
                    Let's build something together
                  </h2>
                  <button className="backdrop-blur-[40px] cursor-pointer bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,255,255,0.4)_89.2%)] text-white px-6 md:px-9 py-3 rounded-full font-normal text-sm md:text-base hover:opacity-90 transition-opacity">
                    Let's have a Free call
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTAs - Stack on mobile */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8">
            {/* First Card */}
            <div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-cover bg-center h-[250px] md:h-[300px] lg:h-[378px]"
              style={{ backgroundImage: "url('../images/work-img-1.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center px-6 md:px-10">
                <div>
                  <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Change the system</h3>
                  <p className="text-white/70 mb-4 md:mb-6 text-base md:text-lg lg:text-[20px] font-normal">
                    Giving best services across the globe
                  </p>
                  <button className="backdrop-blur-[40px] cursor-pointer bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,255,255,0.4)_89.2%)] text-white px-6 md:px-9 py-3 rounded-full font-normal text-sm md:text-base hover:opacity-90 transition-opacity">
                    Meet Saleh Bilal
                  </button>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[250px] md:h-[300px] lg:h-[378px] bg-cover bg-center"
              style={{ backgroundImage: "url('../images/work-img-2.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center px-6 md:px-10">
                <div>
                  <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Time to level up</h3>
                  <p className="text-white/70 mb-4 md:mb-6 text-base md:text-lg lg:text-[20px] font-normal">
                    Giving best services across the globe
                  </p>
                  <button className="backdrop-blur-[40px] cursor-pointer bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,255,255,0.4)_89.2%)] text-white px-6 md:px-9 py-3 rounded-full font-normal text-sm md:text-base hover:opacity-90 transition-opacity">
                    Visit portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Desktop screen visible */}

      {/* Mobile screen visible  */}
      <section className="py-16 px-4 lg:px-8 bg-black text-white md:hidden lg:hidden">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Top blogs</h2>
            <p className="text-white text-sm lg:text-xl max-w-sm mx-auto">
              Read by over 200+ readers globally as I help them for a successful career
            </p>
          </div>

          {/* Featured Article */}
          <div className="mb-8 lg:mb-12">
            {featuredArticle && ( // Ensure featuredArticle exists before rendering
              <Link href={`/blog/${featuredArticle.id}`} className="group cursor-pointer block"> {/* Added Link */}
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
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-20">
                    <div className="mb-4">
                      <span
                        className={`${featuredArticle?.categoryColor} text-white px-4 py-2 rounded-full text-xs lg:text-2xl font-normal`}
                      >
                        {featuredArticle?.category}
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-12">
                      {featuredArticle?.title}
                    </h3>
                    <p className="text-[#DFDFDF] text-md lg:text-xl">{featuredArticle?.date}</p>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Desktop Layout - 3 articles in a row */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:mb-12">
            {regularArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.id}`} className="group cursor-pointer block"> {/* Added Link */}
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
            ))}
          </div>

          {/* Mobile Layout - 3 articles stacked vertically */}
          <div className="lg:hidden space-y-6 mb-8">
            {regularArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.id}`} className="group cursor-pointer block"> {/* Added Link */}
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
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button className="bg-white text-black lg:px-8 lg:py-3 px-20 py-6 text-[22px] lg:text-xl rounded-full font-medium hover:bg-gray-200 hover:cursor-pointer transition-colors">
              View all
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
