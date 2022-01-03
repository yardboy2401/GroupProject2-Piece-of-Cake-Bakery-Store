const { Store } = require('../models');

const storeData = [
    {
      "title": "Chocolate Almond Croissant",
      "description": "A wonderful pastry to go with your morning coffee or anytime really!",
      "price": "349",
      "imgName": "chocolatealmondcroissant.JPG"
    },
    {
        "title": "Maple Bar",
        "description": "A classic morning treat!",
        "price": "149",
        "imgName": "maplebar.JPG"
    },
    {
        "title": "Baguette",
        "description": "A delicious small crusty loaf of heaven!",
        "price": "249",
        "imgName": "baguette.JPG"
    },
    {
        "title": "Chocolate Brownie",
        "description": "An amazing little square of the best chocolate brownie!",
        "price": "199",
        "imgName": "brownies.JPG"
    },
    {
        "title": "Cake Donut",
        "description": "A wonderful little creation to go with your morning coffee or anytime really!",
        "price": "129",
        "imgName": "cakedonuts.JPG"
    },
    {
        "title": "Croissant",
        "description": "A wonderful pastry to go with your morning coffee or anytime really!",
        "price": "299",
        "imgName": "croissant.JPG"
    },
    {
        "title": "Lemon Blueberry Scone",
        "description": "A delightful bite of Lemon Blueberry Bliss!",
        "price": "299",
        "imgName": "scones.JPG"
    },
    {
        "title": "Sourdough Bread Loaf",
        "description": "A an amazing loaf of Sourdough Bread!",
        "price": "399",
        "imgName": "sourdoughloaf.JPG"
    },
    {
        "title": "Chocolate Cupcake",
        "description": "A delicious treat anytime!",
        "price": "149",
        "imgName": "cupcake.JPG"
    },
  ]

const seedStore = () => Store.bulkCreate(storeData);

module.exports = seedStore;