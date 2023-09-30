const { Router } = require("express");
const router = Router();

const pets = require("../data/pets.json");
const petService = require('../services/petService')
    //default route ~ default actoin ~ home ~ main landing page
router.get("/", async(req, res) => {
    res.status(200);
    // props.data



    petService.getAll().then(allpets => {
        console.log("allpets")
        console.log(allpets)
        res.render("home", { data: allpets });
    }).catch(err => {
        console.log(err.message)
        res.render("home", { data: pets });
    })


});



router.get("/about", (req, res) => {
    console.log(req.body);
    res.status(200);
    res.render("addPet");
});

router.get("/home", (req, res) => {
    res.status(302);
    res.redirect("/");
});

router.get("/welcome", (req, res) => {
    res.status(200);
    res.send("Welcome Masaq");
});
router.get("/hello", (req, res) => {
    res.status(200);
    res.send("Hello in Masaq");
});

router.get("/hello/:firstname/:lastname", (req, res) => {
    res.status(200);
    res.send(`Welcome ${req.params.firstname} ${req.params.lastname}`);
});

router.get("/welcome", (req, res) => {
    res.status(200);
    res.send("Welcome to www.Masaq.it");
});


module.exports = router;