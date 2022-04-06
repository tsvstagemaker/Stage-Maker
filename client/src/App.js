import React, { useState, useEffect, useContext } from "react";
import Routes from "./Routes/Router";
import { UidContext } from "./components/Context/AppContext";
import { ThemeContext } from "./components/Context/ThemeContext";
// import { Routes, Route } from "react-router-dom";
// import { UidContext } from "./components/Context/AppContext";
// import { useCookies } from "react-cookie";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// import { UserContext } from "./components/Context/UserContext";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";
import "./App.css";

export default function App() {
  const [{ theme, isDarkMode }, toogleTheme] = useContext(ThemeContext);
  // console.log("theme", theme);
  const [uid, setUid] = useState(null);
  // const providerUser = useMemo(() => ({ uid, setUid }), [uid, setUid]);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/jwtid`,
        data: {
          cookies,
        },
      })
        .then((res) => {
          // console.log(res.data);
          const userId = res.data;
          setUid(userId);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();

    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch, cookies]);

  return (
    <UidContext.Provider value={uid}>
      <div
        className="App"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <NavBar />
        <Routes />
        <Footer />
      </div>
    </UidContext.Provider>
  );
}
