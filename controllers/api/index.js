//require express Router
const router = require('express').Router();

//  /api/ routes for users/posts/comments
const userRoutes = require('./userRoutes');

//  use the users/posts/comments routes created above
router.use('/users', userRoutes);

//export router
module.exports = router;