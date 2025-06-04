export default function TopReadsSectionAbout() {
  // Book data
  const books = [
    {
      title: "Start With Why",
      author: "Simon Sinek",
      cover: "../images/Book-1.jpg",
      color: "bg-red-700",
    },
    {
      title: "Evolve As A Brand",
      author: "Kunal Mehta",
      cover: "../images/Book-2.png",
      color: "bg-yellow-400",
    },
    {
      title: "Business Biographies and Memoirs",
      author: "JR MacGregor",
      cover: "../images/Book-3.png",
      color: "bg-red-900",
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      cover: "../images/Book-4.png",
      color: "bg-blue-500",
    },
    {
      title: "Become A Business Leader",
      author: "Unknown",
      cover: "../images/Book-5.png",
      color: "bg-gray-400",
    },
    {
      title: "Build Your Personal Brand",
      author: "Kunal Mehta",
      cover: "../images/Book-6.png",
      color: "bg-blue-600",
    },
    {
      title: "The Pursuit of Happiness",
      author: "Chris Gardner",
      cover: "../images/Book-7.png",
      color: "bg-red-500",
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      cover: "../images/Book-8.png",
      color: "bg-yellow-500",
    },
  ]

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-4">
          <h2 className="font-bold text-[48px] leading-[118px] tracking-[-3%]">My Top Reads</h2>
        </div>

        {/* Section subtitle */}
        <div className="text-center mb-12">
          <p className="tfont-medium text-[20px] leading-[100%] tracking-[0] text-center">
            Reading books has always given me a competitive edge as my creativity gets nourished and focused
          </p>
        </div>

        {/* Reading image */}
        <div className="rounded-[40px] overflow-hidden mb-28">
          <img
            src="../images/Top-read-Banner.png"
            alt="Saleh reading a book"
            className="w-full h-[789px] object-cover"
          />
        </div>

        {/* Book grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {books.map((book, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`overflow-hidden w-[221px] h-[340px] mb-3 ${book.color}`}>
                <img src={book.cover || "/placeholder.svg"}  className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
