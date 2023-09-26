const config = require("./index")
const mongoose = require("mongoose")

module.exports = (app) => {


    mongoose.connect(config.DB_CONNECTION).then(() => {
        console.log('database connected')
    });

    //schema
    //model

    //guitar
    let guitarSchema = mongoose.Schema({
        name: String,
        model: String,
        serialNumber: { type: Number, required: true },
        tuned: Boolean
    });

    let GuitarModel = mongoose.model("Guitar", guitarSchema)
    let guitar1 = new GuitarModel({
        name: "Black Duity",
        model: "mdl-2134124",
        serialNumber: 4124124124,
        tuned: true
    })

    //old way
    /*guitar1.save(function(err, guitar) {
        if (err) { return console.err(err) }
        console.log(guitar.name + " Saved in db")
    });*/

    //save in db
    /*
    guitar1.save().then(() => {
        console.log(guitar1.name + " Saved in db")
    }).catch((err) => {
        console.log(err);
    });
*/

    //read from db
    GuitarModel.find({ name: "Black Duity" }).then(guitars => {
        console.log(guitars)
    })


    //insert, delete, read...


}