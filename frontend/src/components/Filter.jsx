import React, {useState} from "react";

const CheckboxSelect = ({ options, label = "Select an option", onApply }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Alterna la visibilidad del menú desplegable
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Maneja la selección de checkboxes
  const handleCheckboxChange = (value) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) // Si está seleccionado, lo quita
        : [...prev, value] // Si no está seleccionado, lo agrega
    );
  };

  // Aplica la selección
  const handleApply = () => {
    onApply && onApply(selectedOptions);
    setIsDropdownOpen(false);
  };

  // Filtra las opciones en base al término de búsqueda
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="checkbox-select">
      <button className="checkbox-select-button" onClick={toggleDropdown}>
        {selectedOptions.length > 0 ? `${selectedOptions.length} selected` : label}
      </button>

      {isDropdownOpen && (
        <div className="checkbox-dropdown">
          <input
            type="text"
            placeholder="Search..."
            className="checkbox-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className="checkbox-list">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
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
              ))
            ) : (
              <li className="no-results">No results found</li>
            )}
          </ul>
          <button className="apply-button" onClick={handleApply}>
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckboxSelect;
