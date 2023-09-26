const config = require('./index')
const express = require('express')

function setExpress(app) {




    //views
    app.set('view engine', 'jsx');
    app.engine('jsx', require('express-react-views').createEngine());
    //images,css,js
    app.use(express.static('public'))


}

module.exports = setExpress