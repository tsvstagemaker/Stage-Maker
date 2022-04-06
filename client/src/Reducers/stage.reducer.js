import { GET_STAGE, UPDATE_STAGE } from "../actions/stage.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STAGE:
      return state;

    case UPDATE_STAGE:
      return state;

    default:
      return state;
  }
}
