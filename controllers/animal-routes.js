const router = require('express').Router();
const { Pet } = require('../models');
const sequelize = require('../config/connection');


router.get('/', (req, res) => {
  // console.log(req.session);

  Pet.findAll({
   
  })
    .then(dbPetData => {
      // console.log(bdPetData);
      console.log('/animals route');
      const pets = dbPetData.map(pet => pet.get({ plain: true }));
      console.log(pets);
      // res.render('animals', {pets: dbPetData, loggedIn: false});
      res.render('animals', {pets, loggedIn: false});
     
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;




