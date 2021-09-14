import { combineReducers } from "redux";
import searchReducer from "./search/reducer";
import userReducer from "./user/reducer";

const reducers = combineReducers({
  search: searchReducer,
  user: userReducer,
});

export default reducers;
