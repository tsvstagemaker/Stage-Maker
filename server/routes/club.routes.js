const express = require("express");
const router = express.Router();
const clubController = require("../controllers/club.controller");

router.get("/", clubController.readClub);

module.exports = router;
