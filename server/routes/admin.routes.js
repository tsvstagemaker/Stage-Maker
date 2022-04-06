const express = require("express");
const router = express.Router();
const { Users, Likes, Comments, Matchs, Stages } = require("../models");

// Profile users
router.get("/", async (req, res) => {
  const profilesUsers = await Users.findAll({
    attributes: { exclude: ["password"] },
    include: [Likes, Comments, Matchs, Stages],
  });

  res.json(profilesUsers);
});

// Profile one user
router.get("/:id", async (req, res) => {
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
      return res.json({ error: "l'id" + " " + id + " " + "n'existe pas!" });
    }
    res.json(profileUserOne);
  } catch (err) {
    res.json("Id Unknow: " + req.params.id + err);
  }
});

module.exports = router;
