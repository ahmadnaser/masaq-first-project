const jwt = require('jsonwebtoken');
const config = require('../config/index')

const requireAuth = (req, res, next) => {

    let token = req.cookies.x_auth_token;
    if (token) {
        //verify
        console.log(token)
        jwt.verify(token, config.secret, async(err, payload) => {

            if (err) {
                console.log('no token saved 1')
                console.log(err.message)
                res.redirect('/user/login')
            } else {
                console.log('token loaded')
                console.log(payload)
                next();
            }


        })

    } else {
        console.log('no token saved')
        res.redirect('/user/login')
    }

}

module.exports = { requireAuth }