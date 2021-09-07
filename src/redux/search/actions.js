import {
  SET_SEARCH,
  GET_SEARCH,
  RESET_SEARCH,
  LOADING_SEARCH,
  ERROR_SEARCH,
} from "./types";

import { getAllProperties } from "../../api/propertiesApi";

export const setSearch = (value) => ({
  type: SET_SEARCH,
  payload: value,
});

export const getSearch = () => {
  return async (dispatch) => {
    dispatch(loadingSearch());

    const { data } = await getAllProperties();

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
