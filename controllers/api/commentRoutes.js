const router = require('express').Router();
const { Comment, } = require('../../models');

router.post('/:id', async (req, res) => {
  try {
    // const postData = Post.findOne({
    //   include: [
    //     {
    //       model: 'comment',
    //       foreignKey: 'id'
    //     }
    //   ]
    // })
    const newComment = await Comment.create({
      ...req.body,
      postId: req.session.postId,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err) 
  };
});

module.exports = router;