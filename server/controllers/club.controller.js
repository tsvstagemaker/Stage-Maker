const { Clubs } = require("../models");

module.exports.readClub = async (req, res) => {
  try {
    const listClubs = await Clubs.findAll();
    res.json(listClubs);
  } catch (err) {
    res.json(err);
  }
};
