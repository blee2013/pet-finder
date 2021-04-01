const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Pet } = require('../models');

router.get('/', (req, res) => {
  
  res.render('comment');
});

router.get('/:id',  (req, res) => {
    const id = req.params.id;
    // console.log(id)
    Pet.findOne({
      where: {
     
        id: id
      },
    
    })
      .then(dbPetData => {
        
        res.render('comment', { 
            pet: {
                
                picture: ("/" + dbPetData.picture) || "http://placehold.it/200/200",
                name: dbPetData.name,

            },
            comment: {
                Comments: [
                    // {
                    //     comment_text: "This is dummy data",
                    //     User: {
                    //         username: "Bob",
                    //         createdAt: "2021-03-25T14:45:07.000Z"
                    //     }

                    // }
                ]
            },
            loggedIn: true
        });

      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  


  module.exports = router;