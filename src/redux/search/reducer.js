import {
  SET_SEARCH,
  GET_SEARCH,
  SET_FILTERS,
  SET_QUERY,
  RESET_SEARCH,
  LOADING_SEARCH,
  ERROR_SEARCH,
} from "./types";

import initialState from "./state";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH: {
      return {
        ...state,
        searchedText: action.payload,
        isLoading: false,
      };
    }
    case GET_SEARCH: {
      return { ...state, foundProperties: action.payload, isLoading: false };
    }
    case SET_FILTERS: {
      return {
        ...state,
        filterActive: true,
        isLoading: false,
        filters: {
          ...action.payload,
        },
      };
    }
    case SET_QUERY: {
      return { ...state, filteredQuery: action.payload };
    }
    case RESET_SEARCH: {
      return initialState;
    }
    case LOADING_SEARCH: {
      return {
        ...state,
        // searchedText: "Loading properties",
        isLoading: true,
      };
    }
    case ERROR_SEARCH: {
      return {
        ...state,
        searchedText: "Nothing found",
        hasError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
