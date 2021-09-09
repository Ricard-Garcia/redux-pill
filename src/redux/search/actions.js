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

export const getSearch = (searched) => {
  return async (dispatch) => {
    dispatch(resetSearch());
    dispatch(setSearch(searched));
    dispatch(loadingSearch());

    const { data } = await getSearched(searched);

    dispatch({
      type: GET_SEARCH,
      payload: data,
    });
  };
};

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
    dispatch(loadingSearch());

    const { filteredData } = await getFilteredProperties(searched, query);

    dispatch({
      type: SET_FILTERS,
      payload: filteredData,
    });
  };
};
