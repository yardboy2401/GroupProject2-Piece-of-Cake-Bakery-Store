const router = require("express").Router();
const { User, Store } = require("../models");
const sequelize = require("../config/connection");
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

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
        if (req.session.user_id) {
            res.render("store", { stores, stripePublicKey: stripePublicKey.trim(), loggedIn: req.session.loggedIn });
        } else {
            res.redirect('/login')
        }
        
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//get route for homepage all posts
router.get("/about", (req, res) => {
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
        res.render("about", { stores, loggedIn: req.session.loggedIn });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
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