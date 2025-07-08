export default function ScaleBusinessSection() {
  // Array of images with different widths for horizontal masonry effect
  const images = [
    // First row - 3 images with uneven widths
    { src: "/images/free-audit-1.jpg", alt: "People laughing", cols: "col-span-3" },
    { src: "/images/free-audit-2.jpg", alt: "Sunset reflection", cols: "col-span-4" },
    { src: "/images/free-audit-3.jpg", alt: "Couple in nature", cols: "col-span-4" },

    // Second row - 3 images with uneven widths
    { src: "/images/free-audit-4.jpg", alt: "Bubble crowd", cols: "col-span-4" },
    { src: "/images/free-audit-5.jpg", alt: "Campfire group", cols: "col-span-4" },
    { src: "/images/free-audit-6.jpg", alt: "Beach side", cols: "col-span-3" },

    // Third row - 3 images with uneven widths
    { src: "/images/free-audit-7.jpg", alt: "Father and daughter", cols: "col-span-3" },
    { src: "/images/free-audit-8.jpg", alt: "Studying together", cols: "col-span-4" },
    { src: "/images/free-audit-9.jpg", alt: "People on pier", cols: "col-span-4" },

    // Fourth row - 3 images with uneven widths
    { src: "/images/free-audit-10.jpg", alt: "Stairs and shadow", cols: "col-span-3" },
    { src: "/images/free-audit-11.jpg", alt: "Building light", cols: "col-span-4" },
    { src: "/images/free-audit-12.jpg", alt: "Wall & stairs", cols: "col-span-4" },
  ]

  return (
    <div className="w-full overflow-hidden">
      {/* Stack on mobile and laptop, grid only on extra large screens */}
      <div className="flex flex-col xl:grid xl:grid-cols-2 h-fit xl:h-[100vh] ">
        {/* Left Content - Full width on mobile and laptop */}
        <div className="flex items-center justify-center bg-white py-16 lg:pe-10 xl:py-0">
          <div className="w-full max-w-2xl ms-auto px-6">
            {/* Responsive heading */}
            <h1 className="text-[44px] md:text-5xl text-center md:text-left lg:text-6xl xl:text-[64px] font-bold leading-16 lg:leading-tight mb-6 xl:mb-8 tracking-tight ">
              Can't figure out How to scale your business{" "}
              and convert leads?
            </h1>

            {/* Subtitle */}
            <p className="text-black/50 text-[24px] text-center md:text-2xl md:text-left font-normal mb-8 xl:mb-12">Let me sort it out for you</p>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start">
              <button className="md:bg-black cursor-pointer md:text-white text-sm md:text-base xl:text-[22px] px-6 py-3 md:px-12 md:py-7 rounded-full font-medium shadow-[0px_4px_4px_0px_#00000040] hover:bg-gray-900 transition text-black text-center">
                Let's have a free call
              </button>
            </div>
          </div>
        </div>

       
        {/* Right Images - Grid - Now visible on all screens */}
        <div className="bg-black min-h-[50vh] lg:h-full overflow-hidden p-4 lg:block hidden">
          <div className="grid grid-cols-6 gap-4 h-full">
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
                    className="w-full h-full min-h-[100px] max-h-[250px] object-cover transition-transform duration-500 hover:scale-105"
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
