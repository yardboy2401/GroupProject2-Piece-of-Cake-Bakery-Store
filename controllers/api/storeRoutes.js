const router = require('express').Router();
const { User, Store, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// // route to get all the posts
// router.get('/', withAuth, (req, res) => {
//   Store.findAll({
//     attributes: ["id", "title", "description", "price", "imgName"],
//   })
//   .then(dbStoreData => {
//     //.map the posts before passing to the dashboard template
//     const stores = dbStoreData.map(store => store.get({ plain: true }));
//     res.render('store', { stores, loggedIn: true });
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });

module.exports = router;