const { Comments } = require("../models");

// Create comment
module.exports.postComment = async (req, res) => {
  const createComment = req.body;
  const commentSend = req.body.commentBody;
  const username = req.user.username;
  const id = req.id.id;
  createComment.username = username;
  createComment.UserId = id;
  if (!commentSend)
    return res.json({ error: "Error: Please enter a comment before send !" });
  if (commentSend.length <= 2)
    return res.json({ error: "Comment must be 3 characters length minimum !" });

  try {
    await Comments.create(createComment);
    res.json(createComment);
  } catch (err) {
    res.json(err);
  }
};

// Get comments
module.exports.getComment = async (req, res) => {
  try {
    const MatchId = req.params.MatchId;
    const listComments = await Comments.findAll({
      where: {
        MatchId: MatchId,
      },
    });
    res.json(listComments);
  } catch (err) {
    res.json(err);
  }
};

// delete comment
module.exports.deleteComment = async (req, res) => {
  const MatchId = req.params.MatchId;
  try {
    const commentDelete = await Comments.destroy({
      where: {
        id: MatchId,
      },
    });
    res.json("Match successfully deleted" + commentDelete.matchname);
  } catch (err) {
    res.json(err);
  }
};
