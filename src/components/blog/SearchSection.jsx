"use client"

import { useState } from "react"
import { Search, Clock } from "lucide-react"

// Sample search content
const searchContent = [
    {
        id: 1,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "MINDSET",
        image: "/images/blog7.jpg",
        gradient: "from-pink-400 via-purple-400 to-blue-500",
        timestamp: "5h 5min ago",
        size: "large",
    },
    {
        id: 2,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "MINDSET",
        image: "/images/blog6.jpg",
        gradient: "from-yellow-400 to-yellow-500",
        timestamp: "5h 5min ago",
        size: "large",
    },
    {
        id: 3,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "MINDSET",
        image: "/images/blog8.jpg",
        gradient: "from-gray-800 to-gray-900",
        timestamp: "5h 5min ago",
        size: "small",
    },
    {
        id: 4,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "MINDSET",
        image: "/images/blog9.jpg",
        gradient: "from-gray-700 to-gray-900",
        timestamp: "5h 5min ago",
        size: "small",
    },
    {
        id: 5,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "MINDSET",
        image: "/images/blog10.jpg",
        gradient: "from-gray-100 to-gray-200",
        timestamp: "5h 5min ago",
        size: "small",
    },
]

export default function SearchSection() {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <section className="py-16 relative px-4 lg:px-8 bg-gray-50">
            {/* Linear Gradient Overlay - Higher z-index */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: `linear-gradient(180deg, 
      rgba(255, 255, 255, 0) 0%, 
      rgba(255, 255, 255, 0.6) 52.14%, 
      rgba(255, 255, 255, 0.98) 86%)`,
                }}
            ></div>

            <div className="container mx-auto">
                {/* Header and Search */}
                <div className="mb-12">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-normal text-black mb-8 lg:mb-12 leading-tight">
                        Looking for something in particular?
                    </h2>

                    {/* Search Input */}
                    <div className="relative z-10">
                        <input
                            type="text"
                            placeholder="Start typing..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full py-3 lg:py-4 px-0 text-base md:text-xl lg:text-3xl bg-transparent border-0 border-b-4 border-black focus:outline-none focus:border-black placeholder-[#8A8A8A]"
                        />
                        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2">
                            <Search className="w-6 h-6 text-black" />
                        </button>
                    </div>
                </div>

                {/* Content Grid - Desktop Only */}
                <div className="hidden lg:mt-40 lg:block">
                    {/* Top Row - Large Cards */}
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        {searchContent
                            .filter((item) => item.size === "large")
                            .map((item) => (
                                <div key={item.id} className="group cursor-pointer">
                                    <div className={`relative h-[425px] rounded-[30px] overflow-hidden bg-gradient-to-br ${item.gradient}`}>
                                        <img
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                                        {/* Content Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <div className="mb-3">
                                                <span className="text-[#D7D7D7] text-[10px] font-normal uppercase">
                                                    {item.category}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-3 max-w-xs leading-7">{item.title}</h3>
                                            <div className="flex items-center gap-2 text-white/80 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.timestamp}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Bottom Row - Small Cards */}
                    <div className="grid grid-cols-3 gap-8">
                        {searchContent
                            .filter((item) => item.size === "small")
                            .map((item) => (
                                <div key={item.id} className="group cursor-pointer">
                                    <div className={`relative h-[425px] rounded-[30px] overflow-hidden bg-gradient-to-br ${item.gradient}`}>
                                        <img
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                                        {/* Content Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <div className="mb-3">
                                                <span className="text-[#D7D7D7] text-[10px] font-normal uppercase">
                                                    {item.category}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-3 max-w-xs leading-7">{item.title}</h3>
                                            <div className="flex items-center gap-2 text-white/80 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.timestamp}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
