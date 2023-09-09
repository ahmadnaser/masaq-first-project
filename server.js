const express = require('express')
const app = express();
const port = 8080;

const pets = require("./data/pets.json")

//views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//images,css,js
app.use(express.static('public'))


app.get("/", (req, res) => {
    res.status(200)
    res.render("home")
})

app.get("/about", (req, res) => {
    res.status(200)
    res.render("about")
})

app.get("/home", (req, res) => {
    res.status(302)
    res.redirect("/")
})

app.get("/welcome", (req, res) => {
    res.status(200)
    res.send("Welcome Masaq")
})
app.get("/hello", (req, res) => {
    res.status(200)
    res.send("Hello in Masaq")
})

app.get("/hello/:firstname/:lastname", (req, res) => {
    res.status(200)
    res.send(`Welcome ${req.params.firstname} ${req.params.lastname}`)
})


app.get("/welcome", (req, res) => {
    res.status(200)
    res.send("Welcome to www.Masaq.it")
})


app.get("/pets", (req, res) => {
    res.status(200)
    res.json(pets)
})


app.listen(port, (() => console.log(`Express is running ${port}`)));