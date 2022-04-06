module.exports = (sequelize, DataTypes) => {
    const Clubs = sequelize.define("Clubs", {
      longClubs: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shortClubs: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Clubs;
  };
  