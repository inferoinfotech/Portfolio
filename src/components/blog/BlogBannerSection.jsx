"use client"

import { useState } from "react"

// Sample blog data
const blogData = [
    {
        id: 1,
        title: "Be someone that everyone just thinks to be",
        excerpt:
            "Pirate ipsum arrgh bounty warp jack. Fathom belaying lass guns execution run six fluke. Jennys of hands seven bilged tails bow. Art blossom cog me cog brethren. Prey jennys gaff bilged swab schooner belaying.",
        category: "PERSONAL",
        subcategory: "GROWTH",
        topic: "Personal",
        image: "/images/blog1.jpg",
        featured: true,
    },
    {
        id: 2,
        title: "Need for 8-hour sleep",
        excerpt: "Pirate ipsum arrgh bounty warp jack belaying lass guns. run six",
        category: "HEALTH",
        topic: "Health",
        image: "/images/blog2.jpg",
        featured: false,
    },
    {
        id: 3,
        title: "Latest tech-stacks 2025",
        excerpt: "Pirate ipsum arrgh bounty warp jack belaying lass guns. run six",
        category: "TECHNOLOGY",
        topic: "Technology",
        image: "/images/blog3.jpg",
        featured: false,
    },
    {
        id: 4,
        title: "Why we fail ?",
        excerpt: "Pirate ipsum arrgh bounty warp jack belaying lass guns. run six",
        category: "MINDSET",
        topic: "Mindset",
        image: "/images/blog4.jpg",
        featured: false,
    },
    {
        id: 5,
        title: "Building wealth in 2025",
        excerpt: "Pirate ipsum arrgh bounty warp jack belaying lass guns. run six",
        category: "WEALTH",
        topic: "Wealth",
        image: "/images/blog4.jpg",
        featured: false,
    },
    {
        id: 6,
        title: "Business growth strategies",
        excerpt: "Pirate ipsum arrgh bounty warp jack belaying lass guns. run six",
        category: "BUSINESS",
        topic: "Business",
        image: "/images/blog3.jpg",
        featured: false,
    },
    {
        id: 7,
        title: "Life balance techniques",
        excerpt: "Pirate ipsum arrgh bounty warp jack belaying lass guns. run six",
        category: "LIFE",
        topic: "Life",
        image: "/images/blog2.jpg",
        featured: false,
    },
    {
        id: 8,
        title: "Mental health awareness",
        excerpt: "Pirate ipsum arrgh bounty warp jack belaying lass guns. run six",
        category: "HEALTH",
        topic: "Health",
        image: "/images/blog1.jpg",
        featured: false,
    },
]

const topics = ["All Topics", "Mindset", "Health", "Personal", "Business", "Wealth", "Technology", "Life"]

export default function BlogBannerSection() {
    const [selectedTopic, setSelectedTopic] = useState("All Topics")

    // Filter blogs based on selected topic
    const getFilteredBlogs = () => {
        const filtered = selectedTopic === "All Topics" ? blogData : blogData.filter((blog) => blog.topic === selectedTopic)

        // Always return exactly 4 blogs (1 featured + 3 regular)
        const featuredBlog = filtered.find((blog) => blog.featured) || filtered[0]
        const regularBlogs = filtered.filter((blog) => blog.id !== featuredBlog.id).slice(0, 3)

        // If we don't have enough blogs, fill with other blogs
        while (regularBlogs.length < 3) {
            const remainingBlogs = blogData.filter(
                (blog) => blog.id !== featuredBlog.id && !regularBlogs.find((rb) => rb.id === blog.id),
            )
            if (remainingBlogs.length > 0) {
                regularBlogs.push(remainingBlogs[regularBlogs.length % remainingBlogs.length])
            } else {
                break
            }
        }

        return { featured: featuredBlog, regular: regularBlogs.slice(0, 3) }
    }

    const { featured, regular } = getFilteredBlogs()

    return (
        <section className="min-h-screen bg-black text-white flex flex-col">
            <div className="flex-1 px-4 lg:px-8 py-8 lg:py-12 lg:pt-20">
                <div className="container mx-auto h-full flex flex-col">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 lg:mb-12">
                        {/* Title */}
                        <div className="mb-6 lg:mb-0">
                            <h1 className="text-4xl lg:text-5xl xl:text-[100px] text-center lg:text-start font-medium leading-none">
                                Creativity at
                                <br />
                                your <span className="text-[#FDC0C5]">disposal</span>
                            </h1>
                        </div>

                        {/* Topic Filters */}
                        <div className="flex flex-wrap gap-3 lg:gap-4 lg:max-w-xs justify-center lg:justify-end">
                            {topics.map((topic) => (
                                <button
                                    key={topic}
                                    onClick={() => setSelectedTopic(topic)}
                                    className={`px-5 py-1.5 rounded-full hover:cursor-pointer border border-[#333333] text-[15px] font-medium transition-all duration-300  flex-shrink-0 ${selectedTopic === topic
                                        ? "bg-[#333333] text-white"
                                        : "bg-black text-white hover:bg-[#333333]/50"
                                        }`}
                                >
                                    {topic}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
                        {/* Featured Blog - Large */}
                        <div className="xl:col-span-2 relative group cursor-pointer">
                            <div className="relative h-64 lg:h-[550px] rounded-[30px] overflow-hidden">
                                <img
                                    src={featured.image || "/placeholder.svg"}
                                    alt={featured.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 max-w-2xl">
                                    <div className="flex gap-2 mb-4">
                                        <span className="text-[10px] font-medium text-[#D7D7D7] uppercase">
                                            {featured.category}
                                        </span>
                                        {featured.subcategory && (
                                            <>
                                                <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                    {featured.subcategory}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                    <h2 className="text-2xl lg:text-[40px] text-white font-medium mb-3 leading-10">{featured.title}</h2>
                                    <p className="text-[#888888] text-sm lg:text-xl font-normal leading-tight line-clamp-3">{featured.excerpt}</p>
                                </div>
                            </div>
                        </div>

                        {/* Small Blog Cards */}
                        <div className="space-y-4 lg:space-y-6">
                            {regular.map((blog) => (
                                <div key={blog.id} className="group cursor-pointer">
                                    <div className="flex gap-4 h-32 lg:h-36">
                                        {/* Image */}
                                        <div className="w-32 lg:w-60 flex-shrink-0">
                                            <div className="relative h-full rounded-[30px] overflow-hidden">
                                                <img
                                                    src={blog.image || "/placeholder.svg"}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 flex flex-col justify-center py-2">
                                            <span className="text-[10px] font-normal text-[#D7D7D7] uppercase tracking-wider mb-2 block">
                                                {blog.category}
                                            </span>
                                            <h3 className="text-lg lg:text-2xl font-medium mb-2  text-white">{blog.title}</h3>
                                            <p className="text-[#888888] text-[15px] line-clamp-2">{blog.excerpt}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
