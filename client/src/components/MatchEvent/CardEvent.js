import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";

// import "./MatchsEvent.css";
import bullet from "../../images/bullet.svg";
import targets from "../../images/targets.svg";
import days from "../../images/days.svg";
import stage from "../../images/stage.svg";
// import logoOnlySvg from "../../images/Logo-stage-maker.svg";

export default function MatchsEvent({ matchs }) {
  console.log(matchs);
  //   const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  //   const matchsData = useSelector((state) => state.matchReducer);
  const [isLoaded, setIsLoaded] = useState(true);

  const cardMatchEvent = document.querySelectorAll(".card-match-event");

  VanillaTilt.init(cardMatchEvent);

  const [modalShow, setModalShow] = useState("");

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoaded(false);
  }, [usersData]);

  return (
    <div className="card-match-event" key={matchs.id}>
      {isLoaded ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <span className="date-match-span"> {matchs[1].startAt}</span>
          <div className="content">
            <p className="level-match-event-card">Level</p>
            <h2>{matchs[1].matchLevel}</h2>
            <h3>{matchs[1].matchname}</h3>
            <div className="show-data-btn">
              <div className="data-match-event d-flex justify-content-between text-center mb-2">
                <span className="span">
                  <img
                    src={bullet}
                    alt="Minimum Rounds"
                    width={32}
                    height={32}
                    className="bullet"
                  />
                  <p className="mb-0">214</p>
                </span>
                <span>
                  <img
                    src={stage}
                    alt="Number of Stages"
                    width={32}
                    height={32}
                    className="targets"
                  />
                  <p className="mb-0">{matchs[1].Stages.length}</p>
                </span>
                <span>
                  <img
                    src={targets}
                    alt="Number of Days"
                    width={32}
                    height={32}
                    className="days"
                  />
                  <p className="mb-0">2</p>
                </span>
                <span>
                  <img
                    src={days}
                    alt="Number of Days"
                    width={32}
                    height={32}
                    className="days"
                  />
                  <p className="mb-0">2</p>
                </span>
              </div>
              {/* <NavLink to=`/Match:${matchs.id}`> */}
              <NavLink to={`/Match/${matchs[1].id}`}>
                <span className="">More... {matchs[1].id}</span>
              </NavLink>
              <br />
              <NavLink
                className="more-user more-user-effect text-capitalize"
                to="#"
                onClick={() => setModalShow(true)}
              >
                By {""}
                {matchs[1].Username}
                <img
                  src={usersData.map((user) => {
                    // console.log(user.id);

                    if (user.id === matchs[1].id) {
                      // console.log(usersData.avatar);
                      return "test";
                    } else {
                      return null;
                    }
                  })}
                  alt={matchs[1].Username}
                  width={32}
                  height={32}
                />
              </NavLink>
              <ProfileModal
                show={modalShow}
                // userData={}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
