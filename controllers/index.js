const router = require("express").Router();

// home/api/dashboard routes
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api/");

// use the home/api/dashboard routes
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

//export router
module.exports = router;