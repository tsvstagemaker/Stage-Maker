import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileModal from "../../components/ProfileModal/ProfileModal";
import { useSelector } from "react-redux";

import bullet from "../../images/bullet.svg";
import targets from "../../images/targets.svg";
import days from "../../images/days.svg";
import stage from "../../images/stage.svg";
import "./MatchView.css";

export default function MatchView() {
  const userData = useSelector((state) => state.userReducer);

  const [modalShow, setModalShow] = useState("");

  const listViewButton = () => {
    document.getElementById("viewChange").classList.remove("grid-view-filter");
    document.getElementById("viewChange").classList.add("list-view-filter");
    document
      .getElementById("viewChangeLi")
      .classList.add("title-level-date-match-list");
    document
      .getElementById("viewChangeLi")
      .classList.remove("title-level-date-match-grid");
    document.getElementById("imageMatch").classList.remove("image-match");
    document.getElementById("imageMatch").classList.add("no-image-match");
  };

  const gridViewButton = () => {
    document.getElementById("viewChange").classList.remove("list-view-filter");
    document.getElementById("viewChange").classList.add("grid-view-filter");
    document
      .getElementById("viewChangeLi")
      .classList.remove("title-level-date-match-list");
    document
      .getElementById("viewChangeLi")
      .classList.add("title-level-date-match-grid");
    document.getElementById("imageMatch").classList.add("image-match");
    document.getElementById("imageMatch").classList.remove("no-image-match");
  };

  return (
    <div className="container">
      <h1>MatchView</h1>
      {/* <div className="searchBar">
        <SearchBartest placeholder="Search..." data={matchDatas} />
      </div> */}
      <hr className="" />

      <div className="btn-view-sort">
        <div className="filter-buttons">
          <div className="list-view-button" onClick={listViewButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list-ul"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-3 1a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z"
              ></path>
            </svg>{" "}
            <span className="spanview">List view</span>
          </div>
          <div className="grid-view-button" onClick={gridViewButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-grid"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zM2.5 2a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm6.5.5A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zM1 10.5A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm6.5.5A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3z"></path>
            </svg>{" "}
            <span className="spanview">Grid view</span>
          </div>
        </div>
        {/* sorting */}
        <div className="sort-buttons">
          <div>
            <p className="mx-2">SortBy: </p>
          </div>
          <div>
            {" "}
            <select
              className="form-select form-select-sm select-sort"
              aria-label=".form-select-sm example"
            >
              <option value="1">Match Name</option>
              <option selected value="2">
                Start Date{" "}
              </option>
              <option value="3">Level</option>
              <option value="3">Discipline</option>
            </select>
          </div>
        </div>
      </div>

      <ul className="list list-view-filter" id="viewChange">
        <li className="list-li">
          <div className="">
            <img
              src="https://picsum.photos/seed/picsum/200/"
              alt="Logo tsv stage maker"
              // width={32}
              // height={32}
              className="no-image-match"
              id="imageMatch"
            />
            <div className="title-level-date-match-list" id="viewChangeLi">
              <h3>Match Name</h3>
              <h2>LEVEL 3</h2>

              <p>Date match</p>
            </div>

            <div className="data-match-match">
              <div className="data-match">
                <img
                  src={bullet}
                  alt="Number of round tsv stage maker"
                  width={32}
                  height={32}
                  className="bullet-img"
                />
                <span className="">300</span>
              </div>

              <div className="data-match">
                <img
                  src={stage}
                  alt="Number of Stage tsv stage maker"
                  width={32}
                  height={32}
                  className="targets-img"
                />
                <span className="">34</span>
              </div>

              <div className="data-match">
                <img
                  src={targets}
                  alt="Number of target tsv stage maker"
                  width={32}
                  height={32}
                  className="targets-img"
                />
                <span className="">34</span>
              </div>

              <div className="data-match">
                <img
                  src={days}
                  alt="Number of day tsv stage maker"
                  width={32}
                  height={32}
                  className="days-img"
                />
                <span className="">2</span>
              </div>
              <div className="data-match">
                <img
                  src={days}
                  alt="Number of day tsv stage maker"
                  width={32}
                  height={32}
                  className="days-img"
                />
                <span className="">2</span>
              </div>
            </div>

            <NavLink
              className="link-user"
              to="#"
              onClick={() => setModalShow(true)}
            >
              By {""} {userData.username}
              <img
                src={userData.avatar}
                alt={userData.username}
                width={32}
                height={32}
              />
            </NavLink>
            <ProfileModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </li>
        <li className="list-li">List item 2</li>
        <li className="list-li">List item 3</li>
        <li className="list-li">List item 4</li>
        <li className="list-li">List item 5</li>
        <li className="list-li">List item 6</li>
      </ul>
    </div>
  );
}
