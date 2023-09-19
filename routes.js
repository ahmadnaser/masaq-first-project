const { Router } = require("express")
const router = Router()
    //router - combine controllers
const homeController = require('./controller/homeController')
router.use('/', homeController)
    //express to use router

module.exports = router