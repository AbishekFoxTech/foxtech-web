"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 🧭 Detect scroll to change navbar background after Hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.5; // first 80vh
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optional: lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#ffffff] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="FOXTECH Logo"
            width={160}
            height={58}
            className="object-contain cursor-pointer"
            priority
          />
        </Link>

        {/* 🍔 Toggle */}
        <button
          className="lg:hidden text-[#380DBD] focus:outline-none ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* 🌐 Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center space-x-6 text-[14px] tracking-tight font-medium text-[#1a1a1a]">
          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-[#380DBD] transition">
              <span>Training Programs</span>
              <ChevronDown size={16} className="mt-[2px]" />
            </button>

            <div
              className="
                absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                transition-all duration-200 bg-white shadow-lg rounded-lg py-2 w-60 z-50 border border-gray-200
              "
            >
              {[
                "MECHANICAL CAD",
                "IT & TECHNOLOGY",
                "CIVIL ENGINEERING",
                "ELECTRICAL ENGINEERING",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="
                    block px-5 py-2 text-[15px] rounded-md
                    hover:bg-purple-50 hover:text-[#380DBD] hover:border-l-4 hover:border-[#380DBD] transition
                  "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <Link href="#project-services" className="hover:text-[#380DBD] transition">
            Project Services
          </Link>
          <Link href="#aboutus" className="hover:text-[#380DBD] transition">
            About Us
          </Link>
          <Link href="#success" className="hover:text-[#380DBD] transition">
            Success Stories
          </Link>
          <Link href="#contact" className="hover:text-[#380DBD] transition">
            Contact
          </Link>
        </div>

        {/* RIGHT - Login + Button (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="#" className="text-[#380DBD] hover:underline font-medium">
            Login
          </Link>
          <Link
            href="#"
            className="px-5 py-2 border-2 border-[#380DBD] bg-[#380DBD] text-white rounded-md hover:bg-[#4B22F5] transition font-medium"
          >
            Book online
          </Link>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      <div
        className={`lg:hidden bg-[#fffceb] border-t border-gray-200 shadow-md transition-all duration-300 ${
          isMenuOpen ? "max-h-[1000px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <div className="flex flex-col space-y-4 px-6 py-5 text-[16px] font-medium text-[#1a1a1a]">
          {/* Dropdown */}
          <div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full hover:text-[#380DBD]"
            >
              <span>Training Programs</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="mt-2 pl-4 flex flex-col space-y-2">
                {[
                  "MECHANICAL CAD",
                  "IT & TECHNOLOGY",
                  "CIVIL ENGINEERING",
                  "ELECTRICAL ENGINEERING",
                ].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:bg-purple-50 hover:text-[#380DBD] px-3 py-2 rounded-md transition border-l-4 border-transparent hover:border-[#380DBD]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-[#380DBD]">
            Project Services
          </Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-[#380DBD]">
            About Us
          </Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-[#380DBD]">
            Success Stories
          </Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-[#380DBD]">
            Contact
          </Link>

          <hr className="my-3 border-gray-300" />

          <Link href="#" className="text-[#380DBD] hover:underline">
            Login
          </Link>
          <Link
            href="#"
            className="px-5 py-2 text-center border-2 border-[#380DBD] text-white bg-[#380DBD] rounded-md hover:bg-[#4B22F5] transition font-medium"
          >
            Book online
          </Link>
        </div>
      </div>
    </nav>
  );
}
