const { Matchs, Likes, Comments, Stages } = require("../models");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

// create match
module.exports.createMatch = async (req, res) => {
  console.log(req.body);
  const {
    Username,
    UserId,
    matchname,
    startAt,
    endAt,
    matchDirector,
    rangeMaster,
    statsDirector,
    clubName,
    countryId,
    matchLevel,
    firearmType,
    squadCount,
    nbrStage,
    imageMatch,
  } = req.body;

  if (!Username) return res.json({ error: "Error: You are not connected !" });
  if (!UserId) return res.json({ error: "Error: You are not connected !" });
  if (!matchname) return res.json({ error: "Error: Missing matchname !" });
  if (!startAt) return res.json({ error: "Error: Missing start match date !" });
  if (!endAt) return res.json({ error: "Error: Missing end match date !" });
  if (!clubName) return res.json({ error: "Error: Missing clubName !" });
  if (!countryId) return res.json({ error: "Error: Missing Region !" });
  if (!firearmType) return res.json({ error: "Error: Missing firearm Type !" });
  if (!squadCount)
    return res.json({ error: "Error: Missing number of squad !" });
  if (!nbrStage) return res.json({ error: "Error: Missing number of Stage !" });
  if (!matchLevel) return res.json({ error: "Error: Missing match Level !" });
  console.log(matchLevel);
  if (matchLevel >= 3 && !matchDirector && !rangeMaster && !statsDirector) {
    return res.json({
      error:
        "Error: For match level 3 or more Missing matchDirector or rangeMaster or statsDirector !",
    });
  }
  // midlewares add image match
  let fileName;
  if (req.file != null) {
    try {
      if (
        req.file.detectedMimeType !== "image/jpg" &&
        req.file.detectedMimeType !== "image/jpeg" &&
        req.file.detectedMimeType !== "image/png" &&
        req.file.detectedMimeType !== "image/svg" &&
        req.file.detectedMimeType !== "image/gif"
      )
        return res.json({
          error:
            "Invalid file Format! accepted Format: jpg, jpeg, png, svg, and gif",
        });

      if (req.file.size > 6000000)
        return res.json({ error: "FILE TOO BIG! Max size 5000ko" });
    } catch (err) {
      return res.json(err);
    }
    const mineType = req.file.detectedMimeType;
    const fileExtension = mineType.split("/").pop();

    fileName =
      req.body.UserId + Date.now() + req.body.Username + "." + fileExtension;

    await pipeline(
      req.file.stream,
      fs.createWriteStream(
        `${__dirname}/../../client/public/uploads/matchs/${fileName}`
      )
    );
  }

  try {
    await Matchs.create({
      Username,
      UserId,
      matchname,
      startAt,
      endAt,
      matchDirector,
      rangeMaster,
      statsDirector,
      clubName,
      countryId,
      matchLevel,
      firearmType,
      squadCount,
      nbrStage,
      imageMatch: req.file != null ? "./uploads/matchs/" + fileName : "",
    });
    res.json({
      success: `${UserId} / ${(UserId, Username)} Match successfully created !`,
    });
  } catch (err) {
    res.json(err);
  }
};

// get All Matchs shared
module.exports.readMatch = async (req, res) => {
  try {
    const listMatchs = await Matchs.findAll({
      where: { shareMatch: true },
      include: [Likes, Comments, Stages],
    });
    res.json(listMatchs);
  } catch (err) {
    res.json(err);
  }
};

// get user Match
module.exports.getUserMatch = async (req, res) => {
  const UserId = req.id.id;
  // console.log(req.id.id);
  try {
    const listMatchsUser = await Matchs.findAll({
      where: { UserId: UserId },
      // include: [LikesMatch],
      include: [Likes, Comments, Stages],
    });
    // console.log(listMatchsUser);
    const likedMatchsUser = await Likes.findAll();
    const commentsUser = await Comments.findAll();
    const stagesMatchUser = await Stages.findAll();
    res.json({
      listMatchsUser: listMatchsUser,
      likedMatchsUser: likedMatchsUser,
      commentsUser: commentsUser,
      stagesMatchUser: stagesMatchUser,
    });
  } catch (err) {
    res.json(err);
  }
};

// get All Matchs shared
module.exports.getUserMatchShared = async (req, res) => {
  const UserId = req.id.id;
  // console.log(req.id.id);
  try {
    const listMatchsUser = await Matchs.findAll({
      where: { UserId: UserId, shareMatch: true },
      // include: [LikesMatch],
      include: [Likes, Comments, Stages],
    });
    // console.log(listMatchsUser);
    const likedMatchsUser = await Likes.findAll();
    const commentsUser = await Comments.findAll();
    const stagesMatchUser = await Stages.findAll();
    res.json({
      listMatchsUser: listMatchsUser,
      likedMatchsUser: likedMatchsUser,
      commentsUser: commentsUser,
      stagesMatchUser: stagesMatchUser,
    });
  } catch (err) {
    res.json(err);
  }
};

// update Match
module.exports.updateMatch = async (req, res) => {
  const id = req.params.id;
  if (!req.params.id) {
    return res.json({ error: "Pas d'Id dans l'URL" });
  }
  const {
    Username,
    UserId,
    matchname,
    startAt,
    matchDirector,
    rangeMaster,
    statsDirector,
    clubName,
    countryId,
    matchLevel,
    firearmType,
    squadCount,
    nbrStage,
    imageMatch,
  } = req.body;

  if (!Username) return res.json({ error: "Error: You are not connected !" });
  if (!UserId) return res.json({ error: "Error: You are not connected !" });
  if (!matchname) return res.json({ error: "Error: Missing matchname !" });
  if (!startAt) return res.json({ error: "Error: Missing startAt !" });
  if (!clubName) return res.json({ error: "Error: Missing clubName !" });
  if (!countryId) return res.json({ error: "Error: Missing Region !" });
  if (!firearmType) return res.json({ error: "Error: Missing firearm Type !" });
  if (!squadCount)
    return res.json({ error: "Error: Missing number of squad !" });
  if (!nbrStage) return res.json({ error: "Error: Missing number of Stage !" });
  if (!matchLevel) return res.json({ error: "Error: Missing match Level !" });
  console.log(matchLevel);
  if (matchLevel >= 3 && !matchDirector && !rangeMaster && !statsDirector) {
    return res.json({
      error:
        "Error: For match level 3 or more Missing matchDirector or rangeMaster or statsDirector !",
    });
  }

  // midlewares update image match
  let fileName;
  if (req.file != null) {
    try {
      if (
        req.file.detectedMimeType !== "image/jpg" &&
        req.file.detectedMimeType !== "image/jpeg" &&
        req.file.detectedMimeType !== "image/png" &&
        req.file.detectedMimeType !== "image/svg" &&
        req.file.detectedMimeType !== "image/gif"
      )
        return res.json({
          error:
            "Invalid file Format! accepted Format: jpg, jpeg, png, svg, and gif",
        });

      if (req.file.size > 6000000)
        return res.json({ error: "FILE TOO BIG! Max size 5000ko" });
    } catch (err) {
      return res.json(err);
    }
    const mineType = req.file.detectedMimeType;
    const fileExtension = mineType.split("/").pop();

    fileName =
      req.body.UserId + Date.now() + req.body.Username + "." + fileExtension;

    await pipeline(
      req.file.stream,
      fs.createWriteStream(
        `${__dirname}/../../client/public/uploads/matchs/${fileName}`
      )
    );
  }

  try {
    await Matchs.update(
      {
        Username,
        UserId,
        matchname,
        startAt,
        matchDirector,
        rangeMaster,
        statsDirector,
        clubName,
        countryId,
        matchLevel,
        firearmType,
        squadCount,
        nbrStage,
        imageMatch: req.file != null ? "./uploads/matchs/" + fileName : "",
      },

      {
        where: { id: id },
      }
    );
    res.json({
      success: `${UserId} / ${(UserId, Username)} Match successfully updated !`,
    });
  } catch (err) {
    res.json(err);
  }
};

// get one Match
module.exports.getOneMatch = async (req, res) => {
  const id = req.params.id;
  console.log(req.params.id + "22222222222222444444444ddddddddddd");
  try {
    const matchOne = await Matchs.findAll({
      where: { id: id },
      include: [Likes, Comments, Stages],
    });
    const likedMatchs = await Likes.findAll();
    const commentsAll = await Comments.findAll();
    const stagesMatch = await Stages.findAll();
    res.json({ matchOne });
  } catch (err) {
    res.json(err);
  }
};

// Update shared match
module.exports.updateSharedMatch = async (req, res) => {
  const { shareMatch } = req.body;
  const id = req.params.id;

  if (shareMatch == 0) {
    message = "Match successfully Unshared !";
  } else {
    message = "Match successfully shared !";
  }

  if (!req.params.id) {
    return res.json({ error: "Pas d'Id dans l'URL" });
  }

  try {
    await Matchs.update(
      {
        shareMatch,
      },

      {
        where: { id: id },
      }
    );
    res.json({
      success: `${message}`,
    });
  } catch (err) {
    res.json(err);
  }
};

// delete Match
module.exports.deleteMatch = async (req, res) => {
  const MatchId = req.params.MatchId;
  try {
    const matchDelete = await Matchs.destroy({
      where: {
        id: MatchId,
      },
    });
    res.json("Match successfully deleted" + matchDelete.matchname);
  } catch (err) {
    res.json(err);
  }
};
