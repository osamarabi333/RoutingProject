
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed z-30 top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-8"
      } mainColor`}
    >
      <div className="px-14 container flex-row md:flex items-center justify-between text-white">
        <Link to="">
          <h1 className="text-4xl font-semibold font-sana">START FRAMEWORK</h1>
        </Link>
        <div className="md:hidden flex items-center my-3">
          <button onClick={toggleMenu}>
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-3xl`}></i>
          </button>
        </div>
        <ul
          className={` flex flex-col md:flex md:gap-x-7 md:flex-row   gap-5 font-bold ${isMenuOpen ? 'block' : 'hidden'} md:block`}
        >
          <li>
            <NavLink to="about" className="py-3 px-2 rounded-lg">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="portfolio" className="py-3 px-2 rounded-lg">
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" className="py-3 px-2 rounded-lg">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
