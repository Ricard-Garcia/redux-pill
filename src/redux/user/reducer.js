import { SET_USER, RESET_USER } from "./types";

import initialUserState from "./state";

const reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        name: action.payload.name,
        token: action.payload.token,
        isLogged: true,
      };
    }
    case RESET_USER: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
