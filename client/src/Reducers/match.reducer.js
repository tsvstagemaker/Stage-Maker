import {
  GET_MATCH,
  GET_MATCHS,
  GET_MATCHS_USER,
  GET_MATCHS_USER_SHARED,
  UPDATE_MATCH,
  UPLOAD_IMG_MATCH,
} from "../actions/match.actions";

const initialState = {};

export default function matchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MATCH:
      return action.payload;

    case GET_MATCHS:
      return action.payload;

    case GET_MATCHS_USER:
      return state;

    case GET_MATCHS_USER_SHARED:
      return state;

    case UPLOAD_IMG_MATCH:
      return state;

    case UPDATE_MATCH:
      return state;

    default:
      return state;
  }
}
