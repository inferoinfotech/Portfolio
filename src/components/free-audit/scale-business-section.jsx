export default function ScaleBusinessSection() {
    // Array of images with different widths for horizontal masonry effect
    const images = [
        // First row - 3 images with uneven widths
        { src: "/images/free-audit-1.jpg", alt: "People laughing", cols: "col-span-3" },
        { src: "/images/free-audit-2.jpg", alt: "Sunset reflection", cols: "col-span-4" },
        { src: "/images/free-audit-3.jpg", alt: "Couple in nature", cols: "col-span-2" },

        // Second row - 3 images with uneven widths
        { src: "/images/free-audit-4.jpg", alt: "Bubble crowd", cols: "col-span-2" },
        { src: "/images/free-audit-5.jpg", alt: "Campfire group", cols: "col-span-5" },
        { src: "/images/free-audit-6.jpg", alt: "Beach side", cols: "col-span-3" },

        // Third row - 3 images with uneven widths
        { src: "/images/free-audit-7.jpg", alt: "Father and daughter", cols: "col-span-4" },
        { src: "/images/free-audit-8.jpg", alt: "Studying together", cols: "col-span-2" },
        { src: "/images/free-audit-9.jpg", alt: "People on pier", cols: "col-span-4" },

        // Fourth row - 3 images with uneven widths
        { src: "/images/free-audit-10.jpg", alt: "Stairs and shadow", cols: "col-span-3" },
        { src: "/images/free-audit-11.jpg", alt: "Building light", cols: "col-span-3" },
        { src: "/images/free-audit-12.jpg", alt: "Wall & stairs", cols: "col-span-5" },
    ]


    return (
        <div className="w-full overflow-hidden">
            <div className="grid grid-cols-2 h-[80vh]">
                {/* Left Content */}
                <div className="flex items-center justify-center bg-white">
                    <div className="max-w-3xl mx-auto px-6">
                        {/* Main Heading */}
                        <h1 className="text-[64px] font-bold leading-tight mb-8">
                            Can't figure out How to scale your business <br /> and convert leads?
                        </h1>

                        {/* Subtitle */}
                        <p className="text-black/50 text-2xl font-normal mb-12">Let me sort it out for you</p>

                        {/* CTA Button */}
                        <button className="bg-black text-white px-7 py-4 rounded-full font-medium shadow-[0px_4px_4px_0px_#00000040] hover:bg-gray-900 transition">
                            Let's have a free call
                        </button>
                    </div>
                </div>

                {/* Right Images - Grid */}
                <div className="bg-black h-full overflow-hidden">
                    <div className="grid grid-cols-6 gap-4">
                        {images.map((img, index) => {
                            // Create rows of exactly 3 images each
                            const rowIndex = Math.floor(index / 3)
                            const isNewRow = index % 3 === 0

                            return (
                                <div
                                    key={index}
                                    className={`${img.cols} rounded-xl overflow-hidden ${isNewRow && index > 0 ? "col-start-1" : ""}`}
                                    style={{
                                        gridRow: rowIndex + 1,
                                    }}
                                >
                                    <img
                                        src={img.src || "/placeholder.svg"}
                                        alt={img.alt}
                                        className="w-full h-[200px] object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
