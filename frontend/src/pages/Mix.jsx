import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Importamos useLocation
import { datageneral } from "../components/Print";
import MatchClothe from "../components/MatchClothe";
import "../styles/Mix.css";

function Mix() {
    const location = useLocation();
    const selectedMktClothing = location.state?.selectedMktClothing || null;

    const [selectedUserClothing, setSelectedUserClothing] = useState(null);

    // Función para manejar la selección de ropa del armario
    const handleUserClothingSelect = (item) => {
        setSelectedUserClothing(item);
    };

    return (
        <div className="mix-container">
            {/* Contenedor izquierdo */}
            <div className="left-container">
                <h1>Contenedor izquierda</h1>
            </div>

            {/* Contenedor derecho donde trabajas tú */}
            <div className="right-container">
                <h1>Mix de ropa en Marketplace con la ropa de Closet</h1>
                <p>En esta sección va el Mixer de ropa.</p>

                {/* Mostrar solo la prenda seleccionada en Marketplace */}
                {selectedMktClothing && (
                    <div>
                        <h2>Prenda seleccionada del Marketplace</h2>
                        <img 
                            src={selectedMktClothing.url} 
                            alt={selectedMktClothing.name} 
                            style={{ width: 100, margin: 10 }} 
                        />
                    </div>
                )}

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
