import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_AVATAR = "UPLOAD_AVATAR";
export const UPDATE_USER = "UPDATE_USER";

export const getUser = (id) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/user/${id}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const uploadAvatar = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}/api/user/upload`, data)
      .then((res) => {
        return axios
          .get(`${process.env.REACT_APP_API_URL}/api/user/${id}`)
          .then((res) => {
            dispatch({ type: UPLOAD_AVATAR, payload: res.data.avatar });
          });
      })

      .catch((err) => console.log(err));
  };
};

export const editProfile = (id, data) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/api/user/` + id,
      data: { ...data },
    })
      .then((res) => {
        // console.log(res);
        dispatch({ type: UPDATE_USER, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};
