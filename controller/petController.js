const { Router } = require("express");
const router = Router();
const petService = require('../services/petService')

const { requireAuth } = require('../utils/auth')

//router.get("*",requireAuth)
router.get("/addpet", requireAuth, (req, res) => {
    res.status(200)
    res.render("addPet")
})

router.post("/AddPet", requireAuth, (req, res) => {
    console.log(req.body)
    res.status(200)

    if (req.body.name) {
        //save in db
        petService.create(req.body).then(() => {
            res.render("addPet", { message: "Successfully posted new pet!" })
                //res.redirect("/")
        }).catch((err) => {
            res.render("addPet", { message: "There is an error! " + err.message })
        })

    } else {
        res.render("addPet")
    }

})

router.get("/pets", (req, res) => {
    res.status(200);
    res.json(pets);
});

module.exports = router;