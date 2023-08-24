const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.log(err)
    res.status(400).json(err) 
  };
});

module.exports = router;