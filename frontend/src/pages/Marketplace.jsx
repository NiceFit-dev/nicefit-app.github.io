import React, {useState} from "react";
import CheckboxSelect from "../components/Filter"; //El mismo que ocupa closet, componente reutilizable!
import { datageneralMKT } from "../components/Print-Mkt";
import "../styles/Marketplace.css"


const AppMKT = () => {
  const optionsMKT = [ 
    { value: "Jeans", label: "Jeans" },
    { value: "Shirt", label: "Shirt" },
    { value: "Jacket", label: "Jacket" },
    { value: "Shoes", label: "Shoes" }
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredProduct = selectedCategories.length > 0
    ? datageneralMKT.filter(item => selectedCategories.includes(item.category))
    : datageneralMKT;

  const handleSelection = (selectedItems) => {
    setSelectedCategories(selectedItems);
  };

  return (
    <>
      <div className="marketplace">
        <div>
          <h1>Marketplace</h1>
          <p>Este es tu marketplace</p>
          <CheckboxSelect options={optionsMKT} label="Select clothing" onApply={handleSelection} />
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

export default AppMKT;