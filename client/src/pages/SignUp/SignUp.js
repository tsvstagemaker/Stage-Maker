import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Regions from "../../components/Layout/Regions";
import Clubs from "../../components/Layout/Clubs";
import "./SignUp.css";
import logoOnlySvg from "../../images/Logo-stage-maker.svg";

export default function SignUp() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [club, setClub] = useState("");
  const [region, setRegion] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".passwordConfirm.error"
    );
    const UsernameError = document.querySelector(".username.error");
    const FirstnameError = document.querySelector(".firstname.error");
    const LastnameError = document.querySelector(".lastname.error");
    const ClubError = document.querySelector(".club.error");
    const RegionError = document.querySelector(".region.error");
    const termsCondiError = document.querySelector(".terms-condi.error");

    passwordConfirmError.innerHTML = "";
    termsCondiError.innerHTML = "";

    if (password !== passwordConfirm || !terms.checked) {
      if (password !== passwordConfirm)
        passwordConfirmError.innerHTML = "Password not match";
      if (!terms.checked)
        termsCondiError.innerHTML = "Please valid terms and conditions";
    } else {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/api/user/register`,
        // url: "http://localhost:3001/api/user/login",
        // withCredentials: true,
        data: {
          email,
          password,
          username,
          firstname,
          lastname,
          club,
          region,
          isVerified: false,
          isAdmin: false,
        },
      })
        .then((res) => {
          if (res.data.errorUsername) {
            UsernameError.innerHTML = res.data.errorUsername;
            emailError.innerHTML = "";
            passwordError.innerHTML = "";
            passwordConfirmError.innerHTML = "";
            FirstnameError.innerHTML = "";
            LastnameError.innerHTML = "";
            RegionError.innerHTML = "";
            ClubError.innerHTML = "";
          } else if (res.data.errorEmail) {
            emailError.innerHTML = res.data.errorEmail;
            passwordError.innerHTML = "";
            passwordConfirmError.innerHTML = "";
            UsernameError.innerHTML = "";
            FirstnameError.innerHTML = "";
            LastnameError.innerHTML = "";
            RegionError.innerHTML = "";
            ClubError.innerHTML = "";
          } else if (res.data.errorPassword) {
            passwordError.innerHTML = res.data.errorPassword;
            emailError.innerHTML = "";
            UsernameError.innerHTML = "";
            FirstnameError.innerHTML = "";
            LastnameError.innerHTML = "";
            RegionError.innerHTML = "";
            ClubError.innerHTML = "";
          } else if (res.data.errorFirstname) {
            FirstnameError.innerHTML = res.data.errorFirstname;
            emailError.innerHTML = "";
            passwordError.innerHTML = "";
            passwordConfirmError.innerHTML = "";
            UsernameError.innerHTML = "";
            LastnameError.innerHTML = "";
            RegionError.innerHTML = "";
            ClubError.innerHTML = "";
          } else if (res.data.errorLastname) {
            LastnameError.innerHTML = res.data.errorLastname;
            emailError.innerHTML = "";
            passwordError.innerHTML = "";
            passwordConfirmError.innerHTML = "";
            UsernameError.innerHTML = "";
            FirstnameError.innerHTML = "";
            RegionError.innerHTML = "";
            ClubError.innerHTML = "";
          } else if (res.data.errorRegion) {
            RegionError.innerHTML = res.data.errorRegion;
            emailError.innerHTML = "";
            passwordError.innerHTML = "";
            passwordConfirmError.innerHTML = "";
            UsernameError.innerHTML = "";
            FirstnameError.innerHTML = "";
            LastnameError.innerHTML = "";
            ClubError.innerHTML = "";
          } else if (res.data.errorClub) {
            ClubError.innerHTML = res.data.errorClub;
            emailError.innerHTML = "";
            passwordError.innerHTML = "";
            passwordConfirmError.innerHTML = "";
            UsernameError.innerHTML = "";
            FirstnameError.innerHTML = "";
            LastnameError.innerHTML = "";
            RegionError.innerHTML = "";
          } else {
            // window.location = "/";
            navigate("/Signin");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="text-center container container-signup">
      <main className="form-signin">
        <form action="" onSubmit={handleSignup} id="sign-up-form">
          <h2 className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            Please sign up{" "}
            <img src={logoOnlySvg} alt="Stage maker" width={72} height={57} />
          </h2>
          <div className="row row-signup">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  name="username"
                  className="form-control input-form-dark"
                  id="floatingusername"
                  placeholder="Username"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="floatingusername">Username</label>
                <div className="username error"></div>

                <small id="emailHelp" className="form-text text-muted">
                  Username will be displayed to all if you share or comment
                  matches !
                </small>
              </div>
            </div>
            <div className="col-md-6 mb-2">
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
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="password"
                  name="password"
                  className="form-control input-form-dark"
                  id="floatingPassword"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
                <div className="password error"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="password"
                  name="password"
                  className="form-control input-form-dark"
                  id="floatingPasswordConfirm"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                <label htmlFor="floatingPasswordConfirm">
                  Confirm Password
                </label>
                <div className="passwordConfirm error"></div>
              </div>
            </div>
            {/* </div>
          <div className="row row-signup"> */}
            <div className="col-md-6 mb-2">
              <div className="form-floating">
                <input
                  type="text"
                  name="firstname"
                  className="form-control input-form-dark"
                  id="floatingfirstname"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <label htmlFor="floatingfirstname">Firstname</label>
                <div className="firstname error"></div>
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-floating">
                <input
                  type="text"
                  name="lastname"
                  className="form-control input-form-dark"
                  id="floatinglastname"
                  placeholder="Lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <label htmlFor="floatinglastname">Lastname</label>
                <div className="lastname error"></div>
              </div>
            </div>
          </div>
          <div className="row row-signup">
            <div className="col-md-6 mb-2">
              <div className="form-floating">
                <select
                  name="club"
                  value={club}
                  onChange={(e) => setClub(e.target.value)}
                  className="form-select form-select-lg form-select-dark"
                  aria-label="Default select example"
                >
                  <Clubs />
                </select>
                <label htmlFor="floatingclub">Ipsc Club</label>
                <div className="club error"></div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <select
                  type="text"
                  name="club"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="form-select form-select-lg form-select-dark"
                  aria-label="Default select example"
                >
                  <Regions />
                </select>
                <label htmlFor="floatingRegion">Region</label>
                <div className="region error"></div>
              </div>
            </div>
          </div>

          <div className="checkbox mt-3 mb-3">
            <label className="text-muted">
              <input
                type="checkbox"
                defaultValue="remember-me"
                id="terms"
                className="mx-1"
              />
              I have read and accepted the{" "}
              <NavLink
                to="/terms"
                className="terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms and Conditions
              </NavLink>
            </label>
            <div className="terms-condi error"></div>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}
