import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import carrito from "../assets/Img-Pag/carrito.png"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-title">NiceFit</div>
        <input type="text" className="navbar-search" placeholder="Search for products..." />
        <div className="navbar-icons">
          <img src={carrito} height={30}></img>
          <span className="icon">👤</span>
        </div>
      </div>
      <ul className="navbar-links">
        <li><Link to="/marketplace">MARKETPLACE</Link></li>
        <li><Link to="/closet">ARMARIO</Link></li>
        <li><Link to="/">HOME</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
