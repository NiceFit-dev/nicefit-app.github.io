import React, { useState } from "react";

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
      <h3>{label}</h3>
      <ul className="checkbox-list">
        {options.map((option) => (
          <li key={option.value}>
            <label>
              <input
                type="checkbox"
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
              />
              {option.label}
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
