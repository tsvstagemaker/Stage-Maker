const { verify } = require("jsonwebtoken");
const { Users } = require("../models");

module.exports.validateToken = (req, res, next) => {
  // console.log(req.cookies.jwt + "cest le validateToken");
  const token = req.cookies.jwt;

  if (token) {
    verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await Users.findByPk(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports.requireAuth = (req, res, next) => {
  // console.log(req.body.cookies.jwt + "test require");
  const token = req.body.cookies.jwt;
  // console.log(token);

  if (token) {
    verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        // console.log(err + "une errue la");
        return res.status(403).json(err);
      } else {
        // console.log(decodedToken);
        const id = decodedToken.id;
        req.id = decodedToken.id;
        next();
      }
    });
  } else {
    console.log("No token or token not valide");
    return res.json("No Token or token not valide");
  }
};
