import {
  SET_SEARCH,
  GET_SEARCH,
  SET_FILTERS,
  SET_QUERY,
  RESET_SEARCH,
  LOADING_SEARCH,
  ERROR_SEARCH,
} from "./types";

import { getFilteredProperties } from "../../api/propertiesApi";

export const setSearch = (value) => ({
  type: SET_SEARCH,
  payload: value,
});

export const getSearch = (foundProperties) => ({
  type: GET_SEARCH,
  payload: foundProperties,
});

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});

export const setQuery = (query) => ({ type: SET_QUERY, payload: query });

export const resetSearch = () => ({
  type: RESET_SEARCH,
});

export const loadingSearch = () => ({
  type: LOADING_SEARCH,
});

export const errorSearch = () => ({
  type: ERROR_SEARCH,
});

export const searchAndSet = (searched, query, filters) => {
  return async (dispatch) => {
    try {
      dispatch(loadingSearch());
      const filteredQuery = await getFilteredProperties(searched, query);
      console.log("Filtered query --> ", filteredQuery);

      // Setting properties to state
      dispatch(getSearch(filteredQuery.data.data));
      // Setting searched text to state
      dispatch(setSearch(searched));
      // Setting filters to state
      dispatch(setFilters(filters));
      // Set query
      dispatch(setQuery(query));
    } catch (error) {
      console.log(error);
    }
  };
};
