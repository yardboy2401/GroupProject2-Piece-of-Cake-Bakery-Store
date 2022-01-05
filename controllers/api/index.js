const router = require('express').Router();

//  /api/ routes for users/posts/comments
const userRoutes = require('./userRoutes');
const storeRoutes = require('./storeRoutes');

//  use the users/posts/comments routes created above
router.use('/users', userRoutes);
router.use('/store', storeRoutes);

//export router
module.exports = router;