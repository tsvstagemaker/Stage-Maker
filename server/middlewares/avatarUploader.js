// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "../client/public/uploads/profile/avatar/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/gif" ||
//     file.mimetype === "image/svg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(new Error("Unsupported file format"), false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: "1000000" },
//   fileFilter: fileFilter,
// });

// module.exports = { upload: upload };

const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

const upload = async (req, res) => {
  try {
    if (
      req.file.mimetype !== "image/jpg" &&
      req.file.mimetype !== "image/jpeg" &&
      req.file.mimetype !== "image/png" &&
      req.file.mimetype !== "image/svg" &&
      req.file.mimetype !== "image/gif"
    )
      throw Error("Invalid file, Format acceptd: jpg, jpeg, png, svg, and gif");

    if (req.file.size > 500000) throw Error("Max size ");
  } catch (err) {
    return res.json(err);
  }

  const minType = req.file.mimetype;
  const fileExtension = minType.split(".").pop();
  // console.log(req.file.stream);

  const fileName = req.body.username + "." + fileExtension;
  await pipeline(
    req.file.stream,
    fs.createWriteStream(
      `${__dirname}/../../client/public/uploads/profile/${fileName}`
    )
  );
};

module.exports = { upload: upload };
