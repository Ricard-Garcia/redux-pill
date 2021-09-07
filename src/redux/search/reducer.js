import {
  SET_SEARCH,
  GET_SEARCH,
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
    case RESET_SEARCH: {
      return initialState;
    }
    case LOADING_SEARCH: {
      return {
        ...state,
        searchedText: "Loading properties",
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
