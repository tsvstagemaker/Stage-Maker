import React from "react";
import { NavLink } from "react-router-dom";
import matchDatas from "../../components/DATA/match_fake_data.json";
import targets from "../../images/targets.svg";
import days from "../../images/days.svg";
import bullet from "../../images/bullet.svg";
import stage from "../../images/stage.svg";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Matchs.css";

export default function Matchs() {
  // const [searchTerme, setSearchTerme] = useState("");
  // const handleSearch = (e) => {
  //   let value = e.target.value;
  //   setSearchTerme(value);
  // };

  const rowMatchs = document.querySelectorAll("#rowMatch");
  const colMatchs = document.querySelectorAll("#colMatch");
  const cardImgMatchs = document.querySelectorAll(".card-img-match");
  const handleview = (view, e) => {
    if (view === "grid") {
      rowMatchs.forEach((Item) => {
        Item.classList.remove("row-match");
      });
      colMatchs.forEach((Item2) => {
        Item2.classList.remove("col-match");
      });
      cardImgMatchs.forEach((Item3) => {
        Item3.style.display = "none";
      });
    } else if (view === "list") {
      rowMatchs.forEach((Item) => {
        Item.classList.add("row-match");
      });
      colMatchs.forEach((Item2) => {
        Item2.classList.add("col-match");
      });
      cardImgMatchs.forEach((Item3) => {
        Item3.style.display = "block";
      });
    } else return;
  };

  return (
    <div className="all-Matchs">
      <h1>Matchs</h1>
      <SearchBar placeholder="Search..." data={matchDatas} />
      <div className="mb-5">
        <div className="container">
          <div className="list-to-grid">
            <svg
              id="grid"
              onClick={(event) => handleview("grid", event)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-grid"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zM2.5 2a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm6.5.5A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zM1 10.5A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm6.5.5A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3z"></path>
            </svg>
            <svg
              id="list"
              onClick={(event) => handleview("list", event)}
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
            </svg>
          </div>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3"
            id="rowMatch"
          >
            {/* map match */}
            {matchDatas
              // .filter((val) => {
              //   if (searchTerme === "") {
              //     return val;
              //   } else if (
              //     val.matchname
              //       .toLowerCase()
              //       .includes(searchTerme.toLowerCase())
              //   ) {
              //     return val;
              //   } else {
              //     return val;
              //   }
              // })
              .map((val, key) => {
                return (
                  <div className="col" id="colMatch" key={key}>
                    <div className="card card-match">
                      <div className="card-img-match">
                        <img
                          className="card-img"
                          src="https://picsum.photos/1294/300"
                          alt={val.matchname}
                        />
                        <div className="text-img-match">
                          {val.club}
                          <br />
                          {val.region}
                        </div>
                      </div>

                      <h3 className="card-title-match">{val.matchname}</h3>
                      <div className="card-body">
                        <div className="content">
                          <div className="text-no-img-match">
                            <h3>LEVEL {val.level}</h3>
                            {val.club}
                            <br />
                            {val.region}
                          </div>
                          <div className="show-match-data-btn m-2 py-2">
                            <div className="data-match-match">
                              <div className="data-match">
                                <img
                                  src={bullet}
                                  alt="Number of round tsv stage maker"
                                  width={32}
                                  height={32}
                                  className="bullet-img"
                                />
                                <span className="">{val.round}</span>
                              </div>

                              <div className="data-match">
                                <img
                                  src={stage}
                                  alt="Number of Stage tsv stage maker"
                                  width={32}
                                  height={32}
                                  className="targets-img"
                                />
                                <span className="">{val.stage}</span>
                              </div>

                              <div className="data-match">
                                <img
                                  src={targets}
                                  alt="Number of target tsv stage maker"
                                  width={32}
                                  height={32}
                                  className="targets-img"
                                />
                                <span className="">{val.target}</span>
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
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                            <br />
                          </div>
                        </div>
                        <hr />
                        <div className="date-match-user d-flex justify-content-between align-items-center">
                          <small className="text-muted">Since 9 mins</small>
                          <small className="text-muted">In {val.startAt}</small>
                          <small className="text-muted">
                            By {val.username}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            {/* fin map match² */}

            <nav aria-label="..." className="mb-5">
              <ul className="pagination">
                <li className="page-item">
                  <NavLink to="#" className="page-link page-link-pagination">
                    Previous
                  </NavLink>
                </li>
                <li className="page-item active">
                  <NavLink
                    to="#"
                    className="page-link page-link-pagination"
                    href="#"
                  >
                    1
                  </NavLink>
                </li>
                <li className="page-item" aria-current="page">
                  <NavLink
                    to="#"
                    className="page-link page-link-pagination"
                    href="#"
                  >
                    2
                  </NavLink>
                </li>
                <li className="page-item">
                  <NavLink
                    to="#"
                    className="page-link page-link-pagination"
                    href="#"
                  >
                    3
                  </NavLink>
                </li>
                <li className="page-item">
                  <NavLink
                    to="#"
                    className="page-link page-link-pagination"
                    href="#"
                  >
                    Next
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
