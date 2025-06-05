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
      {/* Stack on mobile, grid on larger screens */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[80vh]">
        {/* Left Content */}
        <div className="flex items-center justify-center bg-white py-16 lg:py-0">
          <div className="w-full max-w-3xl mx-auto px-6">
            {/* Responsive heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-6 lg:mb-8">
              Can't figure out How to scale your business{" "}
              <span className="hidden sm:inline">
                <br />
              </span>
              and convert leads?
            </h1>

            {/* Subtitle */}
            <p className="text-black/50 text-xl md:text-2xl font-normal mb-8 lg:mb-12">Let me sort it out for you</p>

            {/* CTA Button */}
            <button className="bg-black text-white px-6 py-3 md:px-7 md:py-4 rounded-full font-medium shadow-[0px_4px_4px_0px_#00000040] hover:bg-gray-900 transition">
              Let's have a free call
            </button>
          </div>
        </div>

        {/* Right Images - Grid */}
        <div className="bg-black min-h-[60vh] lg:h-full overflow-hidden">
          {/* Hide on small screens, show on medium+ */}
          <div className="hidden md:grid grid-cols-6 gap-4 p-4">
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
                    className="w-full h-[150px] md:h-[180px] lg:h-[200px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )
            })}
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
