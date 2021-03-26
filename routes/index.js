const router = require('express').Router();

const animalRoutes = require('./animal-routes.js');
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const searchRoutes = require('./search-routes.js');
const postRoutes = require('./post-routes.js');
const signupRoutes = require('./signup-routes.js');




router.use('/', homeRoutes);
router.use('/animals', animalRoutes);
router.use('/search', searchRoutes);
router.use('/post', postRoutes);
router.use('/signup', signupRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;








