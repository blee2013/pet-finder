const router = require('express').Router();
const { Post, User } = require('../models');
const sequelize = require('../config/connection');


router.get('/', (req, res) => {
  // console.log(req.session);
  res.render('animals');
  // Post.findAll({
  
  // })
  //   .then(dbPostData => {
      
  //     const posts = dbPostData.map(post => post.get({ plain: true }));
  //     res.render('animals');
     
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });
});

module.exports = router;