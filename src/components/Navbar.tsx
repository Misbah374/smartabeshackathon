/** @format */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Register!" },
    { href: "/about", label: "About" },
    { href: "/problem-statements", label: "Problem Statements" },
    { href: "/timeline", label: "Timeline" },
    { href: "/judging-criteria", label: "Judging Criteria" },
    { href: "/faq", label: "FAQ" },
    { href: "/contacts", label: "Contacts" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${isMenuOpen ? "backdrop-blur-sm" : "bg-transparent md:backdrop-blur-none"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-50">
            <span className="text-base sm:text-xl font-bold text-white font-mono tracking-wide">
              Smart ABES Hackathon
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-mono font-bold transition-all duration-200 relative ${
                  pathname === link.href
                    ? "text-white after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-[#165a94]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden z-50 p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 font-mono font-bold transition-all duration-200 ${
                  pathname === link.href
                    ? "text-white bg-[#165a94]/30 border-l-4 border-[#165a94]"
                    : "text-white/70 hover:text-white hover:bg-[#165a94]/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
