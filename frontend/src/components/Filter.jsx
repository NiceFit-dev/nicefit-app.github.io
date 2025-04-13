import React, { useState } from "react";
import "../styles/Filter.css"
import vectorIcon from "../assets/Vector.png";

const CheckboxSelect = ({ options, label = "Select an option", onApply }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Maneja selección/deselección de opciones
  const handleCheckboxChange = (value) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Aplica la selección manualmente al hacer clic
  const handleApply = () => {
    onApply && onApply(selectedOptions);
  };

  return (
    <div className="checkbox-select">
      <div className="checkbox-title">
        <h3>{label}</h3>
        <img src={vectorIcon} alt="icono filtro" width="24" height="24" />
      </div>

      <ul className="checkbox-list">
        {options.map((option) => (
          <li key={option.value} className="checkbox-item">
            <label>
              <span>{option.label}</span>
              <input
                type="checkbox"
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
              />
            </label>
          </li>
        ))}
      </ul>
      <button className="apply-button" onClick={handleApply}>
        Apply Filter
      </button>
    </div>
  );
};

export default CheckboxSelect;
