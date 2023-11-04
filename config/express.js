const config = require('./index')
const express = require('express')
const bp = require('body-parser')
const formData = require('express-form-data')
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt')
const session = require('express-session')
const cors = require('cors')

function setExpress(app) {


    app.use(bp.json())
    app.use(formData.parse())
    app.use(cookieParser());
    app.use(cors())

    app.use(session({ secret: 'masaq-secret' }, { httpOnly: true }, { secure: true }))

    //views
    app.set('view engine', 'jsx');
    app.engine('jsx', require('express-react-views').createEngine());
    //images,css,js
    app.use(express.static('public'))


    let password = "masaq123"
    let saltRounds = 11
    let salt = bcrypt.genSaltSync(saltRounds)
    bcrypt.hash(password, salt).then(hashed => {
        console.log(`Password is ${password} - Hashed one is ${hashed}`)
            //Password is masaq123 - Hashed one is $2b$11$FPpm62XEh704kAUIUbWhaeryJrnN8vk1eDsB5lCRLCuMG43Fyn33G
            //Password is masaq123 - Hashed one is $2b$11$D3LXn/I6laJ109v55n8zzuVv3.xIytRp0s6iDSFhRJeqO.Dms756C
            //Password is masaq123 - Hashed one is $2b$11$fp8lE6SZRjixDTil5BQ40uG5DCViPoRp4P2MbHuxwe/mlZp9lOCfG
    })

    bcrypt.compare(password, '$2b$11$D3LXn/I6laJ109v55n8zzuVv3.xIytRp0s6iDSFhRJeqO.Dms756C', (err, res) => {
        if (res) {
            console.log(`Password is Correct`)
        } else {
            console.log(`Password or Username is incorrect`)
        }
    })

}

module.exports = setExpress