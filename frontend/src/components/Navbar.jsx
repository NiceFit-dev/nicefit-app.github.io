import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Sobre Nosotros</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/closet">Closet</Link></li>
        <li><Link to="/marketplace">Marketplace</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
