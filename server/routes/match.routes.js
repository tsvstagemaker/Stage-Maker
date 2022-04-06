const router = require("express").Router();
const matchController = require("../controllers/match.controller");
const multer = require("multer");
const upload = multer();

router.post("/", upload.single("file"), matchController.createMatch);
router.get("/", matchController.readMatch);
router.get("/:id", matchController.getOneMatch);
router.get("/matchUser:id", matchController.getUserMatch);
router.get("/matchUser:id", matchController.getUserMatchShared);
router.patch("/:id", upload.single("file"), matchController.updateMatch);
router.patch("/shared/:id", matchController.updateSharedMatch);
// router.put("/:id", matchController.updateMatch);
router.delete("/:id", matchController.deleteMatch);

module.exports = router;
