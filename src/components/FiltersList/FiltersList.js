import React from "react";

import "./FiltersList.scss";

function FiltersList({ foundProperties }) {
  console.log(foundProperties, "Found properties!");

  return (
    <div className="row filter-wrapper bg-light border rounded g-3 mb-4 p-3">
      {/* <p>This is what you searched {search.searchedText}</p> */}
      <div className="col col-4 filter-column">First col</div>
      <div className="col col-4 filter-column">Second col</div>
      <div className="col col-4 filter-column">Third col</div>
    </div>
  );
}

export default FiltersList;
