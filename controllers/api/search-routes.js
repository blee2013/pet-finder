const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pet } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', (req, res) => {
    Pet.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
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
  
  router.get('/breed/:breed', (req, res) => {
    Pet.findAll({
      where: {
        breed: req.params.breed
      },
      attributes: [
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
      .then(dbPetData => {
        if (!dbPetData) {
          res.status(404).json({ message: 'No Post found with this breed' });
          return;
        }
        res.json(dbPetData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.get('/age/:age', (req, res) => {
    Pet.findAll({
      where: {
        age: req.params.age
      },
      attributes: [
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
      .then(dbPetData => {
        if (!dbPetData) {
          res.status(404).json({ message: 'No Post found with this age' });
          return;
        }
        res.json(dbPetData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.get('/gender/:gender', (req, res) => {
    Pet.findAll({
      where: {
        gender: req.params.gender
      },
      attributes: [
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
      .then(dbPetData => {
        if (!dbPetData) {
          res.status(404).json({ message: 'No Post found with this gender' });
          return;
        }
        res.json(dbPetData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  // find one by type
  router.get('/type/:type', (req, res) => {
      Pet.findAll ({
        where: {
          type: req.params.type
        },
        attributes: [
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
        .then(dbPetData => {
          if (!dbPetData) {
            res.status(404).json({ message: 'No Post found with this type' });
            return;
          }
          res.json(dbPetData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });
  
  module.exports = router;
  