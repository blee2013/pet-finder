const router = require('express').Router();
const { Pet } = require('../../models');
const sequelize = require('../../config/connection');





router.get('/', (req, res) => {
  
  Pet.findAll({
      })
    .then(dbPetData => {
      
      const pets = dbPetData.map(pet => pet.get({ plain: true }));
      // const pets = dbPetData.map(Pet => Pet.get({ plain: true }));
      res.render('comment', {pets, loggedIn: false});
     
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id',  (req, res) => {

  const id = req.params.id;
  Pet.findOne({
    where: {
   
      id: id
    },
  
  })
    .then(dbPostData => {
      const post = dbPostData.get({ plain: true });
      console.log(dbPostData)
      res.render('comment', { post: post, id: id, loggedIn: true });

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;




