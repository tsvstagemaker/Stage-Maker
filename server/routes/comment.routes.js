const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment.controller");

router.post("/", commentController.postComment);
router.get("/:MatchId", commentController.getComment);
router.delete("/:MatchId", commentController.deleteComment);

module.exports = router;
