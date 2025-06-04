export default function FinalCTASection() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main CTA */}
        <div className="relative rounded-3xl overflow-hidden mb-8">
          <img
            src="/placeholder.svg?height=400&width=1200"
            alt="Let's build something together"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">Let's build something together</h2>
              <button className="bg-[#FDC0C5] text-black px-8 py-4 rounded-full font-medium hover:bg-[#f8a8b0] transition-colors">
                Lets have a Free call
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/placeholder.svg?height=300&width=600"
              alt="Change the system"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Change the system</h3>
                <p className="text-gray-300 mb-4">Giving best services across the globe</p>
                <button className="bg-[#FDC0C5] text-black px-6 py-3 rounded-full font-medium hover:bg-[#f8a8b0] transition-colors">
                  Meet Saleh Bilal
                </button>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/placeholder.svg?height=300&width=600"
              alt="Time to level up"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Time to level up</h3>
                <p className="text-gray-300 mb-4">Giving best services across the globe</p>
                <button className="bg-[#FDC0C5] text-black px-6 py-3 rounded-full font-medium hover:bg-[#f8a8b0] transition-colors">
                  Visit portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
