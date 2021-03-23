const router = require('express').Router();
const { Post, User } = require('../models');


router.get('/', (req, res) => {
  console.log(req.session);
  res.render('homepage');
  // Post.findAll({
 
  // })
  //   .then(dbPostData => {
   
  //     const posts = dbPostData.map(post => post.get({ plain: true }));
  //     res.render('homepage');
     
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });
});

router.get('/login', (req, res) => {
  // if logged in , redirect to home page
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'article',
      'created_at',
      'username',

    ],
    include: [
      {
        model: Comment,
       
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
      
      }
    ]
  })
    .then(dbPostData => {
      console.log(dbPostData)
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });
console.log(post)
      // pass data to template
      res.render('single-post', { post, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;