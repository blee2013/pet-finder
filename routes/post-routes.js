const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User  } = require('../models');
const withAuth = require('../utils/auth');

// for posting new image uploaded
router.post('saveImage', (req, res) => {
  const fileName = req.files.myFile.name
  const path = __dirname + '/images'
 + fileName

 image.mv(path, (error) => {
   if (error) {
     console.log(error) 
     res.writeHead(500, {
       'Content-Type': 'application/json'
     })
     res.end(JSON.stringify({status: 'error', message: error}))
     return
   }
   res.writeHead(200, {
     'Content-Type': 'application/json'
   })
   res.end(JSON.stringify({status: 'success', path: '/img/houses/' + filename}))
 })
})

router.get('/', (req, res) => {
  // console.log(req.session);
  res.render('post');

});

router.get('/:id', withAuth, (req, res) => {

  const id = req.params.id;
  Post.findOne({
    where: {
   
      id: id
    },
  
  })
    .then(dbPostData => {
      const post = dbPostData.get({ plain: true });
      console.log(dbPostData)
      res.render('post', { post: post, id: id, loggedIn: true });

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/update', withAuth, (req, res) => {
  console.log(req.body);
  
  Post.update(
    {
      title: req.body.title,
      article: req.body.article,
    
    },
    {
      where: {
        id: req.body.id
      }
    },
  
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/delete/:id', withAuth, (req, res) => {

 
   
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;