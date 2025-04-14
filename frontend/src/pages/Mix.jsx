import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { datageneral } from "../components/Print";
import "../styles/Mix.css";
import { datageneralMKT } from "../components/Print-Mkt";

function Mix() {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedMktClothing = location.state?.selectedMktClothing || null;
    const categoryFromMKT = location.state?.category || null;

    const [selectedUserClothing, setSelectedUserClothing] = useState(null);

    const handleUserClothingSelect = (item) => {
        setSelectedUserClothing(item);
    };

    const filteredUserClothing = () => {
        return datageneral.filter(item => item.category !== categoryFromMKT);
    };

    const groupByCategory = (clothes) => {
        return clothes.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
        }, {});
    };

    const groupedClothing = groupByCategory(filteredUserClothing());

    const categoryOrder = ["Jacket", "Shirt", "Jeans", "Shoes"];
    const orderedCategories = categoryOrder.filter(category => groupedClothing[category]);

    if (!selectedMktClothing) {
        return (
            <div style={{ padding: 20 }}>
                <h2>No se ha seleccionado ninguna prenda del Marketplace.</h2>
                <button onClick={() => navigate(-1)}>Volver al Marketplace</button>
            </div>
        );
    }

    return (
        <div className="mix-container">
            <div className="left-container">
                <div>
                    <h1>{selectedMktClothing.name}</h1>
                    <img 
                        src={selectedMktClothing.url}
                        alt={selectedMktClothing.name}
                        style={{ cursor: "pointer", width: 500, margin: 10 }}
                    />
                    <p><strong>Precio:</strong> {selectedMktClothing.price}</p>
                    <p><strong>Categoría:</strong> {selectedMktClothing.category}</p>
                    <p><strong>Talla:</strong> {selectedMktClothing.size}</p>
                </div>
            </div>

            <div className="right-container">
                <div className="selected-clothing">
                    <h2>Prenda seleccionada</h2>
                    <img
                        key={selectedMktClothing.id}
                        src={selectedMktClothing.url}
                        alt={selectedMktClothing.name}
                        style={{ cursor: "pointer", width: 150, margin: 10 }}
                    />
                </div>

                {orderedCategories.map((category) => (
                    <div key={category} className="category-row">
                        <h3>{category}</h3>
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

                {selectedUserClothing && (
                    <div className="selected-user-clothing">
                        <h2>Prenda del armario seleccionada</h2>
                        <img
                            src={selectedUserClothing.url}
                            alt={selectedUserClothing.name}
                            style={{ cursor: "pointer", width: 150, margin: 10 }}
                        />
                        <p><strong>Nombre:</strong> {selectedUserClothing.name}</p>
                        <p><strong>Categoría:</strong> {selectedUserClothing.category}</p>
                        <p><strong>Talla:</strong> {selectedUserClothing.size}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Mix;
