const { Router } = require("express")
const router = Router()
    //router - combine controllers
const homeController = require('./controller/homeController')
router.use('/', homeController)
const petController = require('./controller/petController')
router.use('/', petController)

const userController = require('./controller/userController')
router.use(userController)

const authController = require('./controller/api/auth')
router.use(authController)

const usersController = require('./controller/api/users')
router.use(usersController)


//express to use router

module.exports = router