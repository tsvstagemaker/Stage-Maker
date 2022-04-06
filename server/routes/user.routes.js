const router = require("express").Router();
const userController = require("../controllers/user.controller");
const uploadController = require("../controllers/upload.controller");
const multer = require("multer");
const upload = multer();
const verify = require("../middlewares/verify");

router.post("/register", userController.signUp);
router.post("/login", userController.signIn);
router.post("/refreshToken", userController.refreshToken);
router.post("/logout", verify.verify, userController.logout);
// router.get("/logout", verify.verify, userController.logout);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.patch("/:id", userController.updateUser);
// router.put("/:id", userController.updateUser);
router.delete("/:userId", verify.verify, userController.deleteUser);

// upload image profile
router.post("/upload", upload.single("file"), uploadController.uploadProfile);

module.exports = router;
