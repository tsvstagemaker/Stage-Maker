import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

import ChartMatch from "../../../components/Chart/ChartMatch/ChartMatch";
import { useDispatch, useSelector } from "react-redux";
// import stagesDatas from "../../DATA/stage_fake_data.json";
import ModalStagesMatch from "../../../components/ModalStagesMatch/ModalStagesMatch";
import "./Match.css";
import "../../../components/DashBoardComponents/Matchs/MatchDashBoard.css";

export default function Match() {
  let { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);
  const getMatch = useSelector((state) => state.matchReducer);
  const [modalShow, setModalShow] = useState(false);

  const [matchId, setMatchId] = useState("");
  const [expandMatch, setExpandMatch] = useState("");

  const handleChart = (matchId) => {
    setMatchId(matchId);
  };

  // const handleExpand = (matchId) => {
  //   setExpandMatch(matchId);
  // };

  const ShowModal = (stageImg) => {
    setModalShow(true);
  };

  useEffect(() => {
    dispatch(getMatch(id));

    // axios
    //   .get(`${process.env.REACT_APP_API_URL}/api/match/ ${id}`)
    //   .then((response) => {
    //     console.log(response);
    // setListOfMatch(response.data.listOfMatch);
    // console.log(response.data.listOfMatch);
    // setLikedMatchs();
    // response.data.likedMatchs.map((like) => {
    //   return like.IpscMatchId;
    // });
    // setStagesMatch();
    // response.data.stagesMatch.map((stages) => {
    //   return stages.IpscMatchId;
    // });
    // });
  }, []);

  //   const getMatch = () => {
  //     axios
  //       .get(`${process.env.REACT_APP_API_URL}/api/match/${matchid}`)
  //       .then((res) => {})
  //       .catch((err) => console.log(err));
  //   };

  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);
  return (
    <div className="match-view">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Matchs{id}</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary mx-2"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-file-pdf"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4zm0 1h8a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z"></path>
                  <path d="M4.603 12.087a.81.81 0 01-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 011.482-.645 19.701 19.701 0 001.062-2.227 7.269 7.269 0 01-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 01.477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 00.98 1.686 5.753 5.753 0 011.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 01-.354.416.856.856 0 01-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 01-.911-.95 11.642 11.642 0 00-1.997.406 11.311 11.311 0 01-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 01-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 00.035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 00.45-.606zm1.64-1.33a12.647 12.647 0 011.01-.193 11.666 11.666 0 01-.51-.858 20.741 20.741 0 01-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 00.07-.015.307.307 0 00.094-.125.436.436 0 00.059-.2.095.095 0 00-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 00-.612-.053zM8.078 5.8a6.7 6.7 0 00.2-.828c.031-.188.043-.343.038-.465a.613.613 0 00-.032-.198.517.517 0 00-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"></path>
                </svg>
              </span>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary mx-2"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-share"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM11 2.5a2.5 2.5 0 11.603 1.628l-6.718 3.12a2.499 2.499 0 010 1.504l6.718 3.12a2.5 2.5 0 11-.488.876l-6.718-3.12a2.5 2.5 0 110-3.256l6.718-3.12A2.5 2.5 0 0111 2.5zm-8.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm11 5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
                </svg>
              </span>
            </button>

            <div className="dropdown">
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle mx-2"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z"></path>
                    <path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z"></path>
                  </svg>
                </span>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Download PDF{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-file-earmark-pdf"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 14V4.5L9.5 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2zM9.5 3A1.5 1.5 0 0011 4.5h2V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1h5.5v2z"></path>
                      <path d="M4.603 14.087a.81.81 0 01-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 011.482-.645 19.697 19.697 0 001.062-2.227 7.269 7.269 0 01-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 01.477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 00.98 1.686 5.753 5.753 0 011.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 01-.354.416.856.856 0 01-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 01-.911-.95 11.651 11.651 0 00-1.997.406 11.307 11.307 0 01-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 01-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 00.035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 00.45-.606zm1.64-1.33a12.71 12.71 0 011.01-.193 11.744 11.744 0 01-.51-.858 20.801 20.801 0 01-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 00.07-.015.307.307 0 00.094-.125.436.436 0 00.059-.2.095.095 0 00-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 00-.612-.053zM8.078 7.8a6.7 6.7 0 00.2-.828c.031-.188.043-.343.038-.465a.613.613 0 00-.032-.198.517.517 0 00-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"></path>
                    </svg>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Download Image{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-file-earmark-image"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.502 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                      <path d="M14 14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2h5.5L14 4.5V14zM4 1a1 1 0 00-1 1v10l2.224-2.224a.5.5 0 01.61-.075L8 11l2.157-3.02a.5.5 0 01.76-.063L13 10V4.5h-2A1.5 1.5 0 019.5 3V1H4z"></path>
                    </svg>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card text-center">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">title</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
      {/* <ChartMatch
        dataMatch={getMatch.Matchs}
        dataId={matchId}
        dataStage={getMatch.Stages}
      /> */}

      <div className="chart-match-list">
        <h2>Match List</h2>
        <div className="table-responsive match-table">
          <table className="darkTable">
            <thead>
              <tr className="tr-select-match-chart align-middle">
                <th scope="col">stagename</th>
                <th scope="col">stagenumber</th>
                <th scope="col">target</th>
                <th scope="col">plate</th>
                <th scope="col">bobber</th>
                <th scope="col">noshoot</th>
                <th scope="col">minRound</th>
                <th scope="col">maxPoint</th>
                <th scope="col">Image Stage</th>
              </tr>
            </thead>
            <tbody>
              {/* {getMatch.Matchs.map((val, key) => {
                return (
                  <tr key={key} className="tr-select-match-chart align-middle">
                    <td>{val.stagename}</td>
                    <td>{val.stagenumber}</td>
                    <td>{val.target}</td>
                    <td>{val.plate}</td>
                    <td>{val.bobber}</td>
                    <td>{val.noshoot}</td>
                    <td>{val.minRound}</td>
                    <td>{val.maxPoint}</td>
                    <td>
                      <button
                        onClick={() => ShowModal(val.imageStage)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        {" "}
                        <img
                          className="rounded"
                          src={val.imageStage}
                          alt={val.imageStage}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })} */}
            </tbody>
          </table>
        </div>
      </div>
      <ModalStagesMatch show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
