import {
  SET_SEARCH,
  RESET_SEARCH,
  LOADING_SEARCH,
  ERROR_SEARCH,
} from "./types";

export const setSearch = (value) => ({
  type: SET_SEARCH,
  payload: value,
});

export const resetSearch = () => ({
  type: RESET_SEARCH,
});

export const loadingSearch = () => ({
  type: LOADING_SEARCH,
});

export const errorSearch = () => ({
  type: ERROR_SEARCH,
});
