import React from "react";
import { useState } from "react";
import { FaCode } from "react-icons/fa";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-md fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-purple-900/50">
      <div className="max-w-[900px] mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold flex items-center">
          <FaCode className="mr-4 text-2xl" />
          Francisco J. Álvarez
        </h1>
        <div className="text-right">
          <button onClick={toggleMenu} className="md:hidden">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16m-16 6h16"
              />
            </svg>
          </button>
          <nav className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-4">
              <li>
                <a
                  href="#hero"
                  className="block py-1 md:py-2 hover:text-orange-400"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="block py-1 md:py-2 hover:text-orange-400"
                >
                  Formación
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="block py-1 md:py-2 hover:text-orange-400"
                >
                  Experiencia
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-1 md:py-2 hover:text-orange-400"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
