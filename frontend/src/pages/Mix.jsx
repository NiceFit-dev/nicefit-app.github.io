import React, { useState } from "react";
import { datageneralMKT } from "../components/Print-Mkt";
import { datageneral } from "../components/Print";
import MatchClothe from "../components/MatchClothe";
import "../styles/Mix.css"; // Ruta al archivo CSS

function Mix() {
  // Estado para las prendas seleccionadas
  const [selectedMktClothing, setSelectedMktClothing] = useState(null);
  const [selectedUserClothing, setSelectedUserClothing] = useState(null);

  // Función para manejar la selección de ropa de la tienda
  const handleMktClothingSelect = (item) => {
    setSelectedMktClothing(item);
  };

  // Función para manejar la selección de ropa del armario
  const handleUserClothingSelect = (item) => {
    setSelectedUserClothing(item);
  };

  return (
    <div className="mix-container">
      {/* Contenedor izquierdo */}
      <div className="left-container">
        <h1>Contenedor izquierda</h1>
        {/* Aquí puedes agregar el componente o contenido que tu colega quiere */}
      </div>

      {/* Contenedor derecho donde trabajas tú */}
      <div className="right-container">
        <h1>Mix de ropa en Marketplace con la ropa de Closet</h1>
        <p>En esta sección va el Mixer de ropa.</p>

        {/* Mostrar ropa de la tienda */}
        <div>
          <h2>Ropa disponible en la tienda</h2>
          {datageneralMKT.map((item) => (
            <img
              key={item.id}
              src={item.url}
              alt={item.name}
              onClick={() => handleMktClothingSelect(item)}
              style={{ cursor: "pointer", width: 100, margin: 10 }}
            />
          ))}
        </div>

        {/* Mostrar ropa del armario del usuario */}
        <div>
          <h2>Ropa de tu armario</h2>
          {datageneral.map((item) => (
            <img
              key={item.id}
              src={item.url}
              alt={item.name}
              onClick={() => handleUserClothingSelect(item)}
              style={{ cursor: "pointer", width: 100, margin: 10 }}
            />
          ))}
        </div>

        {/* Mostrar la comparación de las prendas seleccionadas */}
        <MatchClothe 
          selectedMktClothing={selectedMktClothing} 
          selectedUserClothing={selectedUserClothing}
        />
      </div>
    </div>
  );
}

export default Mix;
