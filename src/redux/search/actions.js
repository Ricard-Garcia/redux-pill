import {
  SET_SEARCH,
  GET_SEARCH,
  RESET_SEARCH,
  LOADING_SEARCH,
  ERROR_SEARCH,
  SET_FILTERS,
} from "./types";

import { getSearched, getFilteredProperties } from "../../api/propertiesApi";

export const setSearch = (value) => ({
  type: SET_SEARCH,
  payload: value,
});

// export const getSearch = (searched) => {
//   return async (dispatch) => {
//     console.log("getSearch!");
//     dispatch(resetSearch());
//     dispatch(setSearch(searched));
//     dispatch(loadingSearch());

//     // !! Move getFilteredProperties here

//     const { data } = await getSearched(searched);

//     dispatch({
//       type: GET_SEARCH,
//       payload: data,
//     });
//   };
// };

export const resetSearch = () => ({
  type: RESET_SEARCH,
});

export const loadingSearch = () => ({
  type: LOADING_SEARCH,
});

export const errorSearch = () => ({
  type: ERROR_SEARCH,
});

export const setFilters = (searched, query) => {
  return async (dispatch) => {
    try {
      console.log("setFilters!");
      // dispatch(loadingSearch());

      const filteredQuery = await getFilteredProperties(searched, query);

      // Setting filters to state
      dispatch({ type: GET_SEARCH, payload: filteredQuery.data });
      dispatch(setSearch(searched));

      // console.log("Searched", searchedText);
      // Setting searched text to state
      // dispatch(setSearch(searched));
    } catch (error) {
      console.log(error);
    }
  };
};
