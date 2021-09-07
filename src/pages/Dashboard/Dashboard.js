import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import withLayout from "../../HOC/withLayout";
import PropertiesList from "../../components/PropertiesList";

import { getAllProperties } from "../../api/propertiesApi";

function Dashboard() {
  const search = useSelector((state) => state.search);

  const [loadedProperties, setLoadedProperties] = useState([]);

  const loadInitialProperties = async () => {
    try {
      const { data } = await getAllProperties();
      setLoadedProperties(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadInitialProperties();
  }, []);

  return (
    <div>
      <h1>Dashboard page</h1>
      <p>This is what you searched {search.searchedText}</p>
      <PropertiesList foundProperties={search.foundProperties} />
    </div>
  );
}

export default withLayout(Dashboard);
