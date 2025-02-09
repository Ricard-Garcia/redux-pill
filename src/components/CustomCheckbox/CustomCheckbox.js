import React from "react";

import "./CustomCheckbox.scss";

function CustomCheckbox({ name, value, title, onChange, isChecked }) {
  return (
    <label className="col d-flex align-items-center container">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <div className="custom-checkbox border  border-dark border-1 me-2" />
      {title}
    </label>
  );
}

export default CustomCheckbox;
