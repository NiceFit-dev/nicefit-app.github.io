import React, { useState } from "react";
import CheckboxSelect from "../components/Filter";
import { datageneral } from "../components/Print";
import "../styles/Closet.css";


const App = () => {
    const options = [ 
        { value: "Jacket", label: "Jacket" },
        { value: "Shirt", label: "Shirt" },
        { value: "Jeans", label: "Jeans" },
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

        <>
            <div className="closet">
                <div>
                    <h1>Closet</h1>
                    <p>Este es tu closet o armario</p>
                    <CheckboxSelect options={options} label="Filtros" onApply={handleSelection} />
                </div>

                <div className="product-grid">
                    {filteredProduct.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.url} alt={product.name} />
                            <p>{product.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default App;
