const config = require('./index')
const express = require('express')
const bp = require('body-parser')
const formData = require('express-form-data')

const cookieParser = require('cookie-parser')

function setExpress(app) {


    app.use(bp.json())
    app.use(formData.parse())
    app.use(cookieParser)
        //views
    app.set('view engine', 'jsx');
    app.engine('jsx', require('express-react-views').createEngine());
    //images,css,js
    app.use(express.static('public'))



}

module.exports = setExpress