import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-title">
        <h1>Dress Nice | Live Nice</h1>
      </div>

      <div className="footer-content">
        <div className="footer-section company-info">
          <h2>NiceFit</h2>
          <p>Dress Nice | Live Nice</p>
          <div className="social-icons">
            {/* Aquí puedes agregar íconos de redes sociales */}
            <span className="icon">🔵</span>
            <span className="icon">⚫</span>
            <span className="icon">🔴</span>
            <span className="icon">⚪</span>
          </div>
        </div>

        <div className="footer-section company-links">
          <h3>EMPRESA</h3>
          <ul>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="payment-methods">
          {/* Aquí puedes poner imágenes de métodos de pago */}
          <span className="payment-icon">💳</span>
          <span className="payment-icon">💰</span>
          <span className="payment-icon">📲</span>
          <span className="payment-icon">📲</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
