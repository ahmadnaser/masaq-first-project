const { Router } = require("express");
const router = Router();
const User = require('../../models/User')
const jwt = require('../../utils/jwt')
const config = require('../../config')

const { check, validationResult } = require("express-validator");

router.post("/api/register", [
    check("name", "Please enter a valid name").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password with 6 or more chars").isLength({ min: 6 })
], (req, res, next) => {
    const errors = validationResult(req)
    console.log(req.body)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

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

            res.status(400).json({ errors: [{ msg: msg }] })
        } else {
            return User.create({ name, email, password })
        }

    }).then((createdUser) => {
        if (createdUser) {
            //jwt token
            const token = jwt.createToken(createdUser._id);
            res.cookie(config.cookie, token)
                //  res.redirect(`/user/login?token=` + token)
            res.status(200).json({ token })
        }

    }).catch((e) => {
        console.log(e)
        res.status(400).json({ errors: [{ msg: "something went wrong!!" }] })
    })

    //hanady@gmail.com
    //12341234

    //get data
    //save into database


})






module.exports = router;