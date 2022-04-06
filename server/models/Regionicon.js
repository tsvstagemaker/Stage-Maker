module.exports = (sequelize, DataTypes) => {
  const Regionicon = sequelize.define("Regionicon", {
    longRegionicon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortRegionicon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Regionicon;
};
