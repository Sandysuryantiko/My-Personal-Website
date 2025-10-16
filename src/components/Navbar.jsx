import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

  // Update active section saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects"];
      let current = "about";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hapus "Contact" dari daftar navLinks
  const navLinks = ["About", "Skills", "Experience", "Projects"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((item) => {
            const id = item.toLowerCase();
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative text-gray-700 hover:text-blue-600 transition ${
                    activeSection === id
                      ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-blue-600 after:mt-1"
                      : ""
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg flex flex-col space-y-4 px-6 py-6 absolute top-full left-0 w-full transform transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        } origin-top`}
      >
        {navLinks.map((item) => {
          const id = item.toLowerCase();
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setIsOpen(false)} // auto close setelah klik
              className={`text-gray-700 hover:text-blue-600 transition ${
                activeSection === id ? "font-semibold text-blue-600" : ""
              }`}
            >
              {item}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
