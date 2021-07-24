const siteControllers = require("../app/controllers/SiteControllers")
var express = require('express')

var router = express.Router()

router.use("/search", siteControllers.search)
router.use("/", siteControllers.index)

module.exports = router