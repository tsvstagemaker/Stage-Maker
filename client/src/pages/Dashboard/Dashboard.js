import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Dashboard.css";

export default function DashBoard() {
  const matchsUserData = useSelector((state) => state.userReducer);
  const matchsUserDataShared = useSelector((state) => state.matchReducer);
  const [startDashboard, setStartDashboard] = useState(true);
  const MatchUserid = matchsUserData.id;

  // console.log(matchsUserDataShared);
  // console.log(matchsUserData.id);

  const MatchsShared = matchsUserDataShared.filter(
    (matchUserDataShared) => matchUserDataShared.UserId === MatchUserid
  );

  // console.log(MatchsShared);

  // const countSharedMatchByUser = () => {
  //   const MatchUserid = matchsUserData.id;

  //   if ((matchsUserDataShared = null)) {
  //     return "No Match shared";
  //   } else if (matchsUserDataShared.filter(item.UserId != MatchUserid)) {
  //     return "No Match shared 1";
  //   } else if (matchsUserDataShared.filter(item.UserId === MatchUserid)) {
  //     return matchsUserDataShared;
  //   }
  // };
  // console.log(countSharedMatchByUser());

  const handlstartDashboardHide = () => {
    setStartDashboard(false);
  };

  const handlstartDashboardShow = () => {
    setStartDashboard(true);
  };
  return (
    <div className="dashboard-page">
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="sidebar-dashboard">
            <div className="list-icons-dashboard">
              <ul className="ul-dashboard">
                <li className="nav-item li-dashboard">
                  <NavLink
                    className="nav-link-dashboard active"
                    to="/Dashboard/MatchDashBoard"
                    onClick={handlstartDashboardHide}
                  >
                    <span className="dashboard-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="currentColor"
                        className="bi bi-card-list"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14.5 3a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h13zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z"></path>
                        <path d="M5 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 8zm0-2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-1-5a.5.5 0 11-1 0 .5.5 0 011 0zM4 8a.5.5 0 11-1 0 .5.5 0 011 0zm0 2.5a.5.5 0 11-1 0 .5.5 0 011 0z"></path>
                      </svg>
                    </span>
                    <span className="span-menu-dashboard">Match</span>
                  </NavLink>
                </li>
                <li className="nav-item li-dashboard li-dashboard-stage">
                  <NavLink
                    className="nav-link-dashboard"
                    to="/Dashboard/StagesDashBoard"
                    onClick={handlstartDashboardHide}
                  >
                    <span className="dashboard-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="none"
                        viewBox="0 0 252 242"
                      >
                        <path
                          className="dashboard-icon-stage"
                          fill="#fff"
                          fillRule="evenodd"
                          d="M177.954 74.672a6 6 0 10-4.334-11.19c-1.015.393-15.805 6.364-66.965 27.14a5.993 5.993 0 00-3.554 4.063 2.86 2.86 0 01-.224.593 7.5 7.5 0 003.662 10.305c28.417 12.435 56.482 26.47 78.107 37.886 8.205 4.332 15.469 8.28 21.459 11.611 1.476.821 1.321 2.985-.253 3.596L33.445 225.573a8.5 8.5 0 006.15 15.849L229.848 167.6a8.502 8.502 0 005.37-8.905 7.486 7.486 0 00-3.036-5.661c-1.757-1.297-6.679-4.232-13.38-8.03-6.923-3.922-16.229-9.032-27.153-14.8-17.982-9.493-40.416-20.803-63.884-31.548-1.598-.732-1.542-3.028.087-3.69 37.84-15.36 49.313-19.988 50.102-20.294z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          className="dashboard-icon-stage"
                          stroke="#fff"
                          strokeWidth="15"
                          d="M43.952 128.5l19.855 26.799v27.446l-19.811 26.226H27.31L7.5 182.745v-27.446L27.355 128.5h16.597zM179.998 14.046l8.448 11.402V37.2l-8.404 11.125h-4.999L166.64 37.2V25.448l8.447-11.402h4.911zM228.639 70.575l14.294 19.293v19.795l-14.25 18.864h-10.988l-14.25-18.864V89.868l14.294-19.293h10.9z"
                        ></path>
                      </svg>
                    </span>
                    <span className="span-menu-dashboard">Stages</span>
                  </NavLink>
                </li>
                <li className="nav-item li-dashboard">
                  <NavLink
                    className="nav-link-dashboard"
                    to="/Dashboard/UsersDashBoard"
                    onClick={handlstartDashboardHide}
                  >
                    <span className="dashboard-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chat-left-text"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 1a1 1 0 011 1v8a1 1 0 01-1 1H4.414A2 2 0 003 11.586l-2 2V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12.793a.5.5 0 00.854.353l2.853-2.853A1 1 0 014.414 12H14a2 2 0 002-2V2a2 2 0 00-2-2H2z"></path>
                        <path d="M3 3.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 6a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 6zm0 2.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z"></path>
                      </svg>
                    </span>
                    <span className="span-menu-dashboard">Comments</span>
                  </NavLink>
                </li>
                <li className="nav-item li-dashboard">
                  <NavLink
                    className="nav-link-dashboard"
                    to="/Dashboard/UsersDashBoard"
                    onClick={handlstartDashboardHide}
                  >
                    <span className="dashboard-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-hand-thumbs-up"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 00.254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 00-.138-.362 1.9 1.9 0 00.234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 00-.443.05 9.365 9.365 0 00-.062-4.509A1.38 1.38 0 009.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 01-.145 4.725.5.5 0 00.595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 011.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 01-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 01-.121.416c-.165.288-.503.56-1.066.56z"></path>
                      </svg>
                    </span>
                    <span className="span-menu-dashboard">Likes</span>
                  </NavLink>
                </li>
                <li className="nav-item li-dashboard">
                  <NavLink
                    className="nav-link-dashboard"
                    to="#"
                    onClick={handlstartDashboardHide}
                  >
                    <span className="dashboard-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-share"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM11 2.5a2.5 2.5 0 11.603 1.628l-6.718 3.12a2.499 2.499 0 010 1.504l6.718 3.12a2.5 2.5 0 11-.488.876l-6.718-3.12a2.5 2.5 0 110-3.256l6.718-3.12A2.5 2.5 0 0111 2.5zm-8.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm11 5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
                      </svg>
                    </span>
                    <span className="span-menu-dashboard">Shared</span>
                  </NavLink>
                </li>
                <li className="nav-item li-dashboard">
                  <NavLink
                    className="nav-link-dashboard"
                    to="/Dashboard"
                    onClick={handlstartDashboardHide}
                  >
                    <span className="dashboard-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-people"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 017 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 01-.014.002H7.022zM11 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zM6.936 9.28a5.88 5.88 0 00-1.23-.247A7.35 7.35 0 005 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 015 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 004 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4z"></path>
                      </svg>
                    </span>
                    <span className="span-menu-dashboard">Files</span>
                  </NavLink>
                </li>
                <li className="nav-item li-dashboard">
                  <NavLink
                    className="nav-link-dashboard"
                    to="/Dashboard"
                    onClick={handlstartDashboardShow}
                  >
                    <span className="dashboard-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-info-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z"></path>
                        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 11-2 0 1 1 0 012 0z"></path>
                      </svg>
                    </span>
                    <span className="span-menu-dashboard">Console</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <main className="main-dashboard">
            {startDashboard ? (
              <>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">DashBoard</h1>
                </div>
                <div className="container start-dashboard">
                  <h3>Welcome to your DashBoard</h3>
                  <br />
                  <p>
                    Your dashboard is used to see your IPSC matches, your IPSC
                    stages and the users who liked or commented on your designs.
                    You can also see the statistics of your matches and so much
                    more...{" "}
                  </p>
                  <br />
                  <p>
                    <span role="img" aria-label="finger pointing emoji"></span>
                    click on icons on the left sidebar 👈 or on cards below 👇
                    to discover all features
                  </p>

                  {/* card */}

                  <div className="row mt-4 card-dashboard">
                    <div className="col col-lg-4 col-md-6 col-sm-12">
                      <NavLink
                        className="nav-link-dashboard active"
                        to="/Dashboard/MatchDashBoard"
                        onClick={handlstartDashboardHide}
                      >
                        <div className="card mb-3 border-card-dashboard-custom">
                          <div className="card-header bg-transparent">
                            <div className="text-center d-flex justify-content-between align-items-center">
                              <span className="dashboard-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  fill="#17a2b8"
                                  className="bi bi-card-list"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M14.5 3a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h13zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z"></path>
                                  <path d="M5 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 8zm0-2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-1-5a.5.5 0 11-1 0 .5.5 0 011 0zM4 8a.5.5 0 11-1 0 .5.5 0 011 0zm0 2.5a.5.5 0 11-1 0 .5.5 0 011 0z"></path>
                                </svg>
                              </span>
                              MATCHS
                            </div>
                          </div>
                          <div className="card-body ">
                            <h5 className="card-title text-center">
                              {matchsUserData.Matchs.length} Matchs created
                            </h5>
                          </div>
                        </div>
                      </NavLink>
                    </div>

                    <div className="col col-lg-4 col-md-6 col-sm-12">
                      <NavLink
                        className="nav-link-dashboard"
                        to="/Dashboard/StagesDashBoard"
                        onClick={handlstartDashboardHide}
                      >
                        <div className="card mb-3 border-card-dashboard-custom">
                          <div className="card-header bg-transparent">
                            <div className="text-center d-flex justify-content-between align-items-center">
                              <span className="dashboard-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  fill="none"
                                  viewBox="0 0 252 242"
                                >
                                  <path
                                    className="dashboard-icon-stage"
                                    fill="#17a2b8"
                                    fillRule="evenodd"
                                    d="M177.954 74.672a6 6 0 10-4.334-11.19c-1.015.393-15.805 6.364-66.965 27.14a5.993 5.993 0 00-3.554 4.063 2.86 2.86 0 01-.224.593 7.5 7.5 0 003.662 10.305c28.417 12.435 56.482 26.47 78.107 37.886 8.205 4.332 15.469 8.28 21.459 11.611 1.476.821 1.321 2.985-.253 3.596L33.445 225.573a8.5 8.5 0 006.15 15.849L229.848 167.6a8.502 8.502 0 005.37-8.905 7.486 7.486 0 00-3.036-5.661c-1.757-1.297-6.679-4.232-13.38-8.03-6.923-3.922-16.229-9.032-27.153-14.8-17.982-9.493-40.416-20.803-63.884-31.548-1.598-.732-1.542-3.028.087-3.69 37.84-15.36 49.313-19.988 50.102-20.294z"
                                    clipRule="evenodd"
                                  ></path>
                                  <path
                                    className="dashboard-icon-stage"
                                    stroke="#17a2b8"
                                    strokeWidth="15"
                                    d="M43.952 128.5l19.855 26.799v27.446l-19.811 26.226H27.31L7.5 182.745v-27.446L27.355 128.5h16.597zM179.998 14.046l8.448 11.402V37.2l-8.404 11.125h-4.999L166.64 37.2V25.448l8.447-11.402h4.911zM228.639 70.575l14.294 19.293v19.795l-14.25 18.864h-10.988l-14.25-18.864V89.868l14.294-19.293h10.9z"
                                  ></path>
                                </svg>
                              </span>
                              STAGES
                            </div>
                          </div>
                          <div className="card-body ">
                            <h5 className="card-title text-center">
                              {matchsUserData.Stages.length} Stages created
                            </h5>
                          </div>
                        </div>
                      </NavLink>
                    </div>

                    <div className="col col-lg-4 col-md-6 col-sm-12">
                      <NavLink
                        className="nav-link-dashboard"
                        to="/Dashboard/UsersDashBoard"
                        onClick={handlstartDashboardHide}
                      >
                        <div className="card mb-3 border-card-dashboard-custom">
                          <div className="card-header bg-transparent">
                            <div className="text-center d-flex justify-content-between align-items-center">
                              <span className="dashboard-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  fill="#17a2b8"
                                  className="bi bi-chat-left-text"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M14 1a1 1 0 011 1v8a1 1 0 01-1 1H4.414A2 2 0 003 11.586l-2 2V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12.793a.5.5 0 00.854.353l2.853-2.853A1 1 0 014.414 12H14a2 2 0 002-2V2a2 2 0 00-2-2H2z"></path>
                                  <path d="M3 3.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 6a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 6zm0 2.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z"></path>
                                </svg>
                              </span>
                              COMMENTS
                            </div>
                          </div>
                          <div className="card-body ">
                            <h5 className="card-title text-center">
                              25 comments recived
                            </h5>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12">
                      <NavLink
                        className="nav-link-dashboard"
                        to="/Dashboard/UsersDashBoard"
                        onClick={handlstartDashboardHide}
                      >
                        <div className="card mb-3 border-card-dashboard-custom">
                          <div className="card-header bg-transparent">
                            <div className="text-center d-flex justify-content-between align-items-center">
                              <span className="dashboard-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  fill="#17a2b8"
                                  className="bi bi-hand-thumbs-up"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 00.254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 00-.138-.362 1.9 1.9 0 00.234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 00-.443.05 9.365 9.365 0 00-.062-4.509A1.38 1.38 0 009.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 01-.145 4.725.5.5 0 00.595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 011.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 01-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 01-.121.416c-.165.288-.503.56-1.066.56z"></path>
                                </svg>
                              </span>
                              LIKES
                            </div>
                          </div>
                          <div className="card-body ">
                            <h5 className="card-title text-center">
                              25 Matchs liked
                            </h5>
                          </div>
                        </div>
                      </NavLink>
                    </div>

                    <div className="col col-lg-4 col-md-6 col-sm-12">
                      <NavLink
                        className="nav-link-dashboard"
                        to="/Dashboard/SharedMatchDashBoard"
                        onClick={handlstartDashboardHide}
                        // matchShared={MatchsShared}
                      >
                        <div className="card mb-3 border-card-dashboard-custom">
                          <div className="card-header bg-transparent">
                            <div className="text-center d-flex justify-content-between align-items-center">
                              <span className="dashboard-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  fill="#17a2b8"
                                  className="bi bi-graph-up-arrow"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V4.9l-3.613 4.417a.5.5 0 01-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 01-.808-.588l4-5.5a.5.5 0 01.758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 01-.5-.5z"
                                  ></path>
                                </svg>
                              </span>
                              SHARED
                            </div>
                          </div>
                          <div className="card-body ">
                            <h5 className="card-title text-center">
                              {MatchsShared.length} Matchs shared
                            </h5>
                          </div>
                        </div>
                      </NavLink>
                    </div>

                    <div className="col col-lg-4 col-md-6 col-sm-12">
                      <NavLink
                        className="nav-link-dashboard"
                        to="/Dashboard/UsersDashBoard"
                        onClick={handlstartDashboardHide}
                      >
                        <div className="card mb-3 border-card-dashboard-custom">
                          <div className="card-header bg-transparent">
                            <div className="text-center d-flex justify-content-between align-items-center">
                              <span className="dashboard-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  fill="#17a2b8"
                                  className="bi bi-people"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 017 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 01-.014.002H7.022zM11 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zM6.936 9.28a5.88 5.88 0 00-1.23-.247A7.35 7.35 0 005 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 015 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 004 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4z"></path>
                                </svg>
                              </span>
                              FOLLOWERS
                            </div>
                          </div>
                          <div className="card-body ">
                            <h5 className="card-title text-center">
                              25 Followers
                            </h5>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="container start-dashboard-hide"></div>
            )}
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
