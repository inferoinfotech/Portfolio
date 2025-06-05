import Link from "next/link"
// import { cn } from "@/lib/utils"

export default function Header({ className }) {
  return (
    <header className={("w-full bg-black text-white sticky top-0 z-50 py-4 px-6")}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-4xl font-bold">
          Saleh Bilal
        </Link>
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <Link href="/about" className="hover:text-[#FDC0C5] text-base transition-colors">
            About
          </Link>
          <Link href="/mywork" className="hover:text-[#FDC0C5] text-base transition-colors">
            My Work
          </Link>
          <Link href="/blog" className="hover:text-[#FDC0C5] text-base transition-colors">
            Blog
          </Link>
          <Link href="/workwithme" className="hover:text-[#FDC0C5] text-base transition-colors">
            Hire Me
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            {/* Search icon placeholder - replace with your SVG */}
            <div className="w-5 h-5 mr-2">
              {/* Replace this div with your SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <span className="text-base font-medium ">Services</span>
          </div>
          <Link
            href="/freeaudit"
            className="bg-[#FDC0C5] font-medium hover:bg-[#FDC0C5]/90 text-black px-4 py-2 rounded-full transition-colors"
          >
            Free Audit
          </Link>
        </div>
      </div>

      {/* Mobile menu button - only visible on small screens */}
      <div className="md:hidden absolute right-4 top-4">
        {/* Replace this with your mobile menu button SVG */}
        <div className="w-6 h-6">{/* Mobile menu icon placeholder */}</div>
      </div>
    </header>
  )
}
