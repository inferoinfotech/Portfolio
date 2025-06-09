"use client"

import { Clock } from "lucide-react"

// Sample blog data
const latestBlogs = [
    {
        id: 1,
        title: "Pirate ipsum arrgh bounty warp jack. Or lass landlubber spanker dead league coast.",
        category: "MINDSET",
        image: "/images/blog5.jpg",
        readTime: "5h 5min ago",
        featured: true,
    },
    {
        id: 2,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "MINDSET",
        image: "/images/blog6.jpg",
        readTime: "5h 5min ago",
        featured: false,
    },
    {
        id: 3,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "MINDSET",
        image: "/images/blog7.jpg",
        readTime: "5h 5min ago",
        featured: false,
    },
]

export default function LatestBlogsSection() {
    const featuredBlog = latestBlogs.find((blog) => blog.featured)
    const regularBlogs = latestBlogs.filter((blog) => !blog.featured)

    return (
        <section className="py-10 lg:py-16 px-4 lg:px-8">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center gap-3">
                        <div className="lg:w-3 lg:h-3 w-1.5 h-1.5 bg-black rounded-full"></div>
                        <h2 className="text-[10px] md:text-base lg:text-xl font-medium tracking-[5] xl:tracking-[10] uppercase text-black">Latest Blogs</h2>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-3 gap-8 mb-20">
                        {/* Featured Blog - Large */}
                        <div className="col-span-3">
                            <div className="bg-[#F9F9F9] rounded-[30px] overflow-hidden group cursor-pointer" style={{
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                            }}>
                                <div className="flex">
                                    {/* Image */}
                                    <div className="w-1/2">
                                        <div className="relative h-[480px] rounded-[30px] overflow-hidden">
                                            <img
                                                src={featuredBlog?.image || "/placeholder.svg"}
                                                alt={featuredBlog?.title}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="w-1/2 p-16 flex flex-col gap-6 justify-center">
                                        <span className="text-xl font-normal text-[#656565] ibmPlexMono uppercase  mb-4 block">
                                            {featuredBlog?.category}
                                        </span>
                                        <h3 className="text-5xl font-bold text-black mb-6 leading-12">{featuredBlog?.title}</h3>
                                        <div className="flex items-center gap-2 text-[#21212180] font-normal text-sm">
                                            <Clock className="w-4 h-4" />
                                            <span>{featuredBlog?.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small Blog Cards */}
                    <div className="grid grid-cols-2 gap-8">
                        {regularBlogs.map((blog, index) => (
                            <div key={blog.id} className="group cursor-pointer">
                                {index === 0 ? (
                                    // First card: Image top, content below with background
                                    <>
                                        <div className="relative h-64 rounded-t-[30px] overflow-hidden">
                                            <img
                                                src={blog.image || "/placeholder.svg"}
                                                alt={blog.title}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="bg-[#F9F9F9] rounded-b-[30px] p-9 shadow-xs">
                                            <div className="mb-6">
                                                <span className="bg-black text-white px-3 py-1 rounded-full text-[10px] font-medium uppercase">
                                                    {blog.category}
                                                </span>
                                            </div>
                                            <h3 className="text-4xl mb-6 font-bold text-black max-w-md leading-8">{blog.title}</h3>
                                            <div className="flex items-center gap-2 text-[#26262680] text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>{blog.readTime}</span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    // Second card: Content overlaid on image
                                    <div className="relative h-[480px] rounded-[30px] overflow-hidden">
                                        <img
                                            src={blog.image || "/placeholder.svg"}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <div className="mb-4">
                                                <span className="bg-pink-400 text-white px-3 py-1 rounded-full text-xs font-medium uppercase">
                                                    {blog.category}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{blog.title}</h3>
                                            <div className="flex items-center gap-2 text-white/80 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>{blog.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden space-y-6">
                    {/* Featured Blog (1st Blog) */}
                    <div
                        className="group cursor-pointer rounded-[30px]"
                        style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}
                    >
                        <div className="relative h-48 rounded-[30px] overflow-hidden mb-4">
                            <img
                                src={featuredBlog?.image || "/placeholder.svg"}
                                alt={featuredBlog?.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="rounded-[30px] p-6">
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 block">
                                {featuredBlog?.category}
                            </span>
                            <h3 className="text-xl font-bold text-black mb-4 leading-tight">{featuredBlog?.title}</h3>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <Clock className="w-4 h-4" />
                                <span>{featuredBlog?.readTime}</span>
                            </div>
                        </div>
                    </div>

                    {/* Small Blog Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Second Blog - Same style as the first */}
                        {regularBlogs[0] && (
                            <div
                                className="group cursor-pointer rounded-[20px] col-span-1"
                                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}
                            >
                                <div className="relative h-32 rounded-[20px] overflow-hidden mb-3">
                                    <img
                                        src={regularBlogs[0].image || "/placeholder.svg"}
                                        alt={regularBlogs[0].title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="rounded-[20px] p-4">
                                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                                        {regularBlogs[0].category}
                                    </span>
                                    <h3 className="text-sm font-bold text-black mb-2 leading-tight">{regularBlogs[0].title}</h3>
                                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                                        <Clock className="w-3 h-3" />
                                        <span>{regularBlogs[0].readTime}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Third Blog - Image with overlayed content */}
                        {regularBlogs[1] && (
                            <div className="relative rounded-[20px] overflow-hidden h-64 group cursor-pointer col-span-1">
                                <img
                                    src={regularBlogs[1].image || "/placeholder.svg"}
                                    alt={regularBlogs[1].title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-4 py-6 flex flex-col justify-end text-white">
                                    <span className="bg-white text-black px-2 py-1 rounded-full text-xs font-medium uppercase w-max mb-2">
                                        {regularBlogs[1].category}
                                    </span>
                                    <h3 className="text-sm sm:text-base font-bold leading-tight mb-2">
                                        {regularBlogs[1].title}
                                    </h3>
                                    <div className="flex items-center gap-1 text-xs text-white/80">
                                        <Clock className="w-3 h-3" />
                                        <span>{regularBlogs[1].readTime}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
