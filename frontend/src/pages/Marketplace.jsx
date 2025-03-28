import React, {useState} from "react";
import CheckboxSelectMKT from "../components/Filter";


const AppMKT = () => {
    const optionsMKT = [ 
        {value: "Jeans", label: "Jeans"},
        {value: "Shirt", label:"Shirt"},
        {value: "Jacket", label:"Jacket"},
        {value:"Shoes", label:"Shoes"}
    ];
    const [SelectedCategoriesMKT, setSeletecCategoriesMKT] = useState([]); // Estado para almacenar selección de filtros

    // Filtrar los productos según la categoría seleccionada
    const filteredProduct = SelectedCategoriesMKT.length > 0
        ? datageneral.filter(datageneral => SelectedCategoriesMKT.includes(datageneral.category))
        :datageneral;

    // Función que actualiza la selección
    const handlesSelectionMKT = (selectedItems) => {
        setSeletecCategoriesMKT(selectedItems);

    };

    return (
    <>
        <div> 
            <h1>Closet</h1>
            <p>Este es tu closet o armario</p>
            <CheckboxSelectMKT options={options} label="Select clothing" onApply={handlesSelectionMKT}/>
            
        </div>
            {filteredProduct.map((datageneral) => (
                <div
                    key={datageneral.id} >
                        <img src={datageneral.url} alt={datageneral.category}/>
                </div>
            ))}
        
    
    </>
    );
};

export default AppMKT;
