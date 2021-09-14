import { SET_USER, RESET_USER } from "./types";

import { setAuth } from "../../api/propertiesApi";
import { HOME_URL } from "../../constants/routes";

export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});

export const getUserData = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await setAuth(email, password);

      const userData = response.data.data;

      console.log(userData, "USER DATA");
      dispatch(setUser(userData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetUser = () => ({
  type: RESET_USER,
});
