"use client"

// Sample images for the grid
const workImages = [
    { id: 1, src: "/images/work1.jpg", alt: "Work image 1" },
    { id: 2, src: "/images/work2.jpg", alt: "Work image 2" },
    { id: 3, src: "/images/work3.jpg", alt: "Work image 3" },
    { id: 4, src: "/images/work4.jpg", alt: "Work image 4" },
    { id: 5, src: "/images/work5.jpg", alt: "Work image 5" },
    { id: 6, src: "/images/work6.jpg", alt: "Work image 6" },
    { id: 7, src: "/images/work7.jpg", alt: "Work image 7" },
    { id: 8, src: "/images/work8.jpg", alt: "Work image 8" },
    { id: 9, src: "/images/work9.jpg", alt: "Work image 9" },
    { id: 10, src: "/images/work10.jpg", alt: "Work image 10" },
    { id: 11, src: "/images/work11.jpg", alt: "Work image 11" },
    { id: 12, src: "/images/work12.jpg", alt: "Work image 12" },
    { id: 13, src: "/images/work13.jpg", alt: "Work image 13" },
    { id: 14, src: "/images/work14.jpg", alt: "Work image 14" },
    { id: 15, src: "/images/work15.jpg", alt: "Work image 15" },
    { id: 16, src: "/images/work16.jpg", alt: "Work image 16" },
]

export default function MyWorkBanner() {
    return (
        <section className="min-h-screen bg-black text-white flex">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center px-8 lg:px-16">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-2xl font-medium tracking-wider uppercase">My work</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-bold leading-tight mb-12">
                    Have worked for
                    <br />a community of tech
                    <br />
                    giants with global
                    <br />
                    <span className="text-[#FDC0C5]">influence</span>
                </h1>

                {/* CTA Button */}
                <button className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-colors w-fit">
                    Meet Saleh Bilal
                </button>
            </div>

            {/* Right Image Grid - Hidden on mobile, visible from md up */}
            <div className="hidden md:flex flex-1 items-center justify-center p-8">
                <div className="grid grid-cols-4 gap-4 max-w-2xl">
                    {/* Row 1 */}
                    <div className="col-span-2 h-32">
                        <img
                            src={workImages[0].src || "/placeholder.svg"}
                            alt={workImages[0].alt}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="h-32">
                        <img
                            src={workImages[1].src || "/placeholder.svg"}
                            alt={workImages[1].alt}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="h-32">
                        <img
                            src={workImages[2].src || "/placeholder.svg"}
                            alt={workImages[2].alt}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>

                    {/* Row 2 */}
                    <div className="h-28">
                        <img
                            src={workImages[3].src || "/placeholder.svg"}
                            alt={workImages[3].alt}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="col-span-2 h-28">
                        <img
                            src={workImages[4].src || "/placeholder.svg"}
                            alt={workImages[4].alt}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="h-28">
                        <img
                            src={workImages[5].src || "/placeholder.svg"}
                            alt={workImages[5].alt}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>

                    {/* Row 3 */}
                    <div className="h-36">
                        <img
                            src={workImages[6].src || "/placeholder.svg"}
                            alt={workImages[6].alt}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="h-36">
                        <img
                            src={workImages[7].src || "/placeholder.svg"}
                            alt={workImages[7].alt}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="col-span-2 h-36">
                        <img
                            src={workImages[8].src || "/placeholder.svg"}
                            alt={workImages[8].alt}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>

                    {/* Row 4 */}
                    <div className="col-span-2 h-32">
                        <img
                            src={workImages[9].src || "/placeholder.svg"}
                            alt={workImages[9].alt}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="h-32">
                        <img
                            src={workImages[10].src || "/placeholder.svg"}
                            alt={workImages[10].alt}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="h-32">
                        <img
                            src={workImages[11].src || "/placeholder.svg"}
                            alt={workImages[11].alt}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
