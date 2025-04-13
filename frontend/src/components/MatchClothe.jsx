import React from "react";

function MatchClothe({ selectedMktClothing, selectedUserClothing }) {
  if (!selectedMktClothing || !selectedUserClothing) {
    return <p>Selecciona una prenda de la tienda y una de tu armario para compararlas.</p>;
  }

  return (
    <div>
      <h2>Comparación de prendas</h2>
      <div>
        <h3>Prenda de la tienda</h3>
        <img src={selectedMktClothing.url} alt={selectedMktClothing.name} />
        <p>{selectedMktClothing.name}</p>
        <p>{selectedMktClothing.category}</p>
      </div>
      <div>
        <h3>Prenda de tu armario</h3>
        <img src={selectedUserClothing.url} alt={selectedUserClothing.name} />
        <p>{selectedUserClothing.name}</p>
        <p>{selectedUserClothing.category}</p>
      </div>
    </div>
  );
}

export default MatchClothe;
