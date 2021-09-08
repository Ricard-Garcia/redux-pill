import React from "react";

import "./CustomCheckbox.scss";

function CustomCheckbox({ name, isChecked }) {
  return (
    <label className="col d-flex align-items-center container">
      <input type="checkbox" checked={isChecked} />
      <div className="custom-checkbox border  border-dark border-1 me-2" />
      {name}
    </label>
  );
}

export default CustomCheckbox;
