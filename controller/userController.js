const { Router } = require("express");
const router = Router();
const User = require('../models/User')
const jwt = require('../utils/jwt')
const config = require('../config')
router.get("/user/login", (req, res) => {

    if (req.session.userid) {
        res.redirect(`/?error=youalreadyloggedin`)
    }

    res.status(200)
    res.render("login")
})

router.get("/user/register", (req, res) => {

    if (req.session.userid) {
        res.redirect(`/?error=youalreadyloggedin`)
    }
    res.status(200)
    res.render("register")
})



router.post("/user/register", (req, res, next) => {
    console.log(req.body)
        /*
        {
          name: 'Ahmad',
          email: 'ios@ahmad.com',
          password: 'pass1234',
          confrimpassword: 'pass1234'
        }
        */
    const { name, email, password } = req.body

    //1-make sure there is not user with that email on db
    //2-save user
    //3-tell user the registration is successfull

    User.findOne({ email }).then((user) => {

        if (user) {
            const msg = "the given email is already in use...";
            res.redirect(`/user/register?error=${msg}`)
        } else {
            return User.create({ name, email, password })
        }

    }).then((createdUser) => {
        if (createdUser) {
            //jwt token
            const token = jwt.createToken(createdUser._id);
            res.cookie(config.cookie, token)
            res.redirect(`/user/login?token=` + token)
        }

    }).catch((e) => {
        console.log(e)
        res.redirect(`/user/register?error`)
    })

    //hanady@gmail.com
    //12341234

    //get data
    //save into database


})




router.post("/user/login", (req, res, next) => {
    console.log(req.body)

    const { email, password } = req.body

    //1-make sure the email is on db
    //2-compare the pass
    //3-if pass is correct then take the user to (home or profile)
    //4-if not show error
    User.findOne({ email }).then((user) => {

        return Promise.all([user.comparePass(password), user])

    }).then((returnedPasswordAndUser) => {
        if (!returnedPasswordAndUser[0]) {
            throw new Error("invalid password")
        }
        let usr = returnedPasswordAndUser[1];
        console.log(usr)
        console.log(usr._id)
        req.session.userid = usr._id
            //jwt token
        const token = jwt.createToken(usr._id);
        res.cookie(config.cookie, token, { maxAge: 60 * 60 * 24 * 365 * 1000 })
            //res.cookie(config.cookie, token)

        res.redirect(`/?hello=${usr.name}&token=${token}`)
    }).catch((e) => {
        console.log(e)
        res.redirect(`/user/login?error`)
    })



})




module.exports = router;