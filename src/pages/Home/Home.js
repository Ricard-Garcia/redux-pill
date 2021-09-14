import React from "react";

import withLayout from "../../hoc/withLayout";
import Searchbar from "../../components/Searchbar";

import "./Home.scss";

function Home() {
  return (
    <>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row">
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Example label
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Example input placeholder"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
                    Another label
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Another input placeholder"
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div>
              </form>
            </div>

            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between home-wrapper row p-5">
        <div className="col col-12 col-md-6 ps-md-4 mb-5 mb-md-0 p-0 m-0">
          <div className="home-title mb-4">Find a perfect place to be</div>
          <div className="home-subtitle">
            With FindPlace™ the perfect fit for your daily life with our list of
            properties. Dream about it and we'll do the rest.
          </div>
        </div>
        <div className="col col-12 col-md-5 pe-md-4 p-0 pt-3 m-0">
          <Searchbar isHome />
        </div>
      </div>
    </>
  );
}

export default withLayout(Home);
