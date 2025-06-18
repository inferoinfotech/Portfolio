"use client";

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
];

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
              <span className="text-2xl font-medium tracking-wider">
                My work
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-center lg:text-start leading-tight mb-12">
              Have worked for a community of tech giants with global
              <span className="text-[#FDC0C5]"> influence</span>
            </h1>

            {/* CTA Button */}
            <a href="/about">
              <button className="bg-white hover:cursor-pointer text-black px-12 lg:py-6 py-4 tracking-tight rounded-full font-medium text-[22px] hover:bg-gray-100 transition-all duration-300 ease-out transform hover:scale-110 active:scale-95 shadow-md hover:shadow-lg">
                Meet Saleh Bilal
              </button>
            </a>
          </div>
        </div>

        {/* Right Images - Masonry Grid */}
        <div className="bg-white min-h-[60vh] hidden lg:block lg:h-[114vh] overflow-x-auto scrollbar-hide overflow-y-hidden relative">
          <div className="h-full p-6 overflow-visible">
            <div className="grid grid-cols-4 gap-12 xl:gap-5 h-full min-w-[1024px]">
              {[0, 1, 2, 3].map((colIndex) => (
                <div
                  key={colIndex}
                  className={`space-y-6 ${
                    colIndex === 0
                      ? "lg:-mt-20"
                      : colIndex === 1
                      ? "lg:-mt-44"
                      : colIndex === 2
                      ? "lg:-mt-28"
                      : "lg:-mt-12"
                  }`}
                >
                  {images
                    .slice(colIndex * 4, colIndex * 4 + 4)
                    .map((img, i) => (
                      <div
                        key={i}
                        className="rounded-[30px] w-full max-w-[248px] h-[270px] overflow-hidden"
                      >
                        <img
                          src={img.src || "/placeholder.svg"}
                          alt={img.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
