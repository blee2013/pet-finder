const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pet } = require('../models');
const withAuth = require('../utils/auth');

router.post('/create', withAuth, (req, res) => {
    console.log(req.body);
    
    Pet.create(
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
          res.status(404).json({ message: 'No Pet found with this id' });
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
  
  Pet.update(
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
        res.status(404).json({ message: 'No Pet found with this id' });
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

 
   
  Pet.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPetData => {
      if (!dbPetData) {
        res.status(404).json({ message: 'No Pet found with this id' });
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
  Pet.findAll({
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
        res.status(404).json({ message: 'No Pet found with this id' });
        return;
      }
      res.json(dbPetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:breed', (req, res) => {
  Pet.findOne({
    where: {
      id: req.params.breed
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
        res.status(404).json({ message: 'No Pet found with this breed' });
        return;
      }
      res.json(dbPetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:age', (req, res) => {
  Pet.findOne({
    where: {
      id: req.params.age
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
        res.status(404).json({ message: 'No Pet found with this age' });
        return;
      }
      res.json(dbPetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:gender', (req, res) => {
  Pet.findOne({
    where: {
      id: req.params.gender
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
        res.status(404).json({ message: 'No Pet found with this gender' });
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
router.get('/:type', (req, res) => {
    Pet.findOne({
      where: {
        id: req.params.type
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
          res.status(404).json({ message: 'No Pet found with this type' });
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
