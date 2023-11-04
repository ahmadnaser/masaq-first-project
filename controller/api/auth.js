const { Router } = require("express");
const router = Router();
const User = require('../../models/User')
const jwt = require('../../utils/jwt')
const config = require('../../config')


const jwtLibrary = require('jsonwebtoken');


const { check, validationResult } = require("express-validator");

router.post("/api/auth", [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password with 6 or more chars").isLength({ min: 6 })
], (req, res, next) => {
    const errors = validationResult(req)
    console.log(req.body)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }


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
            return res.status(400).json({ errors: [{ msg: 'invalid credentials' }] })
        }
        let usr = returnedPasswordAndUser[1];
        console.log(usr)
        console.log(usr._id)
        req.session.userid = usr._id
            //jwt token
        const token = jwt.createToken(usr._id);
        res.cookie(config.cookie, token, { maxAge: 60 * 60 * 24 * 365 * 1000 })
            //res.cookie(config.cookie, token)

        return res.status(200).json({ token })
    }).catch((err) => {
        console.log(err)
        return res.status(500).json({ errors: [{ msg: 'something went wrong!!' }] })
    })




})


router.post("/api/verifytoken", [
    check("token", "Please enter a valid token").not().isEmpty(),
], (req, res, next) => {
    const errors = validationResult(req)
    console.log(req.body)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }


    console.log(req.body)

    const { token } = req.body

    jwtLibrary.verify(token, config.secret, (err, payload) => {

        if (err) {
            console.log('no token saved 1')
            console.log()
            return res.status(400).json({ status: "not valid" })
        } else {
            console.log('token loaded')
            console.log(payload)
            return res.status(200).json({ status: "ok" })
        }


    })






})











module.exports = router;