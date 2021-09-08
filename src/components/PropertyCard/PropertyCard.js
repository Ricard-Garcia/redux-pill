import React from "react";

import "./PropertyCard.scss";

function PropertyCard({ foundProperty }) {
  return (
    <div className="col col-12 col-md-6 property-card mb-4 p-0">
      <img
        className="rounded"
        src={foundProperty.imageURL}
        alt={foundProperty.city}
      />
      <div className="right-card rounded custom-background-color p-4">
        <div className="top-part mb-5">
          <p className="fs-1 title">{foundProperty.title}</p>
          <p>{foundProperty.city}</p>
        </div>
        <div className="bottom-part d-flex flex-column">
          <div className="rooms d-flex property-caption">
            <i className="uil uil-bed-double me-2" />
            <div>{foundProperty.room}</div>
          </div>
          <div className="bath d-flex property-caption">
            <i className="uil uil-bath me-2" />
            <div>{foundProperty.bath}</div>
          </div>
          <div className="sixe d-flex property-caption">
            <i className="uil uil-ruler me-2" />
            <div>{foundProperty.size}m²</div>
          </div>
          <div className="cost d-flex property-caption mb-4">
            <i className="uil uil-money-bill me-2" />
            <div>${foundProperty.price}/month</div>
          </div>

          {/* Other utilities */}
          <div className="other d-flex property-caption">
            {foundProperty.pet && "Pets are allowed. "}
            {foundProperty.lift && "Aparment has lift. "}
            {foundProperty.garden && "Aparment has garden. "}
            {foundProperty.air_conditioning &&
              "Aparment has air conditioning. "}
            {foundProperty.swimming_pool && "Aparment has swimming pool. "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
