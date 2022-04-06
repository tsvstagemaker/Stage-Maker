import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";
import { getUser } from "./actions/user.actions";
import { getUsers } from "./actions/users.actions";
import { getMatchs } from "./actions/match.actions";
import { getMatch } from "./actions/match.actions";
import { getStage } from "./actions/stage.actions";
import { ThemeProvider } from "./components/Context/ThemeContext";

// dev tools
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css";
import App from "./App";

// message if dark mode activate
// if (
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches
// ) {
//   alert("You are in dark mode!");
// }

// Active dark mode if hour beetween 5AM to 18PM
// const themeMode = () => {
//   const date = new Date();
//   const hour = date.getHours();

//   console.log(hour);

//   if (hour > 5 || hour < 18) {
//     document.documentElement.style.setProperty("--font-light", "#333333");
//     document.documentElement.style.setProperty("--bg-light", "#ffffff");
//   } else {
//     document.documentElement.style.setProperty("--font-light", "#ffffff");
//     document.documentElement.style.setProperty("--bg-light", "#333333");
//   }
// };
// themeMode();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getUser());
store.dispatch(getUsers());
store.dispatch(getMatchs());
store.dispatch(getMatch());
store.dispatch(getStage());

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </CookiesProvider>,

  document.getElementById("root")
);
