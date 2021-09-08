import React from "react";

import withLayout from "../../HOC/withLayout";
import Searchbar from "../../components/Searchbar";

function Home() {
  return (
    <div className="row d-flex align-items-center">
      <h1 className="col col-12 col-md-6">Home page</h1>
      <Searchbar classes="col col-12 col-md-6" isHome />
    </div>
  );
}

export default withLayout(Home);
