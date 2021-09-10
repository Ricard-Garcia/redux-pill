import React from "react";
import { useSelector } from "react-redux";

import withLayout from "../../hoc/withLayout";

import PropertiesList from "../../components/PropertiesList";
import FilterList from "../../components/FiltersList";

function Dashboard() {
  const search = useSelector((state) => state.search);

  return (
    <>
      <h1 className="m-2 fw-light">Found properties</h1>
      <FilterList />
      <PropertiesList foundProperties={search.foundProperties} />
    </>
  );
}

export default withLayout(Dashboard);
