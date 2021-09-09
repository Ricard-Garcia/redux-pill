import React from "react";
import { useSelector } from "react-redux";

import withLayout from "../../HOC/withLayout";

import PropertiesList from "../../components/PropertiesList";
import FilterList from "../../components/FiltersList";

// import { getAllProperties } from "../../api/propertiesApi";

function Dashboard() {
  const search = useSelector((state) => state.search);

  return (
    <>
      <h1 className="mb-4">Found properties</h1>
      <FilterList />
      <PropertiesList foundProperties={search.foundProperties} />
    </>
  );
}

export default withLayout(Dashboard);
