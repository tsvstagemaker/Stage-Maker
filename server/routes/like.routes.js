const express = require("express");
const router = express.Router();
const likeController = require("../controllers/like.controller");

router.post("/", likeController.postLike);
router.get("/", likeController.getLike);

module.exports = router;
