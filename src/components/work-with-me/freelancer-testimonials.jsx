export default function FreelancerTestimonials() {
  const testimonials = [
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-customer-11.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain. Gunwalls seven o'nine cat league man warp.",
      rating: 4,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-customer-10.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain. Gunwalls seven o'nine cat league man warp.",
      rating: 5,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-customer-9.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain. Gunwalls seven o'nine cat league man warp.",
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
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-bold text-[64px] leading-[100%] tracking-[-2%] text-center mb-[30px]">
            Work with a freelancer from the
            <br />
            #1 ranked global platform
          </h2>
          <p className="text-black/70 font-medium text-[32px] leading-[100%] tracking-[-2%] text-center">See what my clients from upwork and freelancer have to say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <div className="flex items-center mb-[40px]">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-medium text-[32px] leading-[100%] tracking-[-2%] mb-2">{testimonial.name}</h4>
                  <p className="text-gray-600 text-[24px] leading-[100%] tracking-[-2%]">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 font-medium text-xl leading-relaxed mb-8">{testimonial.text}</p>
              <StarRating rating={testimonial.rating} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-black text-white px-8 py-4 rounded-full font-medium  shadow-md shadow-black/25">
            Hire me now
          </button>
        </div>
      </div>
    </section>
  )
}
