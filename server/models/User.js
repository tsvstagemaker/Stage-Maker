module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    club: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: "public/uploads/profile/avatar/avatar-default.jpg",
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Comments, {
      onDelete: "cascade",
    });

    Users.hasMany(models.Stages, {
      onDelete: "cascade",
    });

    Users.hasMany(models.Likes, {
      onDelete: "cascade",
    });

    Users.hasMany(models.Matchs, {
      onDelete: "cascade",
    });
  };

  return Users;
};
