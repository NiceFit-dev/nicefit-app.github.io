import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Importamos useLocation
import { datageneral } from "../components/Print";
import "../styles/Mix.css";

function Mix() {
    const location = useLocation();
    const selectedMktClothing = location.state?.selectedMktClothing || null;
    const categoryFromMKT = location.state?.category || null;  // Recibimos la categoría de la prenda seleccionada

    const [selectedUserClothing, setSelectedUserClothing] = useState(null);

    // Función para manejar la selección de ropa del armario
    const handleUserClothingSelect = (item) => {
        setSelectedUserClothing(item);
    };

    // Filtrar ropa del armario para mostrar solo las prendas que no sean de la categoría seleccionada
    const filteredUserClothing = () => {
        return datageneral.filter(item => item.category !== categoryFromMKT);
    };

    // Función para agrupar prendas por categoría
    const groupByCategory = (clothes) => {
        return clothes.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
        }, {});
    };

    // Agrupamos las prendas por categorías
    const groupedClothing = groupByCategory(filteredUserClothing());

    // Orden de categorías preferido
    const categoryOrder = ["Jacket", "Shirt", "Jeans", "Shoes"];

    // Asegurarnos de que las categorías se muestren en el orden deseado
    const orderedCategories = categoryOrder.filter(category => groupedClothing[category]);

    return (
        <div className="mix-container">
            <div className="left-container">
                <h1>Contenedor izquierdo</h1>
            </div>

            <div className="right-container">
                {/* Mostrar solo la prenda seleccionada */}
                {selectedMktClothing && (
                    <div className="selected-clothing">
                        <h2>Prenda seleccionada</h2>
                        <img
                            key={selectedMktClothing.id}
                            src={selectedMktClothing.url}
                            alt={selectedMktClothing.name}
                            style={{ cursor: "pointer", width: 150, margin: 10 }}
                        />
                    </div>
                )}

                {/* Mostrar la ropa agrupada por categorías en el orden deseado */}
                {orderedCategories.map((category) => (
                    <div key={category} className="category-row">
                        
                        {groupedClothing[category].map((item) => (
                            <img
                                key={item.id}
                                src={item.url}
                                alt={item.name}
                                onClick={() => handleUserClothingSelect(item)}
                                style={{ cursor: "pointer", width: 100, margin: 10 }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mix;
