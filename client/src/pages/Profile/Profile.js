import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UploadAvatar from "../../components/Upload/UploadAvatar";
// import { UidContext } from "../../components/Context/AppContext";
import "./Profile.css";
import EditIcon from "@mui/icons-material/Edit";
import Regions from "../../components/Layout/Regions";
import Clubs from "../../components/Layout/Clubs";
import { editProfile } from "../../actions/user.actions";

export default function Profile() {
  // const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  const [updateUser, setUpdateUser] = useState(false);
  const dispatch = useDispatch();
  const id = userData.id;

  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [club, setClub] = useState("");
  const [region, setRegion] = useState("");

  const handleUpdate = () => {
    const editProfileData = {
      username: userData.username,
      email: email,
      firstname: firstname,
      lastname: lastname,
      club: club,
      region: region,
    };
    // console.log(lastname);
    // return;
    dispatch(editProfile(id, editProfileData));
    setUpdateUser(false);
  };

  return (
    <div className="container page-profile">
      <div className="main-body">
        <h2 className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom text-capitalize">
          {userData.username} Profile
        </h2>
        <div className="row gutters-sm mt-4">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    // src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    src={userData.avatar}
                    alt={userData.username}
                    className="rounded-circle mb-2"
                    width={150}
                  />
                  <UploadAvatar />
                  {/* <p>{errors.maxSize}</p>
                  <p>{errors.format}</p> */}
                  <div className="mt-3">
                    <h4 className="text-capitalize">
                      {userData.firstname} {userData.lastname}
                    </h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-muted font-size-sm">
                      Bay Area, San Francisco, CA
                    </p>
                    <button className="btn btn-primary">Follow</button>
                    <button className="btn btn-outline-primary">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-globe mr-2 icon-inline"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <line x1={2} y1={12} x2={22} y2={12} />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    Website
                  </h6>
                  <span className="text-secondary">https://bootdey.com</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github mr-2 icon-inline"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    Github
                  </h6>
                  <span className="text-secondary">bootdey</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-twitter mr-2 icon-inline text-info"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                    Twitter
                  </h6>
                  <span className="text-secondary">@bootdey</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram mr-2 icon-inline text-danger"
                    >
                      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    Instagram
                  </h6>
                  <span className="text-secondary">bootdey</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-facebook mr-2 icon-inline text-primary"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    Facebook
                  </h6>
                  <span className="text-secondary">bootdey</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Firstname</h6>
                  </div>
                  <div className="col-sm-9 text-secondary text-capitalize">
                    {updateUser === false && (
                      <>
                        <span
                          className="span-update-profile"
                          onClick={() => setUpdateUser(!updateUser)}
                        >
                          {userData.firstname}
                        </span>
                      </>
                    )}
                    {updateUser && (
                      <>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          placeholder="firstname"
                          onChange={(e) => setFirstname(e.target.value)}
                          defaultValue={userData.firstname}
                          // value={firstname}
                        />
                      </>
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Lastname</h6>
                  </div>
                  <div className="col-sm-9 text-secondary text-capitalize">
                    {updateUser === false && (
                      <>
                        <span
                          className="span-update-profile"
                          onClick={() => setUpdateUser(!updateUser)}
                        >
                          {userData.lastname}
                        </span>
                      </>
                    )}
                    {updateUser && (
                      <>
                        <input
                          type="text"
                          className="form-control"
                          id="lastname"
                          placeholder="lastname"
                          onChange={(e) => setLastname(e.target.value)}
                          defaultValue={userData.lastname}
                          // value={lastname}
                        />
                      </>
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {updateUser === false && (
                      <>
                        <span
                          className="span-update-profile"
                          onClick={() => setUpdateUser(!updateUser)}
                        >
                          {userData.email}
                        </span>
                      </>
                    )}
                    {updateUser && (
                      <>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="email"
                          onChange={(e) => setEmail(e.target.value)}
                          defaultValue={userData.email}
                          // value={email}
                        />
                      </>
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Region</h6>
                  </div>
                  <div className="col-sm-9 text-secondary text-capitalize">
                    {updateUser === false && (
                      <>
                        <span
                          className="span-update-profile"
                          onClick={() => setUpdateUser(!updateUser)}
                        >
                          {userData.region}
                        </span>
                      </>
                    )}
                    {updateUser && (
                      <>
                        <select
                          type="text"
                          name="club"
                          // value={userData.region}
                          // defaultValue={userData.region}
                          onChange={(e) => setRegion(e.target.value)}
                          className="form-select"
                          aria-label="club"
                        >
                          <Regions />
                        </select>
                      </>
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">IPSC Club</h6>
                  </div>
                  <div className="col-sm-9 text-secondary text-uppercase">
                    {updateUser === false && (
                      <>
                        <span
                          className="span-update-profile"
                          onClick={() => setUpdateUser(!updateUser)}
                        >
                          {userData.club}
                        </span>
                      </>
                    )}
                    {updateUser && (
                      <>
                        <select
                          type="text"
                          name="club"
                          // value={userData.club}
                          // defaultValue={userData.club}
                          onChange={(e) => setClub(e.target.value)}
                          className="form-select"
                          aria-label="region"
                        >
                          <Clubs />
                        </select>
                      </>
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12 d-flex justify-content-around">
                    {/* <NavLink
                      className="btn btn-primary"
                      to="#"
                      onClick={() => setUpdateUser(!updateUser)}
                    >
                      Edit <EditIcon />
                    </NavLink> */}

                    {updateUser === false && (
                      <>
                        <button
                          className="btn btn-primary"
                          to="#"
                          onClick={() => setUpdateUser(!updateUser)}
                        >
                          Edit <EditIcon />
                        </button>
                      </>
                    )}
                    {updateUser && (
                      <>
                        <button
                          className="btn btn-danger"
                          to="#"
                          onClick={() => setUpdateUser(!updateUser)}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={handleUpdate}
                        >
                          Update
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
