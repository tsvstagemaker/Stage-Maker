const express = require("express");
const router = express.Router();
const stageController = require("../controllers/stage.controller");

router.post("/", stageController.createStage);
router.get("/", stageController.readStage);
router.get("/:id", stageController.getOneStage);
router.get("/:id/stageUser", stageController.getUserStage);
router.patch("/:id", stageController.updateStage);
router.delete("/:id", stageController.deleteStage);

module.exports = router;
