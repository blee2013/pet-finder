const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.post('/', withAuth, (req, res) => {
    console.log(req.body);
    
    Post.create(
      {
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        breed: req.body.breed,
        age: req.body.age,
        gender: req.body.gender,
        type: req.body.type
      },
      {
        where: {
          id: req.body.id
        }
      },
    
    )
      .then(dbPetData => {
        if (!dbPetData) {
          res.status(404).json({ message: 'No Post found with this id' });
          return;
        }
        res.json(dbPetData);
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
      id: req.body.id,
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      breed: req.body.breed,
      age: req.body.age,
      gender: req.body.gender,
      type: req.body.type
    },
    {
      where: {
        id: req.body.id
      }
    },
  
  )
    .then(dbPetData => {
      if (!dbPetData) {
        res.status(404).json({ message: 'No Post found with this id' });
        return;
      }
      res.json(dbPetData);
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
    .then(dbPetData => {
      if (!dbPetData) {
        res.status(404).json({ message: 'No Post found with this id' });
        return;
      }
      res.json(dbPetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/',  (req, res) => {
  // console.log(req.session);
  Post.findAll({
    attributes : [
      "id",
      "name",
      "image",
      "description",
      "breed",
      "age",
      "gender",
      "type"
    ]
})
.then(dbPetData => res.json(dbPetData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;
