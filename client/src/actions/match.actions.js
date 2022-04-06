import axios from "axios";

export const GET_MATCH = "GET_MATCH";
export const GET_MATCHS = "GET_MATCHS";
export const GET_MATCHS_USER = "GET_MATCHS_USER";
export const GET_MATCHS_USER_SHARED = "GET_MATCHS_USER_SHARED";
export const UPLOAD_IMG_MATCH = "UPLOAD_IMG_MATCH";
export const UPDATE_MATCH = "UPDATE_MATCH";

export const getMatch = (id) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/match/${id}`)
      .then((res) => {
        dispatch({ type: GET_MATCH, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getMatchsUser = (userId) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/match/${userId}`)
      .then((res) => {
        dispatch({ type: GET_MATCHS_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getUserMatchShared = (userId) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/match/${userId}`)
      .then((res) => {
        dispatch({ type: GET_MATCHS_USER_SHARED, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getMatchs = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/match`)
      .then((res) => {
        dispatch({ type: GET_MATCHS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const editMatch = (id, data) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/api/match/` + id,
      data: { ...data },
    })
      .then((res) => {
        // console.log(res);
        dispatch({ type: UPDATE_MATCH, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};
