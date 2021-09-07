import React from "react";

import PropertyCard from "../PropertyCard";

function PropertiesList({ foundProperties }) {
  console.log(foundProperties, "Found properties!");

  return (
    <div className="d-flex flex-column">
      {foundProperties.map((property) => {
        return <PropertyCard key={property.id} foundProperty={property} />;
      })}
    </div>
  );
}

export default PropertiesList;
