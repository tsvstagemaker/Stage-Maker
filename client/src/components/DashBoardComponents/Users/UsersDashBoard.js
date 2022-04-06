import React, { useState } from "react";
import ChartMatch from "../../Chart/ChartMatch/ChartMatch";
// import usersDatas from "../../../DATA/user_fake_data.json";

export default function UsersDashBoard() {
  const [userId, setMatchId] = useState("");

  const handleChart = (userId) => {
    setMatchId(userId);
    // console.log(userId);
  };
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard Users</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
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
        </div>
      </div>
      <ChartMatch props={userId} />

      <h2>Match List</h2>
      <div className="table-responsive">
        <table className="table table-sm table-match">
          <thead>
            <tr>
              <th scope="col">#Matchs Id</th>
              <th scope="col">matchname</th>
              <th scope="col">level</th>
              <th scope="col">round</th>
              <th scope="col">stage</th>
              <th scope="col">club</th>
              <th scope="col">region</th>
              <th scope="col">target</th>
              <th scope="col">startAt</th>
              <th scope="col">numberDay</th>
            </tr>
          </thead>
          <tbody>
            {/* {usersDatas.map((val, key) => {
              return (
                <tr
                  onClick={() => handleChart(val.id)}
                  key={key}
                  className="tr-select-match-chart"
                >
                  <td>{val.id}</td>
                  <td>{val.matchname}</td>
                  <td>{val.level}</td>
                  <td>{val.round}</td>
                  <td>{val.stage}</td>
                  <td>{val.club}</td>
                  <td>{val.region}</td>
                  <td>{val.target}</td>
                  <td>{val.startAt}</td>
                  <td>{val.numberDay}</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    </>
  );
}
