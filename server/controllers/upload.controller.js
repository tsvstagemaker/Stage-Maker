const { Users } = require("../models");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

module.exports.uploadProfile = async (req, res) => {
  console.log(req.body, req.file);
  try {
    if (
      req.file.detectedMimeType !== "image/jpg" &&
      req.file.detectedMimeType !== "image/jpeg" &&
      req.file.detectedMimeType !== "image/png" &&
      req.file.detectedMimeType !== "image/svg" &&
      req.file.detectedMimeType !== "image/gif"
    )
      // throw Error("Invalid file, Format acceptd: jpg, jpeg, png, svg, and gif");
      return res.json({
        error:
          "Invalid file Format! accepted Format: jpg, jpeg, png, svg, and gif",
      });

    if (req.file.size > 500000)
      // throw Error("Max size");
      return res.json({ error: "FILE TOO BIG! Max size 500ko" });
  } catch (err) {
    return res.json(err);
  }
  const mineType = req.file.detectedMimeType;
  const fileExtension = mineType.split("/").pop();
  const username = req.body.username;

  const fileName = username + "." + fileExtension;
  await pipeline(
    req.file.stream,
    fs.createWriteStream(
      `${__dirname}/../../client/public/uploads/profile/avatar/${fileName}`
    )
  );
  try {
    const uploadAvatar = await Users.update(
      {
        avatar: "./uploads/profile/avatar/" + fileName,
      },
      {
        where: { username: username },
      }
    );
    if (!uploadAvatar) {
      return res.json({ error: "Avatar is not added to db!" });
    }
    res.json(uploadAvatar);
  } catch (err) {
    res.json(err);
  }
};
