import React from "react";

import withLayout from "../../hoc/withLayout";
import Searchbar from "../../components/Searchbar";
import Modal from "../../components/Modal";
import LoginForm from "../../components/LoginForm";

import "./Home.scss";

function Home() {
  return (
    <>
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

      <Modal>
        <LoginForm />
      </Modal>
    </>
  );
}

export default withLayout(Home);
