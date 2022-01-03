const router = require("express").Router();
const { User, Store } = require("../models");
const sequelize = require("../config/connection");

//get route for homepage all store items
router.get("/", (req, res) => {
    Store.findAll({
      attributes: ["id", "title", "description", "price", "imgName"],
    })
      .then((dbStoreData) => {
        //serialize data
        if (!dbStoreData) {
          res.status(404).json({ message: "No Store Items Available" });
          return;
        }
        const stores = dbStoreData.map((store) => store.get({ plain: true })); // .map method on all the posts
        console.log(stores);
        res.render("index", { stores, loggedIn: req.session.loggedIn });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //get route for homepage all store items
router.get("/store", (req, res) => {
    Store.findAll({
      attributes: ["id", "title", "description", "price", "imgName"],
    })
      .then((dbStoreData) => {
        //serialize data
        if (!dbStoreData) {
          res.status(404).json({ message: "No Store Items Available" });
          return;
        }
        const stores = dbStoreData.map((store) => store.get({ plain: true })); // .map method on all the posts
        console.log(stores);
        res.render("store", { stores, loggedIn: req.session.loggedIn });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//get route for homepage all posts
router.get("/about", (req, res) => {
    res.render('about')
        // .then((dbPostData) => {
        //   //serialize data
        //   if (!dbPostData) {
        //     res.status(404).json({ message: "No Posts Available" });
        //     return;
        //   }
        //   const posts = dbPostData.map((post) => post.get({ plain: true })); // .map method on all the posts
        //   console.log(posts);
        //   res.render("home", { posts, loggedIn: req.session.loggedIn });
        // })
        // .catch((err) => {
        //   console.log(err);
        //   res.status(500).json(err);
        // });
    }); 

    router.get('/login', (req, res) => {
        // If the user is already logged in, redirect the request to another route
        if (req.session.logged_in) {
          res.redirect('/');
          return;
        }
      
        res.render('login');
      });

module.exports = router;