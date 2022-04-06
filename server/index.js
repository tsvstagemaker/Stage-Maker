//import
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "./config/.env" });
const { validateToken, requireAuth } = require("./middlewares/AuthMiddleware");

//midleware
app.use(express.json());

// const corsOptions = {
//   origin: process.env.CLIENT_URL,
//   // origin: "http://localhost:3000",
//   credentials: true,
//   allowedHeaders: ["sessionId", "Content-Type"],
//   exposedHeaders: ["sessionId"],
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   preflightContinue: false,
// };

// app.use(cors({ corsOptions }));
app.use(cors());
app.use(cookieParser());

const db = require("./models");

// Middlewares jwt
app.get("*", validateToken);
// app.get("/jwtid", requireAuth, (req, res) => {
//   res.json(res.locals.user.id);
// });

app.post("/jwtid", requireAuth, (req, res) => {
  // console.log(req.id);
  // res.json(res.locals.user.id);
  const id = req.id;
  // console.log(id);
  res.json(id);
});

///static Images profile folder
app.use("../client/public/uploads/profile/avatar", express.static("avatar"));

// Routes

//users
const userRoutes = require("./routes/user.routes");
app.use("/api/user", userRoutes);

//matchs
const matchRoutes = require("./routes/match.routes");
app.use("/api/match", matchRoutes);

//stages
const stageRoutes = require("./routes/stage.routes");
app.use("/api/stage", stageRoutes);

//comments
const commentRoutes = require("./routes/comment.routes");
app.use("/api/comment", commentRoutes);

//likesMatchs
const likeRoutes = require("./routes/like.routes");
app.use("/api/like", likeRoutes);

//Regions
const regionRoutes = require("./routes/region.routes");
app.use("/api/region", regionRoutes);

//Clubs
const clubRoutes = require("./routes/club.routes");
app.use("/api/club", clubRoutes);

//Admin
const adminRoutes = require("./routes/admin.routes");
app.use("/api/admin", adminRoutes);

// synch db from Model, listen server
db.sequelize.sync().then(() => {
  app.listen(`${process.env.DB_PORT}` || 3001, () => {
    console.log(
      `Server running on port ${process.env.DB_PORT} et ${process.env.CLIENT_URL}`
    );
  });
});
