// Browser.jsx
import React from "react";
import "./Browser.css"; // Importamos los estilos

const Browser = () => {
  return (
    <div className="browser-container">
      {/* Header del navegador */}
      <header className="browser-header">
        {/* Aquí irá la barra de direcciones y los controles de navegación */}
        {/* TODO: Agregar un input para la URL y botones para navegar */}
      </header>
      
      {/* Contenido del navegador */}
      <main className="browser-content">
        {/* Aquí se mostrará el contenido cargado */}
        {/* TODO: Implementar renderizado de páginas web */}
      </main>
    </div>
  );
};

export default Browser;
