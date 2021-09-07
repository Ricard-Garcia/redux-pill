import React from "react";

import "./PropertyCard.scss";

function PropertyCard({ foundProperty }) {
  return (
    <div className="d-flex flex-column">
      <p>{foundProperty.id}</p>
      <p>{foundProperty.city}</p>
    </div>
  );
}

export default PropertyCard;
