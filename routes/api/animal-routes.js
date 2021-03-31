const router = require('express').Router();
const { Pet } = require('../../models');
const sequelize = require('../../config/connection');





router.get('/', (req, res) => {
  
  Pet.findAll({
    // attributes: [
    //   'id',
    //   'name',
    //   'description',
    //   'breed',
    //   'age',
    //   'gender',
    //   'picture',

    // ],
  
  })
    .then(dbPetData => {
      
      const pets = dbPetData.map(pet => pet.get({ plain: true }));
      // const pets = dbPetData.map(Pet => Pet.get({ plain: true }));
      res.render('animals', {pets, loggedIn: false});
     
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;




