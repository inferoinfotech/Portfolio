"use client"

import { Clock } from "lucide-react"

// Sample blog data for the 6-blog grid
const gridBlogs = [
    {
        id: 1,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "MINDSET",
        image: "/images/blog8.jpg",
        readTime: "5h 5min ago",
    },
    {
        id: 2,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "MINDSET",
        image: "/images/blog9.jpg",
        readTime: "5h 5min ago",
    },
    {
        id: 3,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "MINDSET",
        image: "/images/blog10.jpg",
        readTime: "5h 5min ago",
    },
    {
        id: 4,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "MINDSET",
        image: "/images/blog11.jpg",
        readTime: "5h 5min ago",
    },
    {
        id: 5,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "MINDSET",
        image: "/images/blog12.jpg",
        readTime: "5h 5min ago",
    },
    {
        id: 6,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "MINDSET",
        image: "/images/blog13.jpg",
        readTime: "5h 5min ago",
    },
]

export default function BlogGridSection() {
    return (
        <section className="py-16 px-4 lg:px-8 bg-gray-50">
            <div className="container mx-auto">
                {/* Desktop Layout - 6 blogs in 3x2 grid */}
                <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
                    {gridBlogs.map((blog) => (
                        <div key={blog.id} className="group cursor-pointer">
                            <div className="relative h-[400px] rounded-[30px] overflow-hidden">
                                <img
                                    src={blog.image || "/placeholder.svg"}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="mb-4">
                                        <span className="bg-white text-black px-3 py-1 rounded-full text-[10px] font-normal uppercase">
                                            {blog.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 max-w-xs leading-tight">{blog.title}</h3>
                                    <div className="flex items-center font-normal gap-2 text-white/50 text-sm">
                                        <Clock className="w-4 h-4" />
                                        <span>{blog.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Layout - Only 2 blogs side by side */}
                <div className="lg:hidden grid grid-cols-2 gap-4">
                    {gridBlogs.slice(0, 2).map((blog) => (
                        <div key={blog.id} className="group cursor-pointer">
                            <div className="relative h-80 rounded-[30px] overflow-hidden">
                                <img
                                    src={blog.image || "/placeholder.svg"}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <div className="mb-3">
                                        <span className="bg-white text-black px-2 py-1 rounded-full text-xs font-medium uppercase">
                                            {blog.category}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{blog.title}</h3>
                                    <div className="flex items-center gap-1 text-white/80 text-xs">
                                        <Clock className="w-3 h-3" />
                                        <span>{blog.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
