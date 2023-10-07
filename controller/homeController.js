const { Router } = require("express");
const router = Router();

const pets = require("../data/pets.json");
const petService = require('../services/petService')


//default route ~ default actoin ~ home ~ main landing page
router.get("/", async(req, res) => {
    res.status(200);
    // props.data
    let cookiesTerms = "";
    if (req.cookies.cookiesTerms) {
        cookiesTerms = req.cookies.cookiesTerms;
    }




    petService.getAll().then(allpets => {
        console.log("allpets")
        console.log(allpets)
        res.render("home", { data: allpets, cookiesTerms: cookiesTerms });
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


router.get("/setCookies", (req, res) => {
    res.cookie("cookiesTerms", "ok", { maxAge: 60 * 60 * 24 * 365 * 1000 })
    res.status(200);
    res.redirect("/?cookiesadded=true");
});


router.get("/clearCookies", (req, res) => {
    res.cookie("cookiesTerms", null)
    res.status(200);
    res.redirect("/?cookiesadded=false");
});




module.exports = router;