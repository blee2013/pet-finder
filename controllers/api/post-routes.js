const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post } = require('../../models');
// const withAuth = require('../../utils/auth');



router.post('/', (req, res) => {
  console.log('postroute');
  console.log(req.body);
  return
//   Post.create({
//     name: req.body.name,
//     description: req.body.description,
//     breed: req.body.breed,
//     age: req.body.age,
//     gender: req.body.gender,
//     picture: req.body.picture,

//   })
//     .then(dbPostData => res.json(dbPostData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
});

module.exports = router;
