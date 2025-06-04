export default function TopClientReview() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-medium tracking-widest uppercase">TOP CLIENT REVIEW</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <blockquote className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              "It's one thing to have 650,000 followers, it's another to have 650,000 loyal fans."
            </blockquote>

            <blockquote className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              "If my LinkedIn profile was deleted today and I had to start over from scratch, Justin is the first person
              I would call."
            </blockquote>

            <div className="flex items-center">
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="Austin Belcak"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h4 className="font-bold">Austin Belcak</h4>
                <p className="text-gray-600">Founder of Cultivated Culture</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">Have your business queries sorted</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded mr-3 flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>1-on-1 session</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded mr-3 flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Free of cost</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded mr-3 flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>30 min</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded mr-3 flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Discounted rates</span>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-gray-700 text-white py-3 rounded-full font-medium hover:bg-gray-600 transition-colors">
                Book a consultation call
              </button>
              <button className="w-full text-center text-gray-300 hover:text-white transition-colors">Hire me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
