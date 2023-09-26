const { Router } = require("express");
const router = Router();

const pets = require("../data/pets.json");

//default route ~ default actoin ~ home ~ main landing page
router.get("/", (req, res) => {
    res.status(200);
    // props.data
    console.log(pets);
    res.render("home", { data: pets });
});

router.get("/addpet", (req, res) => {
    res.status(200)
    res.render("addPet")
})

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

router.get("/pets", (req, res) => {
    res.status(200);
    res.json(pets);
});

module.exports = router;