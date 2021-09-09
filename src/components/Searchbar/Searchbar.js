import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setFilters } from "../../redux/search/actions";
import { getQuery } from "../../utils/utils";

import { DASHBOARD_URL } from "../../constants/routes";

import "./Searchbar.scss";

function Searchbar({ classes, isHome }) {
  const totalClasses = classes + " rounded container-fluid d-flex p-0";
  const stateFilters = useSelector((state) => state.search.filters);

  const query = getQuery(stateFilters);
  console.log("query!", query);

  const history = useHistory();
  const searchInput = useRef();
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const searchedText = searchInput.current.value;
    dispatch(setFilters(searchedText, query));
    if (isHome) {
      console.log("Needs redirect?", isHome);
      history.push(DASHBOARD_URL);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={totalClasses}>
      <input
        ref={searchInput}
        type="text"
        placeholder={search.searchedText}
        className="border-end-0 rounded-start border bg-light px-3"
      />
      <button className="border-0 text-light bg-dark rounded-end" type="submit">
        Search
      </button>
    </form>
  );
}

export default Searchbar;
