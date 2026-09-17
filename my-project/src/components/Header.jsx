import React, { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-lg sticky top-0 z-50 bg-white">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold tracking-tight text-black">
          MyPortfolio
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          </li>
          <li>
            <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </li>
          <li>
            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              download
              className="bg-black text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-100 hover:text-black transition-colors"
            >
              Download CV
            </a>
          </li>
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            <li>
              <a href="#about" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li>
              <a href="#work" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Work</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
            <li>
              <a
                href="/cv.pdf"
                download
                className="bg-black text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-100 hover:text-black transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}