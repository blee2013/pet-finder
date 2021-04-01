const router = require('express').Router();

const animalRoutes = require('./animal-routes.js');
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const searchRoutes = require('./search-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes')

router.use('/', homeRoutes);
router.use('/comment', commentRoutes);
router.use('/animals', animalRoutes);
router.use('/search', searchRoutes);
router.use('/post', postRoutes);
router.use('/api', apiRoutes);


module.exports = router;








