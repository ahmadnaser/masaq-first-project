const jwt = require('jsonwebtoken');
const config = require('../config/index')

module.exports = {

    createToken(_id) {
        const payloads = { _id };
        const options = { expiresIn: '30d' };
        const secret = config.secret;
        const token = jwt.sign(payloads, secret, options);
        return token;
    }

}