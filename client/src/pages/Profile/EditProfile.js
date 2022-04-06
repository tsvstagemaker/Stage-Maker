import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import UploadAvatar from "../../components/Upload/UploadAvatar";
import "./Profile.css";
import EditIcon from "@mui/icons-material/Edit";

export default function Profile() {
  let navigate = useNavigate();
  const userData = useSelector((state) => state.userReducer);
  let { id } = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [club, setClub] = useState("");
  const [region, setRegion] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const errorMessage = document.querySelector(".edit-profile-error");
    let userInfo = { username, region, club };
    axios
      .put(`${process.env.REACT_APP_API_URL}auth/editprofile/${id}`, {
        username: username,
        region: region,
        club: club,
        email: email,
        lastname: lastname,
        firstname: firstname,
      })
      .then((res) => {
        if (res.data.error) {
          errorMessage.innerHTML = res.data.error;
          errorMessage.classList.add("error");
          // console.log(res.data.error);
        } else {
          errorMessage.classList.remove("error");
          errorMessage.classList.add("success");
          errorMessage.innerHTML = res.data;
          // history.push(`/profile/${id}`);
          // window.location = `/profile/${id}`;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadAvatar = (files) => {
    // console.log(files[0]);
  };

  const cancelEdit = () => {
    // history.push(`/profile/${id}`);
    navigate(`/profile/${id}`);
  };

  return (
    <div className="container">
      <div className="main-body">
        <h2 className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom text-capitalize">
          Edit {userData.username} Profile
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
                  <span className="text-secondary">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="https://Website.com"
                      value=""
                    ></input>
                  </span>
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
                  <span className="text-secondary">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Github"
                      value=""
                    ></input>
                  </span>
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
                  <span className="text-secondary">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="@Twitter "
                      value=""
                    ></input>
                  </span>
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
                  <span className="text-secondary">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Instagram "
                      value=""
                    ></input>
                  </span>
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
                  <span className="text-secondary">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Facebook "
                      value=""
                    ></input>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Username</h6>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="username"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                      value={userData.username}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Lastname</h6>
                  </div>
                  <div className="col-sm-9 text-secondary text-capitalize">
                    <input
                      type="lastname"
                      className="form-control"
                      id="lastname"
                      placeholder="lastname"
                      onChange={(e) => setLastname(e.target.value)}
                      value={userData.lastname}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Firstname</h6>
                  </div>
                  <div className="col-sm-9 text-secondary text-capitalize">
                    <input
                      type="firstname"
                      className="form-control"
                      id="firstname"
                      placeholder="firstname"
                      onChange={(e) => setFirstname(e.target.value)}
                      value={userData.firstname}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={userData.email}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Region</h6>
                  </div>
                  <div className="col-sm-9 text-secondary text-capitalize">
                    <input
                      type="region"
                      className="form-control"
                      id="region"
                      placeholder="region"
                      onChange={(e) => setRegion(e.target.value)}
                      value={userData.region}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">IPSC Club</h6>
                  </div>
                  <div className="col-sm-9 text-secondary text-uppercase">
                    <input
                      type="club"
                      className="form-control"
                      id="club"
                      placeholder="club"
                      onChange={(e) => setClub(e.target.value)}
                      value={userData.club}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <NavLink className="btn btn-primary" to="/EditProfile">
                      Edit <EditIcon />
                    </NavLink>
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
