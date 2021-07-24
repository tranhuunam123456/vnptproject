const newsControllers = require("../app/controllers/NewsController")
var express = require('express')

var router = express.Router()

router.use("/:slug", newsControllers.show)
router.use("/", newsControllers.index)

module.exports = router