import React from "react";

import PropertyCard from "../PropertyCard";

function PropertiesList({ foundProperties }) {
  return (
    <div className="row">
      {foundProperties.map((property) => {
        return <PropertyCard key={property.id} foundProperty={property} />;
      })}
    </div>
  );
}

export default PropertiesList;
