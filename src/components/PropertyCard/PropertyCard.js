import React from "react";

function PropertyCard({ foundProperty }) {
  return (
    <div key={foundProperty.id} className="d-flex flex-column">
      <p>{foundProperty.id}</p>
      <p>{foundProperty.city}</p>
    </div>
  );
}

export default PropertyCard;
