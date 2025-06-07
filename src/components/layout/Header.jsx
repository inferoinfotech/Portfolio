"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("My Work")

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNavClick = (itemName) => {
    setActiveItem(itemName)
    setIsMenuOpen(false)
  }

  const navigationItems = [
    { name: "About", href: "/about" },
    { name: "My Work", href: "/mywork" },
    { name: "Blog", href: "/blog" },
    { name: "Hire Me", href: "/workwithme" },
  ]

  return (
    <>
      <header className="w-full bg-black text-white sticky top-0 z-50 py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-pink-400 transition-colors"
            onClick={() => handleNavClick("Home")}
          >
            Saleh Bilal
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-medium">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`hover:text-[#FDC0C5] text-base transition-colors relative group ${
                  activeItem === item.name ? "text-[#FDC0C5]" : ""
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#FDC0C5] w-full transform transition-all duration-300 ${
                    activeItem === item.name ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right Section (Services + Button) */}
          <div className="flex items-center space-x-4">
            {/* Services */}
            <div className="flex items-center space-x-2 hover:text-[#FDC0C5] transition-colors duration-300 cursor-pointer">
              <Search className="w-5 h-5" />
              <span className="text-base font-medium">Services</span>
            </div>

            {/* Free Audit Button */}
            <Link
              href="/freeaudit"
              className="bg-[#FDC0C5] font-medium hover:bg-[#FDC0C5]/90 text-black px-4 py-2 rounded-full transition-colors"
            >
              Free Audit
            </Link>

            {/* Mobile Menu Icon */}
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex flex-col justify-center items-center md:hidden"
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-2.5" : "translate-y-1"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out translate-y-2.5 ${
                    isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 translate-y-2.5" : "translate-y-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black text-white z-40 md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`absolute inset-0  transform transition-transform duration-700 ease-out ${
            isMenuOpen ? "scale-100" : "scale-95"
          }`}
        />

        <div className="relative pt-20 px-6">
          <nav className="space-y-6">
            {navigationItems.map((item, index) => (
              <div
                key={item.name}
                className={`transform transition-all duration-500 ease-out ${
                  isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={`block text-4xl font-light hover:text-[#FDC0C5] transition-all duration-300 hover:translate-x-2 hover:scale-105 relative group w-full text-left ${
                    activeItem === item.name ? "text-[#FDC0C5]" : ""
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#FDC0C5] transform transition-all duration-300 ${
                      activeItem === item.name ? "scale-y-100 -translate-x-6" : "scale-y-0 -translate-x-6"
                    }`}
                  />
                  <span
                    className={`absolute inset-0 bg-[#FDC0C5]/10 rounded-lg transform transition-all duration-300 ${
                      activeItem === item.name ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    }`}
                  />
                </Link>
              </div>
            ))}
          </nav>

          {/* Current Active Item Indicator */}
          <div
            className={`absolute bottom-20 left-6 transform transition-all duration-500 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
          </div>

          {/* Animated Shapes */}
          <div
            className={`absolute top-16 right-6 w-20 h-20 transform transition-all duration-1000 ease-out ${
              isMenuOpen ? "scale-100 rotate-180 opacity-100" : "scale-0 rotate-0 opacity-0"
            }`}
          />
          <div
            className={`absolute bottom-32 left-6 w-12 h-12 bg-[#FDC0C5]/10 rounded-full transform transition-all duration-1000 ease-out ${
              isMenuOpen ? "scale-100 rotate-45 opacity-100" : "scale-0 rotate-0 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          />
        </div>
      </div>
    </>
  )
}
