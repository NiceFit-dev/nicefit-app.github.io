import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import "./styles/Layout.css"; // Asegúrate de importar el CSS

//Aquí se maneja la estructura de la pagina, lo que mantienen en todo momento el header, navbar, footer, entre otros.

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <Navbar />
      </header>

      <main className="main-content">
        <Outlet /> {/* Aquí se renderizarán las páginas */}
      </main>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
