const router = require("express").Router();

// home/api/ routes
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api/");

// use the home/api routes
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

//export router
module.exports = router;