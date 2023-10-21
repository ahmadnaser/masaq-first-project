const { Router } = require("express")
const router = Router()
    //router - combine controllers
const homeController = require('./controller/homeController')
router.use('/', homeController)
const petController = require('./controller/petController')
router.use('/', petController)

const userController = require('./controller/userController')
router.use(userController)
    //express to use router

module.exports = router