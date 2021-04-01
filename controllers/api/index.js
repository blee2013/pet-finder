const router = require('express').Router();


const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes.js')
const animalRoutes = require('./animal-routes.js')

// const homeRoutes = require('./home-routes.js');
// const searchRoutes = require('./search-routes.js');
// const postRoutes = require('./post-routes.js');
// const signupRoutes = require('/signup-routes.js');



router.use('/comments', commentRoutes);
router.use('/user', userRoutes);

// router.use('/', homeRoutes);

// router.use('/search', searchRoutes);
// router.use('/post', postRoutes);
// router.use('/signup', signupRoutes);
//router.use('/animals', animalRoutes);
// prepended /api/

module.exports = router;
