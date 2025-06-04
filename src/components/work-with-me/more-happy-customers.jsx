export default function MoreHappyCustomers() {
  const customers = [
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "/placeholder.svg?height=60&width=60",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain.",
      rating: 5,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "/placeholder.svg?height=60&width=60",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six.",
      rating: 5,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "/placeholder.svg?height=60&width=60",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain.",
      rating: 5,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "/placeholder.svg?height=60&width=60",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six.",
      rating: 5,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "/placeholder.svg?height=60&width=60",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain.",
      rating: 5,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "/placeholder.svg?height=60&width=60",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six.",
      rating: 5,
    },
  ]

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={`text-lg ${star <= rating ? "text-orange-400" : "text-gray-300"}`}>
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">More happy customers</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {customers.map((customer, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src={customer.image || "/placeholder.svg"}
                  alt={customer.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold">{customer.name}</h4>
                  <p className="text-gray-600 text-sm">{customer.title}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{customer.text}</p>
              <StarRating rating={customer.rating} />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Hire me now
          </button>
          <button className="border-2 border-black text-black px-8 py-4 rounded-full font-medium hover:bg-black hover:text-white transition-colors">
            Let's have a free call
          </button>
        </div>
      </div>
    </section>
  )
}
