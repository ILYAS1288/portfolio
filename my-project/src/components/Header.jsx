import React from "react";

export function Header() {
  return (
    <header className="shadow-lg sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold tracking-tight text-black">
          MyPortfolio
        </div>
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <a href="#about" className="hover:text-blue-200 transition-colors">About</a>
          </li>
          <li>
            <a href="#work" className="hover:text-blue-200 transition-colors">Work</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-blue-200 transition-colors">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
          </li>
          
          <li>
            <a
              href="/cv.pdf"
              download
              className="bg-black text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-100 transition-colors"
            >
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}