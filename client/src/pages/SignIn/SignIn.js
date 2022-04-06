import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import logoOnlySvg from "../../images/Logo-stage-maker.svg";
import { useCookies } from "react-cookie";
export default function SignIn() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const maxAge = 86400 * 365;

  const [cookies, setCookie] = useCookies(["jwt"]);

  const handleSignin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/user/login`,
      // url: "http://localhost:3001/api/user/login",
      // withCredentials: true,
      data: {
        email,
        password,
        isAdmin: false,
        isVerified: false,
      },
    })
      .then((res) => {
        console.log(res.data);
        const token = res.data.accessToken;
        if (res.data.errorEmail) {
          emailError.innerHTML = res.data.errorEmail;
          passwordError.innerHTML = "";
        } else if (res.data.errorPassword) {
          passwordError.innerHTML = res.data.errorPassword;
          emailError.innerHTML = "";
        } else {
          setCookie("jwt", token, {
            path: "/",
            maxAge: maxAge,
          });
          navigate("/");
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <main className="form-signin">
        <form action="" onSubmit={handleSignin} id="sign-up-form">
          <h2 className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            Please sign up{" "}
            <img src={logoOnlySvg} alt="Stage maker" width={72} height={57} />
          </h2>

          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control input-form-dark"
              id="floatingInput"
              placeholder="name@example.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
            <div className="email error"></div>
          </div>
          <div className="form-floating">
            <input
              className="form-control input-form-dark"
              type="password"
              name="password"
              id="floatingPassword"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
            <div className="password error"></div>
          </div>

          <div className="checkbox checkbox-signin mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}
