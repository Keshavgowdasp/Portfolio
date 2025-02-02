import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full px-5 py-5 shadow-xl backdrop-blur-lg fixed top-0 z-10 bg-white">
      <div className="container flex justify-between items-center max-w-5xl mx-auto">
        <h3 className="text-3xl text-red-500 font-bold">My App</h3>

        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden text-red-500"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col lg:flex-row gap-3 items-center lg:static absolute bg-white lg:bg-transparent shadow-lg lg:shadow-none lg:w-auto w-full left-0 mt-4 lg:mt-0 ${
            menuOpen ? "top-16" : "hidden"
          } lg:flex`}
        >
          <li className="list-none">
            <a
              href="#about"
              className="text-sm sm:text-base px-2 lg:px-5 transition rounded hover:text-white hover:bg-red-600"
            >
              About
            </a>
          </li>
          <li className="list-none">
            <a
              href="#skills"
              className="text-sm sm:text-base px-2 lg:px-5 transition rounded hover:text-white hover:bg-red-600"
            >
              Skills
            </a>
          </li>
          <li className="list-none">
            <a
              href="#projects"
              className="text-sm sm:text-base px-2 lg:px-5 transition rounded hover:text-white hover:bg-red-600"
            >
              Projects
            </a>
          </li>
          <li className="list-none">
            <a
              href="#contact"
              className="text-sm sm:text-base px-2 lg:px-5 transition rounded hover:text-white hover:bg-red-600"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
