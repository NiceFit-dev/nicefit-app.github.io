import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import CheckboxSelectMKT from "../components/Filter-Mkt";
import { datageneralMKT } from "../components/Print-Mkt";

const AppMKT = () => {
    const navigate = useNavigate(); // Hook para la navegación

    const optionsMKT = [ 
        { value: "Jeans", label: "Jeans" },
        { value: "Shirt", label: "Shirt" },
        { value: "Jacket", label: "Jacket" },
        { value: "Shoes", label: "Shoes" }
    ];

    const [SelectedCategoriesMKT, setSelectedCategoriesMKT] = useState([]); // Estado para almacenar selección de filtros

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
        navigate("/mix", { state: { selectedMktClothing: item } }); 
    };

    return (
        <>
            <div>
                <h1>Marketplace</h1>
                <p>Este es tu marketplace</p>
                <CheckboxSelectMKT 
                    options={optionsMKT} 
                    label="Select clothing" 
                    onApply={handleSelectionMKT} 
                />
            </div>

            {filteredProductMKT.map((item) => (
                <div key={item.id}>
                    <img 
                        src={item.url} 
                        alt={item.category} 
                        style={{ cursor: "pointer" }} 
                        onClick={() => handleImageClick(item)} 
                    />
                </div>
            ))}
        </>
    );
};

export default AppMKT;
