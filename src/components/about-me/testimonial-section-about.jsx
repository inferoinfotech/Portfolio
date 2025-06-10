export default function TestimonialSectionAbout() {
  const images = [
    {
      src: "../images/experience-img-1.jpg",
      alt: "Person working",
    },
    {
      src: "../images/experience-img-2.jpg",
      alt: "Portrait",
    },
    {
      src: "../images/experience-img-3.jpg",
      alt: "Person at beach",
    },
    {
      src: "../images/experience-img-4.jpg",
      alt: "Business person",
    },
    {
      src: "../images/experience-img-5.jpg",
      alt: "Team meeting",
    },
  ]

  return (
    <section className="w-full bg-black py-8 md:py-12 lg:py-16">
      <div className="w-full px-4 md:px-6">
        {/* Quote */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[96px] leading-tight md:leading-[90px] font-medium tracking-[-0.03em] text-center text-white container mx-auto">
            " Pirate ipsum arrgh bounty warp jack. Shrouds grog{" "}
            <span className="text-[rgba(253,192,197,1)]">lubber bow</span> red gabion sloop black crow's"
          </h2>
        </div>

        {/* Author */}
        <div className="flex items-center justify-center mb-8 md:mb-12 lg:mb-16">
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Profile Image with pink background */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FDC0C5] rounded-full p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src="../images/Profileimage.jpg" alt="Saleh Bilal" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
              <h3 className="text-white text-base md:text-lg font-normal tracking-[-0.03em]">Saleh Bilal</h3>
              <p className="text-gray-400 text-sm">Founder @ DGTL Network</p>
            </div>
          </div>
        </div>

        {/* Image gallery */}
        <div className="mb-8 md:mb-12">
          {/* Desktop: 5 columns with minimal gap */}
          <div className="hidden md:grid md:grid-cols-5 gap-2 lg:gap-3">
            {images.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden aspect-square">
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="md:hidden">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm">
                <img
                  src="../images/MY EXPERIENCE About-1.jpg"
                  alt="Person working with laptop in modern workspace"
                  width={400}
                  height={600}
                  className="w-full h-[500px] rounded-[35px] object-cover "
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Client counter */}
        <div className="hidden md:block">
          <div className=" flex justify-center mb-8 md:mb-12 lg:mb-16">
            <div className="bg-black border-2 border-white rounded-full px-3 md:px-4 py-2 flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[
                  "../images/avtar-about-1.jpg",
                  "../images/avtar-about-2.jpg",
                  "../images/avtar-about-3.jpg",
                  "../images/avtar-about-1.jpg",
                  "../images/avtar-about-2.jpg",
                  "../images/avtar-about-3.jpg",
                ].map((src, index) => (
                  <div key={index} className="w-5 h-5 md:w-6 md:h-6 rounded-full overflow-hidden border-2 border-black">
                    <img src={src || "/placeholder.svg"} alt="Client" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-xs text-[#FFFF] font-medium">Trusted by over 500+ clients globally</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="max-w-5xl px-10 md:px-0 mx-auto">
          <p className="font-bold text-xl text-center md:text-left sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-tight md:leading-[60px] tracking-[-0.03em] text-white mb-6 md:mb-8">
            He's been named in the top 50 of Worth Magazine's 100 most powerful people in global finance for three
            consecutive years, honored by Harvard Business Press as one of the "Top 200 Business Gurus", and by American
            Express as one of the "Top Six Business Leaders in the World" to coach its entrepreneurial clients.
          </p>

          <p className="text-[#FDC0C5]  font-bold text-xl  text-center md:text-left sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-tight md:leading-[60px] tracking-[-0.03em] mb-6 md:mb-8">
            Fortune's cover article named him the "CEO Whisperer."
          </p>

          <p className="font-bold text-xl text-center md:text-left sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-tight md:leading-[60px] tracking-[-0.03em] text-white">
            And it's why leaders call upon him to help them lead.
          </p>
        </div>
      </div>
    </section>
  )
}
