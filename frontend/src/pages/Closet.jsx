import React, {useState} from "react";
import CheckboxSelect from "../components/Filter";
//import M_Jacket_1 from "../assets/Ropa_Armario/Jacket/Man/M_Jacket_1.jpg";
import Products from "../components/Print/";

const App = () => {
    const options = [ 
        {value: "jeans", label: "jeans"},
        {value: "shirt", label:"shirt"},
        {value: "jacket", label:"jacket"},
        {value:"shoes", label:"shoes"}
    ];

    const handlesSelection = (selectedItems) => {
        console.log("Selected items:", selectedItems);

    };
    

    
    return (
    <>
        <div> 
            <h1>Closet</h1>
            <p>Este es tu closet o armario</p>
            <CheckboxSelect options={options} label="Select clothing" onApply={handlesSelection}/>
            
        </div>
        <div>
               <Products />
        </div>
        
    
    </>
    );
};

export default App;


