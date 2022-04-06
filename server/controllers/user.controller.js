const express = require("express");
const { Users, Likes, Comments, Matchs, Stages } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const {signUpErrors} from "../Utils/errors.utils.js";

// Constants
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
// const expire cookie delai
const maxAge = 3 * 24 * 60 * 60 * 1000;

let refreshTokens = [];

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, isAdmin: user.isAdmin },
    process.env.TOKEN_SECRET,
    {
      expiresIn: maxAge,
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.id, isAdmin: user.isAdmin },
    process.env.TOKEN_REFRESH_SECRET
  );
};

// function to create token
// const createToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: maxAge,
//   });
// };

// const createToken = (id) => {
//   // console.log(id);
//   return jwt.sign({ id }, process.env.TOKEN_SECRET, {
//     expiresIn: maxAge,
//   });
// };

// register User
module.exports.signUp = async (req, res) => {
  // console.log(req.body);
  const {
    email,
    password,
    username,
    firstname,
    lastname,
    region,
    club,
    isVerified,
    isAdmin,
  } = req.body;

  if (!username) return res.json({ errorUsername: "Error: Missing username!" });
  if (!email) return res.json({ errorEmail: "Error: Missing Email !" });
  if (!password) return res.json({ errorPassword: "Error: Missing password!" });

  if (!firstname)
    return res.json({ errorFirstname: "Error: Missing firstname!" });
  if (!lastname) return res.json({ errorLastname: "Error: Missing lastname!" });
  if (!region) return res.json({ errorRegion: "Error: Missing region!" });
  if (!club) return res.json({ errorClub: "Error: Missing Ipsc club!" });
  if (username.length >= 16 || username.length <= 4)
    return res.json({ error: "Username must be length 5 - 15 characteres" });

  if (!EMAIL_REGEX.test(email))
    return res.json({
      errorEmail: "Email is not valid (ex: exemple@ipsc.com)",
    });

  if (!PASSWORD_REGEX.test(password))
    return res.json({
      errorPassword:
        "Password is not valid ! <br/> - must length at least 8 characters. <br/> - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. <br/> - Can contain special characters",
    });

  const emailCheck = await Users.findOne({
    where: { email: email },
  });
  if (emailCheck)
    return res.json({
      errorEmail: "Email already use, please use another email!",
    });

  const userCheck = await Users.findOne({
    where: { username: username },
  });
  if (userCheck)
    return res.json({
      errorUsername: "Username already use, please use another username!",
    });

  // hash password with bcrypt
  try {
    bcrypt.hash(password, 10).then((hash) => {
      const user = Users.create({
        email: email,
        username: username,
        password: hash,
        firstname: firstname,
        lastname: lastname,
        region: region,
        club: club,
        isVerified,
        isAdmin,
      });
      res.json(req.body.username);
    });
  } catch (err) {
    res.json(err);
  }
};

// Login User
module.exports.signIn = async (req, res) => {
  // console.log(req.body);
  const { email, password, isAdmin, isVerified } = req.body;

  try {
    if (email === "")
      return res.json({ errorEmail: "Please fill email field" });

    if (password === "")
      return res.json({ errorPassword: "Please fill password field" });

    // check if user exist
    const user = await Users.findOne({
      where: { email: email },
    });

    if (!user)
      res.status(400).json({ errorEmail: "User or password incorrect" });

    // compare hash password with bcrypt
    const passwordIsValid = bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      res.status(400).json({
        // token: null,
        errorPassword: "User or password incorrect",
      });
    }
    // bcrypt.compare(password, user.password).then(async (match) => {
    //   if (!match)
    //     return res.json({
    //       errorPassword: "Wrong email or password combination",
    //     });

    // create token and set cookie with information user and token
    // const token = createToken(user.id);
    // res.cookie("jwt", token, { maxAge, HttpOnly: true });

    // res.json({ username: user.username, userId: user.id, token: token });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    refreshTokens.push(refreshToken);

    res.json({
      username: user.username,
      isAdmin: user.isAdmin,
      userId: user.id,
      accessToken,
      refreshToken,
    });

    // });
  } catch (error) {
    res.json(error);
  }
};

module.exports.getAllUsers = async (req, res) => {
  const allUsers = await Users.findAll({
    attributes: { exclude: ["password"] },
    include: [Likes, Comments, Matchs, Stages],
  });

  res.json(allUsers);
};

// get info one user
module.exports.userInfo = async (req, res) => {
  // console.log(req.params);
  if (!req.params.id) {
    return res.json({ error: "Pas d'Id dans l'URL" });
  }
  const id = req.params.id;

  try {
    const profileUserOne = await Users.findByPk(id, {
      attributes: { exclude: ["password"] },
      include: [Likes, Comments, Matchs, Stages],
    });
    if (!profileUserOne) {
      return res.json({ error: "Id does not exist!" });
    }
    res.json(profileUserOne);
  } catch (err) {
    res.json("Id Unknow: " + req.params.id + err);
  }
};

// Update user
module.exports.updateUser = async (req, res) => {
  // console.log(req.params.id);
  if (!req.params.id) {
    return res.json({ error: "Pas d'Id dans l'URL" });
  }
  const id = req.params.id;
  const { username, region, club, email, lastname, firstname } = req.body;
  try {
    const idCheck = await Users.findOne({
      where: { id: id },
    });
    if (idCheck) {
      Users.update(
        {
          username: username,
          region: region,
          club: club,
          email: email,
          lastname: lastname,
          firstname: firstname,
        },
        {
          where: { id: id },
        }
      );
      res.json("Profile successfully updated ");
    } else {
      return res.json({ error: "id does not exist" });
    }
  } catch (err) {
    res.json("Id Unknow: " + req.params.id + err);
  }
};

// delete User
module.exports.deleteUser = async (req, res) => {
  console.log(req.user.id);
  console.log(req.params.userId);
  if (req.user.id == req.params.userId || req.user.isAdmin) {
    const id = req.params.userId;
    try {
      const idCheck = await Users.findOne({
        where: { id: id },
      });
      if (idCheck) {
        Users.destroy({
          where: { id: id },
        });
        res.status(200).json("User has been deleted");
      } else {
        res.status(403).json({ error: "User does not exist" });
      }
    } catch (err) {
      res.json("Id Unknow");
    }
  } else {
    res.status(403).json("You are not allowed to delete this user");
  }
};

// logout
module.exports.logout = async (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("You logged out successfully.");
};

//refresh token
module.exports.refreshToken = async (req, res) => {
  const refreshToken = req.body.token;

  //send error if there is no token or it's invalid
  if (!refreshToken) return res.status(401).json("You are not authenticated!");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid!");
  }
  jwt.verify(refreshToken, process.env.TOKEN_REFRESH_SECRET, (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
};
