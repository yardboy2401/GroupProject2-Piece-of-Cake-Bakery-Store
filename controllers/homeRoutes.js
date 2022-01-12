//requires for express Router/dotenv/Store/sequelize/stripe/stripe keys
const router = require("express").Router();
require('dotenv').config()
const { Store } = require("../models");
const sequelize = require("../config/connection");
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripe = require('stripe')(stripeSecretKey)

//get route for homepage all store items
router.get("/", (req, res) => {
  Store.findAll({
    attributes: ["id", "title", "description", "price", "imgName"],
  })
    .then((dbStoreData) => {
      if (!dbStoreData) {
        res.status(404).json({ message: "No Store Items Available" });
        return;
      }
      const stores = dbStoreData.map((store) => store.get({ plain: true })); // .map method on all the posts
      res.render("index", { stores, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get route for store page all store items
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
        res.render("store", {
          stores,
          stripePublicKey: stripePublicKey,
          loggedIn: req.session.loggedIn,
        });
      } else {
        res.redirect("/login");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get route for about all store items
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
      res.render("about", { stores, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/success", (req, res) => {
  // If the user is already logged in, redirect the request to a successful transaction page
  if (req.session.loggedIn) {
    res.render("success");
    return;
  }
  res.redirect("login");
});

router.get("/cancel", (req, res) => {
  // If the user is already logged in, redirect the request to a cancelled transaction page
  if (req.session.loggedIn) {
    res.render("cancel");
    return;
  }
  res.redirect("login");
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//post route for stripe to create checkout session and sending data for stripe payment invoice
router.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.map(item => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.item,
            },
            unit_amount: item.price,
          },
          quantity: item.quantity,
        }
      }),
      //success/cancel URL's for stripe transaction
      success_url: `https://project2-pieceofcake.herokuapp.com/success`,
      cancel_url: `https://project2-pieceofcake.herokuapp.com/cancel`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

//export router module
module.exports = router;
