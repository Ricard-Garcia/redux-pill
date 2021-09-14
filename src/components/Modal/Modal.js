import React from "react";

function Modal({ children }) {
  function handleLogIn() {
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    console.log("Logged in");
    console.log(email, password);
  }

  return (
    <div
      className="modal fade"
      id="loginModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">
              Fill form to log
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={handleLogIn}
              type="button"
              className="btn btn-dark"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
