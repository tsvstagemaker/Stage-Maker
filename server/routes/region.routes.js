const express = require("express");
const router = express.Router();
const regionController = require("../controllers/region.controller");

router.get("/", regionController.readRegion);

module.exports = router;
