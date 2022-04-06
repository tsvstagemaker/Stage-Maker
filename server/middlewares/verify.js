const jwt = require("jsonwebtoken");

module.exports.verify = async (req, res, next) => {
  console.log(req.headers.authorization);
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    // console.log(token);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valide");
      }

      req.user = user;
      // console.log(req.user)

      next();
    });
  } else {
    res.status(401).json("You are not authenticated");
  }
};
