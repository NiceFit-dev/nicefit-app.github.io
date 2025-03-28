import React, {useState} from "react";

const CheckboxSelectMKT = ({ options, label = "Select an option", onApply }) => {
  const [selectedOptionsMKT, setSelectedOptionsMKT] = useState([]);
  const [isDropdownOpenMKT, setIsDropdownOpenMKT] = useState(false);
  const [searchTermMKT, setSearchTermMKT] = useState("");

  // Alterna la visibilidad del menú desplegable
  const toggleDropdownMKT = () => {
    setIsDropdownOpenMKT(!isDropdownOpenMKT);
  };

  // Maneja la selección de checkboxes
  const handleCheckboxChangeMKT = (value) => {
    setSelectedOptionsMKT((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) // Si está seleccionado, lo quita
        : [...prev, value] // Si no está seleccionado, lo agrega
    );
  };

  // Aplica la selección
  const handleApply = () => {
    onApply && onApply(selectedOptionsMKT);
    setIsDropdownOpenMKT(false);
  };

  // Filtra las opciones en base al término de búsqueda
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTermMKT.toLowerCase())
  );

  return (
    <div className="checkbox-select">
      <button className="checkbox-select-button" onClick={toggleDropdownMKT}>
        {selectedOptionsMKT.length > 0 ? `${selectedOptionsMKT.length} selected` : label}
      </button>

      {isDropdownOpenMKT && (
        <div className="checkbox-dropdown">
          <input
            type="text"
            placeholder="Search..."
            className="checkbox-search"
            value={searchTermMKT}
            onChange={(e) => setSearchTermMKT(e.target.value)}
          />
          <ul className="checkbox-list">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li key={option.value}>
                  <label>
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={selectedOptionsMKT.includes(option.value)}
                      onChange={() => handleCheckboxChangeMKT(option.value)}
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

export default CheckboxSelectMKT;