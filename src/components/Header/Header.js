import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { HOME_URL } from "../../constants/routes";

function Header() {
  const user = useSelector((state) => state.user);

  return (
    <div className="d-flex justify-content-between align-items-center border-bottom bg-light px-4 header">
      <div className="d-flex logo-wrapper">
        <i className="uil uil-home me-3 fs-2" />
        <Link className="link" to={HOME_URL}>
          <h1 className="text-dark page-title fw-bold">FindPlace</h1>
        </Link>
      </div>

      <div className="d-flex align-items-center">
        {user.name && (
          <p className="d-flex align-items-center fw-bold">{user.name}</p>
        )}
        <button
          type="button"
          className="d-none d-md-block btn btn-outline-dark ms-3"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
