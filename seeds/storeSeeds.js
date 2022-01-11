//require Store Model
const { Store } = require('../models');

//store seed data
const storeData = [
    {
      "title": "Chocolate Almond Croissant",
      "description": "A wonderful pastry to go with your morning coffee or anytime really!",
      "price": "3.49",
      "imgName": "chocolatealmondcroissant.JPG"
    },
    {
        "title": "Maple Bar",
        "description": "A classic morning treat!",
        "price": "1.49",
        "imgName": "maplebar.JPG"
    },
    {
        "title": "Baguette",
        "description": "A delicious small crusty loaf of heaven!",
        "price": "2.39",
        "imgName": "baguette.JPG"
    },
    {
        "title": "Chocolate Brownie",
        "description": "An amazing little square of the best chocolate brownie!",
        "price": "1.99",
        "imgName": "brownies.JPG"
    },
    {
        "title": "Cake Donut",
        "description": "A wonderful little creation to go with your morning coffee or anytime really!",
        "price": "1.29",
        "imgName": "cakedonuts.JPG"
    },
    {
        "title": "Croissant",
        "description": "A wonderful pastry to go with your morning coffee or anytime really!",
        "price": "2.99",
        "imgName": "croissant.JPG"
    },
    {
        "title": "Lemon Blueberry Scone",
        "description": "A delightful bite of Lemon Blueberry Bliss!",
        "price": "2.99",
        "imgName": "scones.JPG"
    },
    {
        "title": "Sourdough Bread Loaf",
        "description": "A an amazing loaf of Sourdough Bread!",
        "price": "3.99",
        "imgName": "sourdoughloaf.JPG"
    },
    {
        "title": "Chocolate Cupcake",
        "description": "A delicious treat anytime!",
        "price": "1.49",
        "imgName": "cupcake.JPG"
    },
  ]

//seedStore data function
const seedStore = () => Store.bulkCreate(storeData);

//export seedStore method
module.exports = seedStore;