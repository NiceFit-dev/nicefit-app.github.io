import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Importar para navegar
import CheckboxSelect from "../components/Filter"; // Componente reutilizable
import { datageneralMKT } from "../components/Print-Mkt";
import "../styles/Marketplace.css";

const AppMKT = () => {
  const optionsMKT = [ 
    { value: "Jeans", label: "Jeans" },
    { value: "Shirt", label: "Shirt" },
    { value: "Jacket", label: "Jacket" },
    { value: "Shoes", label: "Shoes" }
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate(); // 👈 Hook para navegación

  const filteredProduct = selectedCategories.length > 0
    ? datageneralMKT.filter(item => selectedCategories.includes(item.category))
    : datageneralMKT;

  const handleSelection = (selectedItems) => {
    setSelectedCategories(selectedItems);
  };

  const handleSelect = (product) => {
    navigate("/mix", {
      state: {
        selectedMktClothing: product,
        category: product.category
      }
    });
  };

  return (
    <div className="marketplace">
      <div>
        <h1>Marketplace</h1>
        <p>Este es tu marketplace</p>
        <CheckboxSelect
          options={optionsMKT}
          label="Select clothing"
          onApply={handleSelection}
        />
      </div>

      <div className="product-grid">
        {filteredProduct.map(product => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleSelect(product)}
            style={{ cursor: "pointer" }}
          >
            <img src={product.url} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppMKT;
