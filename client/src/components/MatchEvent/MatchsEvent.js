import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMatchs } from "../../actions/match.actions";
import CardMatchs from "./CardEvent";
import { useSelector } from "react-redux";

// import { NavLink } from "react-router-dom";
// import VanillaTilt from "vanilla-tilt";
// import ProfileModal from "../ProfileModal/ProfileModal";
import { isEmpty } from "../Utils/Utils";

import "./MatchsEvent.css";
// import bullet from "../../images/bullet.svg";
// import targets from "../../images/targets.svg";
// import days from "../../images/days.svg";
// import stage from "../../images/stage.svg";
// import logoOnlySvg from "../../images/Logo-stage-maker.svg";

export default function MatchsEvent() {
  const [loadMatchs, setLoadMatchs] = useState(true);
  const dispatch = useDispatch();

  // const usersData = useSelector((state) => state.usersReducer);
  const matchsData = useSelector((state) => state.matchReducer);
  const asArray = Object.entries(matchsData);
  const filteredMatch = asArray.filter(
    ([key, value]) => value.matchLevel >= "2"
  );
  // const matchLevel = matchsData.filter((matchfilter) => {
  //   if (matchfilter.matchLevel === "3") {
  //     return matchLevel;
  //   }
  //   return "Pas de match level 2 ou plus";
  // });
  // console.log(filteredMatch);
  // console.log(matchLevel);
  useEffect(() => {
    if (loadMatchs) {
      dispatch(getMatchs());
      setLoadMatchs(false);
    }
  }, [loadMatchs, dispatch]);

  // const [isLoaded, setIsLoaded] = useState(true);

  // const cardMatchEvent = document.querySelectorAll(".card-match-event");

  // VanillaTilt.init(cardMatchEvent);

  // const [modalShow, setModalShow] = useState("");

  return (
    <>
      <div className="container-match-event-top">
        <h1 className="title-match-event">Match Event</h1>
        <div className="container-match-event">
          <div className="sous-container-match-event">
            {!isEmpty(matchsData[0]) &&
              filteredMatch.map((matchs) => {
                return <CardMatchs matchs={matchs} key={matchs.id} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}
