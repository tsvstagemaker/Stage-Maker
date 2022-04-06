const { Stages } = require("../models");

// Create stage
module.exports.createStage = async (req, res) => {
  const {
    stageName,
    stageNumber,
    firearmId,
    courseId,
    scoringId,
    trgtTypeId,
    icsStageId,
    trgtPaper,
    trgtPopper,
    trgtPlates,
    trgtVanish,
    trgtPenlty,
    minRounds,
    reportOn,
    maxPoints,
    startPos,
    StartOn,
    stringCnt,
    descriptn,
    bobber,
    location,
    dataStage,
    withdraw,
    Username,
    UserId,
    MatchId,
  } = req.body;

  if (!Username) return res.json({ error: "Error: You are not connected !" });
  if (!UserId) return res.json({ error: "Error: You are not connected !" });
  if (!stageName) return res.json({ error: "Error: Missing stageName !" });
  if (!stageNumber) return res.json({ error: "Error: Missing stageNumber !" });
  if (!firearmId) return res.json({ error: "Error: Missing firearmId !" });
  if (!courseId) return res.json({ error: "Error: Missing courseId !" });
  if (!scoringId)
    return res.json({ error: "Error: Missing number of scoringId !" });
  if (!trgtTypeId)
    return res.json({ error: "Error: Missing number of trgtTypeId !" });

  try {
    await Stages.create({
      stageName,
      stageNumber,
      firearmId,
      courseId,
      scoringId,
      trgtTypeId,
      icsStageId,
      trgtPaper,
      trgtPopper,
      trgtPlates,
      trgtVanish,
      trgtPenlty,
      minRounds,
      reportOn,
      maxPoints,
      startPos,
      StartOn,
      stringCnt,
      descriptn,
      bobber,
      location,
      dataStage,
      withdraw,
      Username,
      UserId,
      MatchId,
    });
    res.json({
      success: `Stage ${stageName} / ${stageNumber} successfully created !`,
    });
  } catch (err) {
    res.json(err);
  }
};

// get all stages
module.exports.readStage = async (req, res) => {
  try {
    const liststage = await Stages.findAll();
    res.json({ liststage });
  } catch (err) {
    res.json(err);
  }
};

// get one stage
module.exports.getOneStage = async (req, res) => {
  const id = req.params.id;
  try {
    const stageOne = await Stages.findOne({
      where: { id: id },
    });

    res.json({ stageOne });
  } catch (err) {
    res.json(err);
  }
};

// get all stage user
module.exports.getUserStage = async (req, res) => {
  const UserId = req.params.id;
  try {
    const listStagesUser = await Stages.findAll({
      where: { UserId: UserId },
    });
    res.json({ listStagesUser });
  } catch (err) {
    res.json(err);
  }
};

// update stage
module.exports.updateStage = async (req, res) => {
  const id = req.params.id;
  if (!req.params.id) {
    return res.json({ error: "Pas d'Id dans l'URL" });
  }
  const {
    stageName,
    stageNumber,
    firearmId,
    courseId,
    scoringId,
    trgtTypeId,
    icsStageId,
    trgtPaper,
    trgtPopper,
    trgtPlates,
    trgtVanish,
    trgtPenlty,
    minRounds,
    reportOn,
    maxPoints,
    startPos,
    StartOn,
    stringCnt,
    descriptn,
    bobber,
    location,
    dataStage,
    withdraw,
    Username,
    UserId,
    MatchId,
  } = req.body;

  if (!Username) return res.json({ error: "Error: You are not connected !" });
  if (!UserId) return res.json({ error: "Error: You are not connected !" });
  if (!stageName) return res.json({ error: "Error: Missing stageName !" });
  if (!stageNumber) return res.json({ error: "Error: Missing stageNumber !" });
  if (!firearmId) return res.json({ error: "Error: Missing firearmId !" });
  if (!courseId) return res.json({ error: "Error: Missing courseId !" });
  if (!scoringId)
    return res.json({ error: "Error: Missing number of scoringId !" });
  if (!trgtTypeId)
    return res.json({ error: "Error: Missing number of trgtTypeId !" });

  try {
    await Stages.update(
      {
        stageName,
        stageNumber,
        firearmId,
        courseId,
        scoringId,
        trgtTypeId,
        icsStageId,
        trgtPaper,
        trgtPopper,
        trgtPlates,
        trgtVanish,
        trgtPenlty,
        minRounds,
        reportOn,
        maxPoints,
        startPos,
        StartOn,
        stringCnt,
        descriptn,
        bobber,
        location,
        dataStage,
        withdraw,
        Username,
        UserId,
        MatchId,
      },
      {
        where: { id: id },
      }
    );
    res.json({
      success: `Stage ${stageName} / ${stageNumber} successfully updated !`,
    });
  } catch (err) {
    res.json(err);
  }
};

// delete stage
module.exports.deleteStage = async (req, res) => {
  console.log(req.params);
  const StageId = req.params.id;
  try {
    const stageDelete = await Stages.destroy({
      where: {
        id: StageId,
      },
    });
    res.json("stage successfully deleted");
  } catch (err) {
    res.json(err);
  }
};
