module.exports = (sequelize, DataTypes) => {
  const Stages = sequelize.define("Stages", {
    stageName: {
      type: DataTypes.STRING,
    },
    stageNumber: {
      type: DataTypes.INTEGER,
    },
    firearmId: {
      type: DataTypes.INTEGER,
    },
    courseId: {
      type: DataTypes.INTEGER,
    },
    scoringId: {
      type: DataTypes.INTEGER,
    },
    trgtTypeId: {
      type: DataTypes.INTEGER,
    },
    icsStageId: {
      type: DataTypes.INTEGER,
    },
    trgtPaper: {
      type: DataTypes.INTEGER,
    },
    trgtPopper: {
      type: DataTypes.INTEGER,
    },
    trgtPlates: {
      type: DataTypes.INTEGER,
    },
    trgtVanish: {
      type: DataTypes.INTEGER,
    },
    trgtPenlty: {
      type: DataTypes.INTEGER,
    },
    minRounds: {
      type: DataTypes.INTEGER,
    },
    reportOn: {
      type: DataTypes.STRING,
    },
    maxPoints: {
      type: DataTypes.INTEGER,
    },
    startPos: {
      type: DataTypes.TEXT,
    },
    StartOn: {
      type: DataTypes.STRING,
    },
    stringCnt: {
      type: DataTypes.INTEGER,
    },
    descriptn: {
      type: DataTypes.TEXT,
    },
    bobber: {
      type: DataTypes.INTEGER,
    },
    location: {
      type: DataTypes.INTEGER,
    },
    fileName: {
      type: DataTypes.STRING,
    },
    fileUrl: {
      type: DataTypes.STRING,
    },
    fileNameImg: {
      type: DataTypes.STRING,
    },
    fileUrlImg: {
      type: DataTypes.STRING,
    },
    dataStage: {
      type: DataTypes.TEXT,
    },
    withdraw: {
      type: DataTypes.STRING,
    },
    Username: {
      type: DataTypes.STRING,
    },
    UserId: {
      type: DataTypes.INTEGER,
    },
  });

  return Stages;
};
