import React, {useState} from "react";
import CheckboxSelect from "../components/Filter";
import { datageneral } from "../components/Print";
import "../styles/Closet.css"

const App = () => {
    const options = [ 
        {value: "Jeans", label: "Jeans"},
        {value: "Shirt", label:"Shirt"},
        {value: "Jacket", label:"Jacket"},
        {value:"Shoes", label:"Shoes"}
    ];
    const [SelectedCategories, setSeletecCategories] = useState([]); // Estado para almacenar selección de filtros

    // Filtrar los productos según la categoría seleccionada
    const filteredProduct = SelectedCategories.length > 0
        ? datageneral.filter(datageneral => SelectedCategories.includes(datageneral.category))
        :datageneral;

    // Función que actualiza la selección
    const handlesSelection = (selectedItems) => {
        setSeletecCategories(selectedItems);

    };

    return (
        <>
            <div className="closet">
                <div>
                    <h1>Closet</h1>
                    <p>Este es tu closet o armario</p>
                    <CheckboxSelect options={options} label="Filtros" onApply={handlesSelection} />
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