import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MatchUser() {
  const matchsUserData = useSelector((state) => state.userReducer);
  const [matchId, setMatchId] = useState("");

  const handleChart = (matchId) => {
    setMatchId(matchId);
    // console.log(matchId);
  };

  // matchsUserData.Stages.map((roundCount) => {
  //   console.log(roundCount.MatchId);
  // });

  return (
    <div className="table-responsive">
      <table className="table table-sm table-match">
        <thead>
          <tr>
            <th scope="col">#Matchs Id</th>
            <th scope="col">Matchname</th>
            <th scope="col">Level</th>
            <th scope="col">Round</th>
            <th scope="col">Stage</th>
            <th scope="col">Club</th>
            <th scope="col">Region</th>
            <th scope="col">Target</th>
            <th scope="col">Squad</th>
            <th scope="col">Start Match</th>
            <th scope="col">End Match</th>
            <th scope="col">Numbe of Day</th>
            <th scope="col">.match Director</th>
            <th scope="col">.range Master</th>
            <th scope="col">.stats Director</th>
            <th scope="col">.share Match</th>
          </tr>
        </thead>
        <tbody>
          {matchsUserData.Matchs.map((val, key) => {
            return (
              <tr
                onClick={() => handleChart(val.id)}
                // onClick={handleChart}
                key={key}
                className="tr-select-match-chart"
              >
                <td>{val.id}</td>
                <td>{val.matchname}</td>
                <td>{val.matchLevel}</td>
                <td>{val.round}</td>
                <td>{val.nbrStage}</td>
                <td>{val.clubName}</td>
                <td>{val.countryId}</td>
                <td>{val.target}</td>
                <td>{val.squadCount}</td>
                <td>{val.startAt}</td>
                <td>{val.endAt}</td>
                <td>{val.numberDay}</td>
                <td>{val.matchDirector}</td>
                <td>{val.rangeMaster}</td>
                <td>{val.statsDirector}</td>
                <td>{val.shareMatch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
