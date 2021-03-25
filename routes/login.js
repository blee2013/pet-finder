const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/',  (req, res) => {
  res.render('login');

  // Post.findAll({
 
  
  // })
  //   .then(dbPostData => {
  //     const posts = dbPostData.map(post => post.get({ plain: true }));
  //     res.render('signup');
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });
});

module.exports = router;