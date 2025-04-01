import React, {useState} from "react";
import CheckboxSelect from "../components/Filter";
import { datageneral } from "../components/Print";

const App = () => {
    const options = [ 
        {value: "Jeans", label: "Jeans"},
        {value: "Shirt", label:"Shirt"},
        {value: "Jacket", label:"Jacket"},
        {value:"Shoes", label:"Shoes"}
    ];
    //const [SelectedCategories, setSeletecCategories] = useState([]); // Estado para almacenar selección de filtros

    // Filtrar los productos según la categoría seleccionada
    //const filteredProduct = SelectedCategories.length > 0
    //    ? datageneral.filter(datageneral => SelectedCategories.includes(datageneral.category))
    //    :datageneral;

    // Función que actualiza la selección
    const handlesSelection = (selectedItems) => {
      console.log("Selected items:", selectedItems);
        //setSeletecCategories(selectedItems);

    };

    return (
    <>
        <div> 
            <h1>Closet</h1>
            <p>Este es tu closet o armario</p>
            <CheckboxSelect options={options} label="Select clothing" onApply={handlesSelection}/>
            
        </div>


            {filteredProduct.map((datageneral) => (
                
        <div>
            < Localimagelist />
        </div>


    </>
    );
};

export default App;


