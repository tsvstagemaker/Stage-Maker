import { GET_USER, UPDATE_USER, UPLOAD_AVATAR } from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPLOAD_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    case UPDATE_USER:
      console.log(state);
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
          };
        } else {
          return user;
        }
      });

    default:
      return state;
  }
}
