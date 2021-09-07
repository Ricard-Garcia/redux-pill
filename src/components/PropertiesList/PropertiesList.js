import React from "react";

import PropertyCard from "../PropertyCard";

function PropertiesList({ foundProperties }) {
  // Redux properties
  // const properties = [{ name: "p1" }, { name: "p2" }];

  console.log(foundProperties, "Found properties!");

  return (
    <div className="d-flex flex-column">
      {foundProperties.map((property) => {
        return <PropertyCard foundProperty={property} />;
      })}
    </div>
  );
}

export default PropertiesList;
