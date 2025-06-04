"use client"

import { Clock } from "lucide-react"
import Link from "next/link" // Import Link

// Sample articles data
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
        categoryColor: "bg-[# B76B00]",
        image: "/images/article7.jpg",
        date: "February 24, 2025",
        featured: false,
    },
    {
        id: 3,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "Self Growth",
        categoryColor: "bg-[#004B88] ",
        image: "/images/article8.jpg",
        date: "5h 5min ago",
        featured: false,
    },
    {
        id: 4,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "Social media",
        categoryColor: "bg-[#580043]",
        image: "/images/article9.jpg",
        date: "5h 5min ago",
        featured: false,
    },
]

export default function MoreBlogSection() {
    const featuredArticle = topArticles.find((article) => article.featured)
    const regularArticles = topArticles.filter((article) => !article.featured)

    return (
        <section className="py-16 px-4 lg:px-8 bg-black text-white">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex justify-center pt-10 pb-24">
                    <div className="flex items-center gap-6">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <h2 className="text-xl font-medium tracking-[7] uppercase">More Blogs</h2>
                    </div>
                </div>
                {/* Featured Article */}
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
                            <div className="relative h-64 rounded-[30px] overflow-hidden">
                                <img
                                    src={article.image || "/placeholder.svg"}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="mb-3">
                                        <span className={`${article.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                                            {article.category}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{article.title}</h3>
                                    <p className="text-gray-300 text-sm">{article.date}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}