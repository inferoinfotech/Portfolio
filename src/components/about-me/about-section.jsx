"use client";

export default function AboutSection() {
  return (
    <section className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-16 py-16 gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="text-sm tracking-wide">Who is</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-pink-300">Saleh</span> Bilal?
            </h1>
          </div>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
            Pirate ipsum arrgh bounty warp jack. Sails ensign cup ballast spyglass execution lateen nipperkin american.
            Man spot line prey schooner no shiver brace weigh. Fer fleet yard chandler roger coxswain swab rig boatswain yarr.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="bg-pink-300 rounded-tl-3xl rounded-bl-3xl overflow-hidden w-full h-full">
            <div className="relative w-full h-full">
              <img
                src="../images/About-banner-img.png"
                alt="Saleh Bilal"
                className="w-full h-full object-cover mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}



