//require Store Model
const { Store } = require('../models');

//store seed data
const storeData = [
    {
      "title": "Chocolate Almond Croissant",
      "description": "A wonderful pastry to go with your morning coffee or anytime really!",
      "price": "3.49",
      "imgName": "chocolatealmondcroissant.jpg"
    },
    {
        "title": "Maple Bar",
        "description": "A classic morning treat!",
        "price": "1.49",
        "imgName": "maplebar.jpg"
    },
    {
        "title": "Baguette",
        "description": "A delicious small crusty loaf of heaven!",
        "price": "2.39",
        "imgName": "baguette.jpg"
    },
    {
        "title": "Chocolate Brownie",
        "description": "An amazing little square of the best chocolate brownie!",
        "price": "1.99",
        "imgName": "brownies.jpg"
    },
    {
        "title": "Cake Donut",
        "description": "A wonderful little creation to go with your morning coffee or anytime really!",
        "price": "1.29",
        "imgName": "cakedonuts.jpg"
    },
    {
        "title": "Croissant",
        "description": "A wonderful pastry to go with your morning coffee or anytime really!",
        "price": "2.99",
        "imgName": "croissant.jpg"
    },
    {
        "title": "Lemon Blueberry Scone",
        "description": "A delightful bite of Lemon Blueberry Bliss!",
        "price": "2.99",
        "imgName": "scones.jpg"
    },
    {
        "title": "Sourdough Bread Loaf",
        "description": "A an amazing loaf of Sourdough Bread!",
        "price": "3.99",
        "imgName": "sourdoughloaf.jpg"
    },
    {
        "title": "Chocolate Cupcake",
        "description": "A delicious treat anytime!",
        "price": "1.49",
        "imgName": "cupcake.jpg"
    },
  ]

//seedStore data function
const seedStore = () => Store.bulkCreate(storeData);

//export seedStore method
module.exports = seedStore;