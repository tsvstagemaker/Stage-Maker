const { Likes } = require("../models");

// Post Likes
module.exports.postLike = async (req, res) => {
  const { MatchId } = req.body;
  const UserId = req.user.id;

  const found = await Likes.findOne({
    where: {
      MatchId: MatchId,
      UserId: UserId,
    },
  });
  if (!found) {
    await Likes.create({ MatchId: MatchId, UserId: UserId });
    res.json({ liked: true });
  } else {
    await Likes.destroy({
      where: {
        MatchId: MatchId,
        UserId: UserId,
      },
    });
    res.json({ liked: false });
  }
};

// Get Like
module.exports.getLike = async (req, res) => {
  try {
    const like = await Likes.findAll();
    res.json(like);
  } catch (err) {
    res.json(err);
  }
};
