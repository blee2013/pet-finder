const router = require('express').Router();
const { Comment } = require('../../models');
// const Comment = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

  if (req.session) {
    console.log(req.body);

      Comment.create({

      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      // pet_id: req.body.comment_text,
  
      // username: req.body.username
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// router.post('/', (req, res) => {

//   if (req.session) {
  
//       Comment.create({
//       comment_text: req.body.comment_text,
//       // user_id: req.session.user_id,
//       // post_id: req.body.post_id,
//       // username: req.body.username
//     })
//       .then(dbCommentData => res.json(dbCommentData))
//       console.log(dbCommentData)
//       .catch(err => {
//         console.log(err);
//         res.status(400).json(err);
//       });
//   }
// });

router.post('/', (req, res) => {
  Comment.create({
    comment_text: req.body.comment_text,
    pet_id: req.body.pet_id,
    // comment_text: req.body.comment_text,
    // user_id: req.session.user_id,
    id: req.body.id,
    // username: req.body.username
}).then(dbCommentData => {
    console.log(dbCommentData);
    res.json(dbCommentData);
}).catch(err => {
    console.log(err);
    res.status(400).json(err);
});

  
   
});


module.exports = router;

