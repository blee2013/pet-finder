const router = require('express').Router();


// const homeRoutes = require('./home-routes.js');
// const searchRoutes = require('./search-routes.js');
// const postRoutes = require('./post-routes.js');
// const signupRoutes = require('/signup-routes.js');
const userRoutes = require('./user-routes.js')
const animalRoutes = require('./animal-routes.js')




// router.use('/', homeRoutes);

// router.use('/search', searchRoutes);
// router.use('/post', postRoutes);
// router.use('/signup', signupRoutes);
router.use('/user', userRoutes);
//router.use('/animals', animalRoutes);
// prepended /api/

module.exports = router;
