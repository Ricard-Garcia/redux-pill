import React from "react";
import { useLocation } from "react-router-dom";

function Main({ children }) {
  // !!! Move to utils
  const location = useLocation();
  const pathName = location.pathname;

  let isHome = false;

  if (pathName === "/") {
    isHome = true;
  }

  return (
    <div
      className={
        isHome
          ? "d-flex align-items-center justify-content-center main main-home px-4 px-md-5"
          : "d-flex main px-4 px-md-5 py-3"
      }
    >
      <div className="d-flex flex-column w-100 p-0 px-md-4">{children}</div>
    </div>
  );
}

export default Main;
