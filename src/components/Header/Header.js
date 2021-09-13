import React from "react";
import { Link } from "react-router-dom";

import { HOME_URL } from "../../constants/routes";

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom bg-light px-4 header">
      <div className="d-flex logo-wrapper">
        <i className="uil uil-home me-3 fs-2" />
        <Link className="link" to={HOME_URL}>
          <h1 className="text-dark page-title fw-bold">FindPlace</h1>
        </Link>
      </div>

      <button type="button" className="d-none d-md-block btn btn-outline-dark">
        Login
      </button>
    </div>
  );
}

export default Header;
