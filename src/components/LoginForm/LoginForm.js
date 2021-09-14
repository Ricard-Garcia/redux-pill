import React from "react";

function LoginForm() {
  return (
    <div className="row g-4">
      <div className="col-12">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="inputEmail" />
      </div>

      <div className="col-12 mb-3">
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="inputPassword" />
      </div>
    </div>
  );
}

export default LoginForm;
