import React from "react";
import CheckboxSelect from "../components/Filter";


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
        <div> 
            <h1>Closet</h1>
            <p>Este es tu closet o aramario</p>
            <CheckboxSelect options={options} label="Select cloting" onApply={handlesSelection}/>
        </div>
    );
};

export default App;

