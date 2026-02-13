"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-600">
          Joseph Liberia Intl
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li><Link href="/" className="hover:text-red-600">Home</Link></li>
          <li><Link href="/about" className="hover:text-red-600">About</Link></li>
          <li><Link href="/services" className="hover:text-red-600">Services</Link></li>
          <li><Link href="/contact" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Contact Us</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-red-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow">
          <ul className="flex flex-col text-center font-medium text-gray-700">
            <li className="py-4 border-b">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="py-4 border-b">
              <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="py-4 border-b">
              <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            </li>
            <li className="py-4">
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
