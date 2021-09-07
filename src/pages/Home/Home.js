import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearch, getSearch } from "../../redux/search/actions";

import { DASHBOARD_URL } from "../../constants/routes";

import withLayout from "../../HOC/withLayout";

function Home() {
  const history = useHistory();
  const searchInput = useRef();
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(setSearch(searchInput.current.value));
    dispatch(getSearch());
    history.push(DASHBOARD_URL);
  }

  return (
    <div>
      <h1>Home page</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={searchInput}
          type="text"
          placeholder={search.searchedText}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default withLayout(Home);
