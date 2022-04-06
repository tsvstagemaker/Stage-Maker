import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadAvatar } from "../../actions/user.actions";

export default function UploadAvatar() {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const handleAvatar = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", userData.username);
    data.append("id", userData.id);
    data.append("file", file);

    dispatch(uploadAvatar(data, userData.id));
  };

  return (
    <form className="mb-3" action="" onSubmit={handleAvatar}>
      <label htmlFor="file" className="form-label">
        Choose your Avatar
      </label>
      <input
        className="form-control form-control-sm"
        id="file"
        type="file"
        name="file"
        accept=".jpg, .jpeg, .png, .svg, .gif"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <input type="submit" className="btn btn-primary" value="Upload" />
    </form>
  );
}
