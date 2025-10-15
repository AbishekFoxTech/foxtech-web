"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Optional: lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#fffceb]  w-full font-sans fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative">
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="FOXTECH Logo"
            width={140}
            height={40}
            className="object-contain cursor-pointer"
            priority
          />
        </Link>

        {/* 🍔 Toggle (Visible on md and below) */}
        <button
          className="lg:hidden text-purple-700 focus:outline-none ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* 🌐 Menu (Desktop Only) */}
        <div className="hidden lg:flex items-center justify-center space-x-12 text-[16px] font-medium tracking-wide">
          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-purple-700 transition">
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
                "IT & TECHONOLOGY",
                "CIVIL ENGINEERING",
                "ELECTRICAL ENGINEERING",
              ].map((item) => (
                <Link
                  key={item}
                  href="#mech"
                  className="
                    block px-5 py-2 text-[15px] rounded-md
                    hover:bg-purple-50 hover:text-purple-700 hover:border-l-4 hover:border-purple-600 transition
                  "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <Link href="#project-services" className="hover:text-purple-700 transition">
            Project Services
          </Link>
          <Link href="#aboutus" className="hover:text-purple-700 transition">
            About Us
          </Link>
          <Link href="#success" className="hover:text-purple-700 transition">
            Success Stories
          </Link>
          <Link href="#contact" className="hover:text-purple-700 transition">
            Contact
          </Link>
        </div>

        {/* RIGHT - Login + Button (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="#" className="text-purple-700 hover:underline font-medium">
            Login
          </Link>
          <Link
            href="#"
            className="px-5 py-2 border-2 border-purple-700 text-purple-700 rounded-md hover:bg-purple-700 hover:text-white transition font-medium"
          >
            Book online
          </Link>
        </div>
      </div>

      {/* 📱 Mobile & Medium Menu */}
      <div
        className={`lg:hidden bg-[#fffceb] border-t border-gray-200 shadow-md transition-all duration-300 ${
          isMenuOpen ? "max-h-[1000px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <div className="flex flex-col space-y-4 px-6 py-5 text-[16px] font-medium">
          {/* Dropdown (Mobile) */}
          <div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full hover:text-purple-700"
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
                "IT & TECHONOLOGY",
                "CIVIL ENGINEERING",
                "ELECTRICAL ENGINEERING",
                ].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:bg-purple-50 hover:text-purple-700 px-3 py-2 rounded-md transition border-l-4 border-transparent hover:border-purple-600"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-purple-700">
            Project Services
          </Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-purple-700">
            About Us
          </Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-purple-700">
            Success Stories
          </Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-purple-700">
            Contact
          </Link>

          <hr className="my-3 border-gray-300" />

          {/* Buttons */}
          <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-purple-700 hover:underline">
            Login
          </Link>
          <Link
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="px-5 py-2 text-center border-2 border-purple-700 text-purple-700 rounded-md hover:bg-purple-700 hover:text-white transition font-medium"
          >
            Book online
          </Link>
        </div>
      </div>
    </nav>
  );
}
