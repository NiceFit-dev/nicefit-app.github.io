import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import CheckboxSelectMKT from "../components/Filter-Mkt";
import { datageneralMKT } from "../components/Print-Mkt";
import "../styles/Marketplace.css"; // Importar el CSS

const AppMKT = () => {
    const navigate = useNavigate(); // Hook para la navegación

    const optionsMKT = [ 
        
        { value: "Jacket", label: "Jacket" },
        { value: "Shirt", label: "Shirt" },
        { value: "Jeans", label: "Jeans" },
        { value: "Shoes", label: "Shoes" }
    ];

    const [SelectedCategoriesMKT, setSelectedCategoriesMKT] = useState([]);

    // Filtrar los productos según la categoría seleccionada
    const filteredProductMKT = SelectedCategoriesMKT.length > 0
        ? datageneralMKT.filter(item => SelectedCategoriesMKT.includes(item.category))
        : datageneralMKT;

    // Función que actualiza la selección
    const handleSelectionMKT = (selectedItems) => {
        setSelectedCategoriesMKT(selectedItems);
    };

    // Función para manejar clic en la imagen y redirigir a Mix.jsx con la prenda seleccionada
    const handleImageClick = (item) => {
        navigate("/mix", { state: { selectedMktClothing: item, category: item.category } }); 
    };

    return (
        <div className="marketplace-container"> 
            {/* Sección izquierda - Sidebar con filtros */}
            <div className="marketplace-sidebar">
                <h2>Filtrar Ropa</h2>
                <CheckboxSelectMKT 
                    options={optionsMKT} 
                    label="Select clothing" 
                    onApply={handleSelectionMKT} 
                />
            </div>

            {/* Sección derecha - Galería de imágenes */}
            <div className="marketplace-content">
                <h1>Marketplace</h1>
                <p>Este es tu marketplace</p>

                <div className="marketplace-grid">
                    {filteredProductMKT.map((item) => (
                        <img 
                            key={item.id} 
                            src={item.url} 
                            alt={item.category} 
                            onClick={() => handleImageClick(item)} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppMKT;
