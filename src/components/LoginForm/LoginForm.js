import React, { useRef } from "react";

function LoginForm() {
  const emailInput = useRef();
  const passInput = useRef();

  return (
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
  );
}

export default LoginForm;
