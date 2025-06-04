export default function TestimonialSectionAbout() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Quote */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
            " Pirate ipsum arrgh bounty warp jack. Shrouds grog <span className="text-pink-400">lubber bow</span> red
            gabion sloop black crow's"
          </h2>
        </div>

        {/* Author */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
            <img src="/placeholder.svg?height=100&width=100" alt="Saleh Bilal" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-white font-medium">Saleh Bilal</h3>
          <p className="text-gray-400 text-sm">Founder of DGTL Masters</p>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Person working"
              className="w-full h-36 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src="/placeholder.svg?height=200&width=200" alt="Portrait" className="w-full h-36 object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Person at beach"
              className="w-full h-36 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Business person"
              className="w-full h-36 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src="/placeholder.svg?height=200&width=200" alt="Team meeting" className="w-full h-36 object-cover" />
          </div>
        </div>

        {/* Client counter */}
        <div className="flex justify-center mb-16">
          <div className="bg-black border border-gray-800 rounded-full px-4 py-2 flex items-center space-x-2">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-black">
                <img src="/placeholder.svg?height=50&width=50" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-black">
                <img src="/placeholder.svg?height=50&width=50" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-black">
                <img src="/placeholder.svg?height=50&width=50" alt="Client" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-xs text-gray-400">Trusted by over 500+ clients globally</span>
          </div>
        </div>

        {/* Achievements */}
        <div className="max-w-3xl mx-auto">
          <p className="text-white text-xl leading-relaxed mb-8">
            He's been named in the top 50 of Worth Magazine's 100 most powerful people in global finance for three
            consecutive years, honored by Harvard Business Press as one of the "Top 200 Business Gurus", and by American
            Express as one of the "Top Six Business Leaders in the World" to coach its entrepreneurial clients.
          </p>

          <p className="text-pink-400 text-xl font-medium mb-8">
            Fortune's cover article named him the "CEO Whisperer."
          </p>

          <p className="text-white text-xl leading-relaxed">And it's why leaders call upon him to help them lead.</p>
        </div>
      </div>
    </section>
  )
}
