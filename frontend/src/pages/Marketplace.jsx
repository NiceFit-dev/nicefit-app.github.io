import React, {useState} from "react";
import CheckboxSelectMKT from "../components/Filter-Mkt";


const AppMKT = () => {
    const optionsMKT = [ 
        {value: "Jeans", label: "Jeans"},
        {value: "Shirt", label:"Shirt"},
        {value: "Jacket", label:"Jacket"},
        {value:"Shoes", label:"Shoes"}
    ];
    const [SelectedCategoriesMKT, setSeletecCategoriesMKT] = useState([]); // Estado para almacenar selección de filtros

    // Filtrar los productos según la categoría seleccionada
    

    // Función que actualiza la selección
    const handlesSelectionMKT = (selectedItems) => {
        setSeletecCategoriesMKT(selectedItems);

    };

    return (
    <>
        <div> 
            <h1>Marketplace</h1>
            <p>Este es tu marketplace</p>
            <CheckboxSelectMKT options={optionsMKT} label="Select clothing" onApply={handlesSelectionMKT}/>
            
        </div>
          
        
    
    </>
    );
};

export default AppMKT;
