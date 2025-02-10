import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <Outlet /> {/* Aquí se renderizarán las páginas */}
      </main>
    </div>
  );
};

export default Layout;
