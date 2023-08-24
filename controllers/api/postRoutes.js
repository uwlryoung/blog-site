const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      userId: req.session.userId,
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// router.post('/:id', async (req, res) => {
//   try {
//     const postData = await Post.findOne({
//       include: [
//         {
//           model: 'comment',
//           foreignKey: commentId
//         }
//       ],
//     });

//     const newComment = await Comment.create({
//       ...req.body,
//       postId: req.session.postId,
//     });

//     res.status(200).json(newComment);

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
