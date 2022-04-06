import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import Regions from "../../components/Layout/Regions";
// import Clubs from "../../components/Layout/Clubs";
import logoOnlySvg from "../../images/Logo-stage-maker.svg";

import "./CreateMatch.css";

export default function CreateMatch() {
  const userData = useSelector((state) => state.userReducer);

  // let navigate = useNavigate();

  const [matchname, setmatchname] = useState("");
  const [firearmType, setfirearmType] = useState("");
  const [matchLevel, setmatchLevel] = useState("");
  const [startAt, setstartAt] = useState("");
  const [endAt, setEndAt] = useState("");
  const [matchDirector, setmatchDirector] = useState("");
  const [rangeMaster, setrangeMaster] = useState("");
  const [statsDirector, setstatsDirector] = useState("");
  const [clubName, setclubName] = useState("");
  const [countryId, setcountryId] = useState("");
  const [squadCount, setsquadCount] = useState("");
  const [nbrStage, setnbrStage] = useState("");
  const [WinMssMatchId, setWinMssMatchId] = useState("");
  const [imageMatch, setimageMatch] = useState("");

  const handleLeveles = (e) => {
    let staffMatch = document.querySelectorAll(".staffMatch");
    if (e.target.value >= 3) {
      staffMatch.forEach((staffMatch) => {
        staffMatch.style.display = "block";
      });
    } else {
      staffMatch.forEach((staffMatch) => {
        staffMatch.style.display = "none";
      });
    }
  };

  const onSubmit = (e) => {
    console.log(process.env.REACT_APP_API_URL + "/match");
    e.preventDefault();
    const errorMessage = document.querySelector(".create-match-error");
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/match`, {
        Username: userData.username,
        UserId: userData.id,
        matchname: matchname,
        firearmType: firearmType,
        matchLevel: matchLevel,
        startAt: startAt,
        endAt: endAt,
        matchDirector: matchDirector,
        rangeMaster: rangeMaster,
        statsDirector: statsDirector,
        clubName: clubName,
        countryId: countryId,
        squadCount: squadCount,
        nbrStage: nbrStage,
        WinMssMatchId: WinMssMatchId,
        // likesMatch,
        // shareMatch,
        // messageMatch,
        imageMatch: imageMatch,
      })
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          errorMessage.classList.add("error");
          errorMessage.innerHTML = res.data.error;
        } else {
          errorMessage.classList.remove("error");
          errorMessage.innerHTML = "";
          window.location = "/DashBoard";
          // navigate("/DashBoard");
          // history.push("/ListMatchUser");
        }
      })
      .catch((err) => {});
  };

  return (
    <div className="createMatchPage container p-3">
      <h2 className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        Create Match{" "}
        <img src={logoOnlySvg} alt="Stage maker" width={72} height={57} />
      </h2>
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="form-floating col-md-6">
          <input
            type="text"
            className="form-control input-form-dark"
            id="matchname"
            name="matchname"
            placeholder="Match Name"
            onChange={(e) => setmatchname(e.target.value)}
            value={matchname}
          />
          <label htmlFor="matchname" className="form-label">
            Match Name
          </label>
        </div>
        <div className="form-floating col-md-6">
          <select
            className="form-select form-select-dark"
            id="firearmType"
            name="firearmType"
            aria-label="Firearm Type"
            onChange={(e) => setfirearmType(e.target.value)}
            value={firearmType}
          >
            <option value="">Select Firearm Type</option>
            <option value="0">Handgun</option>
            <option value="1">Rifle</option>
            <option value="2">Shotgun</option>
            <option value="3">PCC</option>
            <option value="4">Mini-Rifle</option>
            <option value="5">Action-Air</option>
          </select>
          <label htmlFor="firearmType">Firearm Type</label>
        </div>
        <div className="form-floating col-md-4">
          <select
            className="form-select form-select-dark"
            id="matchLevel"
            name="matchLevel"
            aria-label="Match Level"
            onChange={(e) => setmatchLevel(e.target.value)}
            value={matchLevel}
            onClick={handleLeveles}
          >
            <option value="">Select Level</option>
            <option value="0">Training</option>
            <option value="1">Level I</option>
            <option value="2">Level II</option>
            <option value="3">Level III</option>
            <option value="4">Level IV</option>
            <option value="5">Level V</option>
          </select>
          <label htmlFor="matchLevel">Match Level</label>
        </div>
        <div className="form-floating col-md-4">
          <select
            className="form-select form-select-dark"
            id="squadCount"
            name="squadCount"
            aria-label="Number of squad"
            onChange={(e) => setsquadCount(e.target.value)}
            value={squadCount}
          >
            <option value="">Select Number of squad</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
            <option value="56">56</option>
            <option value="57">57</option>
            <option value="58">58</option>
            <option value="59">59</option>
            <option value="60">60</option>
            <option value="61">61</option>
            <option value="62">62</option>
            <option value="63">63</option>
            <option value="64">64</option>
            <option value="65">65</option>
            <option value="66">66</option>
            <option value="67">67</option>
            <option value="68">68</option>
            <option value="69">69</option>
            <option value="70">70</option>
            <option value="71">71</option>
            <option value="72">72</option>
            <option value="73">73</option>
            <option value="74">74</option>
            <option value="75">75</option>
            <option value="76">76</option>
            <option value="77">77</option>
            <option value="78">78</option>
            <option value="79">79</option>
            <option value="80">80</option>
            <option value="81">81</option>
            <option value="82">82</option>
            <option value="83">83</option>
            <option value="84">84</option>
            <option value="85">85</option>
            <option value="86">86</option>
            <option value="87">87</option>
            <option value="88">88</option>
            <option value="89">89</option>
            <option value="90">90</option>
            <option value="91">91</option>
            <option value="92">92</option>
            <option value="93">93</option>
            <option value="94">94</option>
            <option value="95">95</option>
            <option value="96">96</option>
            <option value="97">97</option>
            <option value="98">98</option>
            <option value="99">99</option>
          </select>
          <label htmlFor="squadCount">Number of squad</label>
        </div>
        <div className="form-floating col-md-4">
          <select
            className="form-select form-select-dark"
            id="nbrStage"
            name="nbrStage"
            aria-label="Number of Stage"
            onChange={(e) => setnbrStage(e.target.value)}
            value={nbrStage}
          >
            <option value="">Select number of stage</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33 (optional)</option>
            <option value="34">34 (optional)</option>
            <option value="35">35 (optional)</option>
            <option value="36">36 (optional)</option>
          </select>
          <label htmlFor="nbrStage">Number of Stage</label>
        </div>
        <div className="form-floating col-md-4 staffMatch">
          <input
            type="text"
            className="form-control input-form-dark"
            id="matchDirector"
            name="matchDirector"
            placeholder="Match Director"
            onChange={(e) => setmatchDirector(e.target.value)}
            value={matchDirector}
          />
          <label htmlFor="matchDirector" className="form-label">
            Enter Match Director Name
          </label>
        </div>
        <div className="form-floating col-md-4 staffMatch">
          <input
            type="text"
            className="form-control input-form-dark"
            id="rangeMaster"
            name="rangeMaster"
            placeholder="Range Master"
            onChange={(e) => setrangeMaster(e.target.value)}
            value={rangeMaster}
          />
          <label htmlFor="rangeMaster" className="form-label">
            Enter Range Master Name
          </label>
        </div>
        <div className="form-floating col-md-4 staffMatch">
          <input
            type="text"
            className="form-control input-form-dark"
            id="statsDirector"
            name="statsDirector"
            placeholder="Stats Director"
            onChange={(e) => setstatsDirector(e.target.value)}
            value={statsDirector}
          />
          <label htmlFor="statsDirector" className="form-label">
            Enter Stats Director Name
          </label>
        </div>
        <div className="form-floating col-md-6">
          <input
            type="text"
            className="form-control input-form-dark"
            id="clubName"
            name="clubName"
            placeholder="Club Name"
            onChange={(e) => setclubName(e.target.value)}
            value={clubName}
          />
          <label htmlFor="clubName" className="form-label">
            Club Name
          </label>
        </div>
        <div className="form-floating col-md-6">
          <select
            className="form-select form-select-dark"
            id="countryId"
            name="countryId"
            aria-label="Region"
            onChange={(e) => setcountryId(e.target.value)}
            value={countryId}
          >
            <Regions />
          </select>
          <label htmlFor="countryId">Region</label>
        </div>

        <div className="form-floating col-md-6">
          <input
            type="date"
            className="form-control input-form-dark"
            name="startAt"
            id="startAt"
            placeholder="Start At"
            onChange={(e) => setstartAt(e.target.value)}
            value={startAt}
          />
          <label htmlFor="startAt">From</label>
        </div>

        <div className="form-floating col-md-6">
          <input
            type="date"
            className="form-control input-form-dark"
            name="endAt"
            id="endAt"
            placeholder="Start At"
            onChange={(e) => setEndAt(e.target.value)}
            value={endAt}
          />
          <label htmlFor="endAt">TO</label>
        </div>

        <div className="create-match-error" role="alert"></div>
        <div className="col-md-12 text-center">
          {/* <button type="submit" className="btn btn-info mb-4">
            Create Match
          </button> */}
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Create Match
          </button>
        </div>
      </form>
    </div>
  );
}
