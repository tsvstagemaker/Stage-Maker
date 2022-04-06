module.exports = (sequelize, DataTypes) => {
  const Matchs = sequelize.define("Matchs", {
    matchname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firearmType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    matchLevel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startAt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endAt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    matchDirector: {
      type: DataTypes.STRING,
    },
    rangeMaster: {
      type: DataTypes.STRING,
    },
    statsDirector: {
      type: DataTypes.STRING,
    },
    clubName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    squadCount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    WinMssMatchId: {
      type: DataTypes.STRING,
      defaultValue: 1,
    },
    nbrStage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    shareMatch: {
      type: DataTypes.STRING,
      defaultValue: 0,
    },
    imageMatch: {
      type: DataTypes.STRING,
      defaultValue: "images/logo.png",
    },
    Username: {
      type: DataTypes.STRING,
    },
    UserId: {
      type: DataTypes.INTEGER,
    },
  });

  Matchs.associate = (models) => {
    Matchs.hasMany(models.Comments, {
      onDelete: "cascade",
    });

    Matchs.hasMany(models.Stages, {
      onDelete: "cascade",
    });

    Matchs.hasMany(models.Likes, {
      onDelete: "cascade",
    });
  };

  return Matchs;
};
