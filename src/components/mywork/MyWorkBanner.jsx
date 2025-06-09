"use client"

// Sample images for the grid
const images = [
    { src: "/images/work1.jpg", alt: "People laughing" },
    { src: "/images/work2.jpg", alt: "Sunset reflection" },
    { src: "/images/work3.jpg", alt: "Couple in nature" },
    { src: "/images/work4.jpg", alt: "Bubble crowd" },
    { src: "/images/work5.jpg", alt: "Campfire group" },
    { src: "/images/work6.jpg", alt: "Beach side" },
    { src: "/images/work7.jpg", alt: "Father and daughter" },
    { src: "/images/work8.jpg", alt: "Studying together" },
    { src: "/images/work9.jpg", alt: "People on pier" },
    { src: "/images/work10.jpg", alt: "Stairs and shadow" },
    { src: "/images/work11.jpg", alt: "Building light" },
    { src: "/images/work12.jpg", alt: "Wall & stairs" },
    { src: "/images/work13.jpg", alt: "Creative workspace" },
    { src: "/images/work14.jpg", alt: "Team collaboration" },
    { src: "/images/work15.jpg", alt: "Modern office" },
    { src: "/images/work16.jpg", alt: "Digital innovation" },
]

export default function MyWorkBanner() {
    return (
        <div className="w-full overflow-hidden">
            {/* Stack on mobile, grid on larger screens */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-screen">
                {/* Left Content */}
                <div className="flex items-center justify-center bg-black text-white py-16 lg:py-0">
                    <div className="w-full max-w-2xl mx-auto text-center lg:text-start px-8 lg:px-12">
                        {/* Header with dot */}
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                            <div className="lg:w-3 lg:h-3  w-1.5 h-1.5 bg-white rounded-full"></div>
                            <span className="text-2xl font-medium tracking-wider">My work</span>
                        </div>

                        {/* Main heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-center lg:text-start leading-tight mb-12">
                            Have worked for a community of tech
                            giants with global
                            <span className="text-[#FDC0C5]"> influence</span>
                        </h1>

                        {/* CTA Button */}
                        <button className="bg-white hover:cursor-pointer text-black px-12 py-6 tracking-tight rounded-full font-medium text-[22px] hover:bg-gray-100 transition-colors">
                            Meet Saleh Bilal
                        </button>
                    </div>
                </div>

                {/* Right Images - Masonry Grid */}
                <div className="bg-white min-h-[60vh] hidden lg:block lg:h-[114vh] overflow-hidden relative">
                    {/* Hide on small screens, show on medium+ */}
                    <div className="hidden md:block h-full p-6 overflow-hidden">
                        {/* Masonry-style layout with staggered columns */}
                        <div className="grid grid-cols-4 gap-48 h-full">
                            {/* Column 1 - Normal alignment */}
                            <div className="space-y-6 -mt-20">
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[0]?.src || "/placeholder.svg"}
                                        alt={images[0]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[1]?.src || "/placeholder.svg"}
                                        alt={images[1]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[2]?.src || "/placeholder.svg"}
                                        alt={images[2]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[3]?.src || "/placeholder.svg"}
                                        alt={images[3]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Column 2 - Offset up (first image cut from top) */}
                            <div className="space-y-6 -mt-44">
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[4]?.src || "/placeholder.svg"}
                                        alt={images[4]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[5]?.src || "/placeholder.svg"}
                                        alt={images[5]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[6]?.src || "/placeholder.svg"}
                                        alt={images[6]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[7]?.src || "/placeholder.svg"}
                                        alt={images[7]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Column 3 - Normal alignment (same as column 1) */}
                            <div className="space-y-6 -mt-28">
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[8]?.src || "/placeholder.svg"}
                                        alt={images[8]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[9]?.src || "/placeholder.svg"}
                                        alt={images[9]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[10]?.src || "/placeholder.svg"}
                                        alt={images[10]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[11]?.src || "/placeholder.svg"}
                                        alt={images[11]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Column 4 - Offset down (cut from bottom) */}
                            <div className="space-y-6 -mt-12">
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[12]?.src || "/placeholder.svg"}
                                        alt={images[12]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[13]?.src || "/placeholder.svg"}
                                        alt={images[13]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[14]?.src || "/placeholder.svg"}
                                        alt={images[14]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl w-[248px] h-[270px] overflow-hidden">
                                    <img
                                        src={images[15]?.src || "/placeholder.svg"}
                                        alt={images[15]?.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile version - simplified grid */}
                    <div className="grid grid-cols-2 gap-3 p-4 md:hidden">
                        {images.slice(0, 6).map((img, index) => (
                            <div key={index} className="rounded-xl overflow-hidden">
                                <img src={img.src || "/placeholder.svg"} alt={img.alt} className="w-full h-[120px] object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
