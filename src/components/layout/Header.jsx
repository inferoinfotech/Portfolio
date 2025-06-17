"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const navigationItems = [
    { name: "About", href: "/about" },
    { name: "My Work", href: "/mywork" },
    { name: "Blog", href: "/blog" },
    { name: "Hire Me", href: "/workwithme" },
  ];

  // Set active item on route change
  useEffect(() => {
    if (pathname === "/") {
      setActiveItem("Home");
    } else if (pathname === "/freeaudit") {
      setActiveItem("Free Audit");
    } else {
      const matched = navigationItems.find((item) => item.href === pathname);
      if (matched) {
        setActiveItem(matched.name);
      } else {
        setActiveItem("");
      }
    }
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (itemName) => {
    setActiveItem(itemName);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="w-full bg-black text-white sticky top-0 z-50 py-4">
        <div className="max-w-container mx-auto flex items-center justify-between px-4">
          <Link
            href="/"
            className="text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold transition-transform duration-300 transform hover:scale-105"
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
                className={`hover:text-[#FDC0C5] text-base font-medium transition-colors relative group ${
                  activeItem === item.name ? "text-[#FDC0C5]" : "text-white/70"
                }`}
              >
                {item.name}
                <span
                  className={` w-full transform transition-all duration-300 ${
                    activeItem === item.name ? "scale-x-100" : "scale-x-0 "
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* <div className="flex items-center space-x-2 hover:text-[#FDC0C5] transition-colors duration-300 cursor-pointer">
              <Search className="lg:w-5 lg:h-5 w-3 h-3" />
              <span className="text-[14px] lg:text-base font-medium">Services</span>
            </div> */}

            {/* Desktop only Free Audit button */}
            <Link
              href="/freeaudit"
              className="hidden md:block bg-[#FDC0C5] font-medium hover:bg-[#FDC0C5]/90 text-black px-4 py-2 rounded-full transition-colors"
            >
              Free Audit
            </Link>

            {/* Mobile Menu Icon */}
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex flex-col justify-center items-center md:hidden"
              aria-label="Toggle Menu"
            >
              <div className="relative w-5 h-5">
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black text-white z-40 md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`absolute inset-0 transform transition-transform duration-700 ease-out ${
            isMenuOpen ? "scale-100" : "scale-95"
          }`}
        />

        <div className="relative pt-20 px-6">
          <nav className="space-y-6">
            {/* Home (mobile only) */}
            <div
              className={`transform transition-all duration-500 ease-out ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <Link
                href="/"
                onClick={() => handleNavClick("Home")}
                className={`block text-[32px] font-light hover:text-[#FDC0C5] transition-all duration-300 hover:translate-x-2 hover:scale-105 relative group w-full text-left ${
                  activeItem === "Home" ? "text-[#FDC0C5]" : ""
                }`}
              >
                Home
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 transform transition-all duration-300 ${
                    activeItem === "Home"
                      ? "scale-y-100 -translate-x-6"
                      : "scale-y-0 -translate-x-6"
                  }`}
                />
                <span
                  className={`absolute inset-0 rounded-lg transform transition-all duration-300 ${
                    activeItem === "Home"
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                />
              </Link>
            </div>

            {/* Other nav items */}
            {navigationItems.map((item, index) => (
              <div
                key={item.name}
                className={`transform transition-all duration-500 ease-out ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={`block text-[32px] font-light hover:text-[#FDC0C5] transition-all duration-300 hover:translate-x-2 hover:scale-105 relative group w-full text-left ${
                    activeItem === item.name ? "text-[#FDC0C5]" : ""
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 transform transition-all duration-300 ${
                      activeItem === item.name
                        ? "scale-y-100 -translate-x-6"
                        : "scale-y-0 -translate-x-6"
                    }`}
                  />
                  <span
                    className={`absolute inset-0 rounded-lg transform transition-all duration-300 ${
                      activeItem === item.name
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0"
                    }`}
                  />
                </Link>
              </div>
            ))}

            {/* Free Audit in mobile menu */}
            <div
              className={`transform transition-all duration-500 ease-out ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${(navigationItems.length + 1) * 100}ms`,
              }}
            >
              <Link
                href="/freeaudit"
                onClick={() => handleNavClick("Free Audit")}
                className={`block text-[32px] font-light hover:text-[#FDC0C5] transition-all duration-300 hover:translate-x-2 hover:scale-105 relative group w-full text-left ${
                  activeItem === "Free Audit" ? "text-[#FDC0C5]" : ""
                }`}
              >
                Free Audit
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8  transform transition-all duration-300 ${
                    activeItem === "Free Audit"
                      ? "scale-y-100 -translate-x-6"
                      : "scale-y-0 -translate-x-6"
                  }`}
                />
                <span
                  className={`absolute inset-0 rounded-lg transform transition-all duration-300 ${
                    activeItem === "Free Audit"
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
