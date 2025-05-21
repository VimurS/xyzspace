import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">XYZ <span>SPACE</span></div>

      {/* Hamburger / Close Icon */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className={menuOpen ? "line open" : "line"}></span>
        <span className={menuOpen ? "line open" : "line"}></span>
      </div>

      {/* Desktop Nav */}
      <ul className="nav-links-desktop">
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Mobile Fullscreen Menu */}
      <div className={`overlay-menu ${menuOpen ? "show" : ""}`}>
        <ul>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
