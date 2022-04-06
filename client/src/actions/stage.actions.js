import axios from "axios";

export const GET_STAGE = "GET_STAGE";
export const GET_STAGES = "GET_STAGES";
export const GET_STAGES_USER = "GET_STAGES_USER";
export const UPLOAD_IMG_STAGE = "UPLOAD_IMG_STAGE";
export const UPDATE_STAGE = "UPDATE_STAGE";

export const getStage = (id) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/stage/${id}`)
      .then((res) => {
        dispatch({ type: GET_STAGE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getStagesUser = (userId) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/stage/${userId}`)
      .then((res) => {
        dispatch({ type: GET_STAGES_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getStages = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/stage`)
      .then((res) => {
        dispatch({ type: GET_STAGES, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const editStage = (id, data) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/api/stage/` + id,
      data: { ...data },
    })
      .then((res) => {
        // console.log(res);
        dispatch({ type: UPDATE_STAGE, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};
