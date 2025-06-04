export default function TopReadsSectionAbout() {
  // Book data
  const books = [
    {
      title: "Start With Why",
      author: "Simon Sinek",
      cover: "/placeholder.svg?height=300&width=200",
      color: "bg-red-700",
    },
    {
      title: "Evolve As A Brand",
      author: "Kunal Mehta",
      cover: "/placeholder.svg?height=300&width=200",
      color: "bg-yellow-400",
    },
    {
      title: "Business Biographies and Memoirs",
      author: "JR MacGregor",
      cover: "/placeholder.svg?height=300&width=200",
      color: "bg-red-900",
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      cover: "/placeholder.svg?height=300&width=200",
      color: "bg-blue-500",
    },
    {
      title: "Become A Business Leader",
      author: "Unknown",
      cover: "/placeholder.svg?height=300&width=200",
      color: "bg-gray-400",
    },
    {
      title: "Build Your Personal Brand",
      author: "Kunal Mehta",
      cover: "/placeholder.svg?height=300&width=200",
      color: "bg-blue-600",
    },
    {
      title: "The Pursuit of Happiness",
      author: "Chris Gardner",
      cover: "/placeholder.svg?height=300&width=200",
      color: "bg-red-500",
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      cover: "/placeholder.svg?height=300&width=200",
      color: "bg-yellow-500",
    },
  ]

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">My Top Reads</h2>
        </div>

        {/* Section subtitle */}
        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reading books has always given me a competitive edge as my creativity gets nourished and focused
          </p>
        </div>

        {/* Reading image */}
        <div className="rounded-3xl overflow-hidden mb-16">
          <img
            src="/placeholder.svg?height=500&width=1200"
            alt="Saleh reading a book"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Book grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {books.map((book, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-full aspect-[3/4] rounded-md overflow-hidden shadow-lg mb-3 ${book.color}`}>
                <img src={book.cover || "/placeholder.svg"} alt={book.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
