import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function withLayout(WrappedComponent) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <div>
        <Header />
        <Main>
          <WrappedComponent {...props} />
        </Main>
        <Footer />
      </div>
    );
  }
  return WrapperComponent;
}
export default withLayout;
