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
       
        // console.log(dbPetData)
        // console.log(dbPetData.name)
        // console.log(dbPetData.picture)
        // console.log(dbPetData.data.picture ? dbPetData.data.picture : "not data.picture")

        res.render('comment', { 
            pet: {
                picture: ("/" + dbPetData.picture) || "http://placehold.it/200/200",
                // picture: dbPetData.picture || "http://placehold.it/200/200",
                name: dbPetData.name,

            },
            post: {
                Comments: [
                    {
                        comment_text: "This is dummy data",
                        User: {
                            username: "Bobblobblob",
                            createdAt: "2021-03-25T14:45:07.000Z"
                        }

                    }
                ]
            },
            loggedIn: true
        });
//   res.send(JSON.stringify(dbPetData, null, 2))
// res.json(dbPetData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  


  module.exports = router;