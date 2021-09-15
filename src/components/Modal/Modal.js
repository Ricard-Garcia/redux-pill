import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/user/actions";
import { HOME_URL } from "../../constants/routes";
import cn from "clsx";

function Modal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const emailInput = useRef();
  const passInput = useRef();

  function handleLogIn() {
    dispatch(getUserData(emailInput.current.value, passInput.current.value));
    // console.log("Logged in");
  }

  useEffect(() => {
    // console.log(user.isLogged, "IS LOGGED");
    if (user.isLogged === true) {
      history.push(HOME_URL);
    }
  }, [user.isLogged]);

  const modalClasses = cn({
    "modal fade": !user.isLogged,
    "modal fade hide": user.isLogged,
  });

  return (
    <div
      className={modalClasses}
      id="loginModal"
      data-bs-backdrop="false"
      data-bs-keyboard="true"
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
          <div className="modal-body">
            {/* ! Form */}
            <div className="row g-4">
              <div className="col-12">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  ref={emailInput}
                />
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  ref={passInput}
                />
              </div>
            </div>
          </div>
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
