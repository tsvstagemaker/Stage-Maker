import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";
import matchReducer from "./match.reducer";
import stageReducer from "./stage.reducer";

export default combineReducers({
  userReducer,
  usersReducer,
  matchReducer,
  stageReducer,
});
