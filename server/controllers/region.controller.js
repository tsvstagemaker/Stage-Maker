const { Regionicon } = require("../models");

module.exports.readRegion = async (req, res) => {
  // console.log(req);
  try {
    const listRegions = await Regionicon.findAll();
    res.json(listRegions);
    // console.log(listRegions);
  } catch (err) {
    res.json(err);
  }
};
