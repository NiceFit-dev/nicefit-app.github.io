import React, { useState } from "react";
import CheckboxSelect from "../components/Filter";
import { datageneral } from "../components/Print";
import "../styles/Closet.css";

const App = () => {
    const options = [ 
        { value: "Jeans", label: "Jeans" },
        { value: "Shirt", label: "Shirt" },
        { value: "Jacket", label: "Jacket" },
        { value: "Shoes", label: "Shoes" }
    ];
    const [SelectedCategories, setSelectedCategories] = useState([]);

    // Filtrar los productos según la categoría seleccionada
    const filteredProduct = SelectedCategories.length > 0
        ? datageneral.filter(item => SelectedCategories.includes(item.category))
        : datageneral;

    // Función que actualiza la selección
    const handleSelection = (selectedItems) => {
        setSelectedCategories(selectedItems);
    };

    return (
        <div className="closet-container"> 
            {/* Sección izquierda - Sidebar con filtros */}
            <div className="closet-sidebar">
                <h2>Filtrar Ropa</h2>
                <CheckboxSelect options={options} label="Select clothing" onApply={handleSelection} />
            </div>

            {/* Sección derecha - Galería de imágenes */}
            <div className="closet-content">
                <h1>Closet</h1>
                <p>Este es tu closet o armario</p>

                <div className="closet-grid">
                    {filteredProduct.map((item) => (
                        <img key={item.id} src={item.url} alt={item.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
