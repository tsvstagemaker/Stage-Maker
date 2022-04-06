import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ChartMatch from "../../Chart/ChartMatch/ChartMatch";
import "./MatchDashBoard.css";

export default function MatchDashBoard() {
  const matchsUserData = useSelector((state) => state.userReducer);
  // console.log(matchsUserData.Stages);

  const [matchId, setMatchId] = useState("");
  const [expandMatch, setExpandMatch] = useState("");

  const handleChart = (matchId) => {
    setMatchId(matchId);
  };

  const handleExpand = (matchId) => {
    setExpandMatch(matchId);
  };
  return (
    <div className="match-dashboard">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard Matchs</h1>
        {/* <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group me-2">
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
          >
            Share
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
          >
            Export
          </button>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary dropdown-toggle"
        >
          <span data-feather="calendar"></span>
          This week
        </button>
      </div> */}
      </div>

      <ChartMatch
        dataMatch={matchsUserData.Matchs}
        dataId={matchId}
        dataStage={matchsUserData.Stages}
      />

      <div className="chart-match-list">
        <h2>Match List</h2>
        <div className="table-responsive match-table">
          <table className="darkTable">
            <thead>
              <tr className="match-table-tr">
                <th>Actions</th>
                <th>Name</th>
                <th>Level</th>
                <th>Round</th>
                <th>Stage</th>
                <th>Club</th>
                <th>Region</th>
                <th>Squad</th>
                <th>Start </th>
                <th>End </th>
                <th>Numbe of Day</th>
              </tr>
            </thead>
            <tbody>
              {matchsUserData.Matchs.map((val, key) => {
                return (
                  <>
                    <tr key={key} className="tr-select-match-chart">
                      <td>
                        {/* Arrow expand match view stages */}
                        <svg
                          onClick={() => handleExpand(val.id)}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-chevron-down icon-match-list dashboard-down"
                          viewBox="0 0 16 16"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${val.name}`}
                          aria-expanded="false"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                          ></path>
                        </svg>
                        {/* chart view */}
                        <svg
                          onClick={() => handleChart(val.id)}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-graph-up-arrow icon-match-list dashboard-chart"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V4.9l-3.613 4.417a.5.5 0 01-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 01-.808-.588l4-5.5a.5.5 0 01.758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 01-.5-.5z"
                          ></path>
                        </svg>
                        {/* Share match */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-share icon-match-list dashboard-share"
                          id="shareMatch"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM11 2.5a2.5 2.5 0 11.603 1.628l-6.718 3.12a2.499 2.499 0 010 1.504l6.718 3.12a2.5 2.5 0 11-.488.876l-6.718-3.12a2.5 2.5 0 110-3.256l6.718-3.12A2.5 2.5 0 0111 2.5zm-8.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm11 5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
                        </svg>
                        {/* Edit match */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-square icon-match-list dashboard-edit"
                          id="editMatch"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"></path>
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z"
                          ></path>
                        </svg>
                        {/* Delete match */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash icon-match-list dashboard-trash"
                          id="deleteMatch"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"></path>
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          ></path>
                        </svg>
                      </td>
                      <td>{val.matchname}</td>
                      <td>{val.matchLevel}</td>
                      <td>{val.round}</td>
                      <td>{val.nbrStage}</td>
                      <td>{val.clubName}</td>
                      <td>{val.countryId}</td>
                      <td>{val.squadCount}</td>
                      <td>{val.startAt}</td>
                      <td>{val.endAt}</td>
                      <td>{val.numberDay}</td>
                    </tr>
                    <div
                      className="collapse"
                      // id={result}
                      id={`${val.name}`}
                    >
                      Some placeholder content for the second collapse component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the relevant
                      trigger.
                    </div>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
