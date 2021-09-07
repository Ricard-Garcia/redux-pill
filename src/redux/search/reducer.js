import {
  SET_SEARCH,
  RESET_SEARCH,
  LOADING_SEARCH,
  ERROR_SEARCH,
} from "./types";

import initialState from "./state";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH: {
      return action.payload;
    }
    case RESET_SEARCH: {
      return initialState;
    }
    case LOADING_SEARCH: {
      return "Loading properties";
    }
    case ERROR_SEARCH: {
      return "Nothing found";
    }
    default: {
      return state;
    }
  }
};

export default reducer;
