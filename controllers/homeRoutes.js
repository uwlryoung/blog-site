const router = require('express').Router()
const { Post } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      title: req.session.name,
    });
  } catch (err) {
    res.status(500).json(err);
  };
});