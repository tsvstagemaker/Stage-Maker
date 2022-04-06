import React from "react";
import { Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Dashboard from "../pages/Dashboard/Dashboard";
import MatchDashBoard from "../components/DashBoardComponents/Matchs/MatchDashBoard";
import SharedMatchDashBoard from "../components/DashBoardComponents/Matchs/SharedMatchDashBoard";
import StagesDashBoard from "../components/DashBoardComponents/Stages/StagesDashBoard";
import UsersDashBoard from "../components/DashBoardComponents/Users/UsersDashBoard";
import Matchs from "../pages/Matchs/Matchs";
import Match from "../pages/Matchs/Match/Match";
import CreateMatch from "../pages/Matchs/CreateMatch";
import CreateStage from "../pages/Stage/CreateStage";
import CreateStage2 from "../pages/Stage/CreateStage2";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/NotFound/NotFound";
import Terms from "../pages/TermsAndCondition/TermsAndCondition";
import EditProfile from "../pages/Profile/EditProfile";
import MatchView from "../pages/Matchs/MatchView";

export default function Router() {
  const [cookies] = useCookies(["jwt"]);

  return (
    <Routes>
      {cookies.jwt ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route
              path="/Dashboard/MatchDashBoard"
              element={<MatchDashBoard />}
            />
            <Route
              path="/Dashboard/SharedMatchDashBoard"
              element={<SharedMatchDashBoard />}
            />
            <Route
              path="/Dashboard/StagesDashBoard"
              element={<StagesDashBoard />}
            />
            <Route
              path="/Dashboard/UsersDashBoard"
              element={<UsersDashBoard />}
            />
          </Route>
          <Route path="/Matchs" element={<Matchs />} />
          <Route path="/Match/:id" element={<Match />} />
          <Route path="/MatchView" element={<MatchView />} />
          <Route path="/CreateMatch" element={<CreateMatch />} />
          <Route path="/CreateStage" element={<CreateStage />} />
          <Route path="/CreateStage2" element={<CreateStage2 />} />
          {/* <Route path="/Stage" element={<Stage />} /> */}
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="*" element={<NotFound />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Matchs" element={<Matchs />} />
          <Route path="/Match/:id" element={<Match />} />
          <Route path="/MatchView" element={<MatchView />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </>
      )}
    </Routes>
  );
}
