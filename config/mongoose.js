const config = require("./index");
const mongoose = require("mongoose");

module.exports = (app) => {
  mongoose
    .connect(config.DB_CONNECTION)
    .then(() => console.log("database connected"));
};

let guitarSchema = mongoose.Schema({
  name: String,
  model: String,
  serialNumber: { type: Number, required: true },
  tuned: Boolean,
});

let GuitarModel = mongoose.model("Guitar", guitarSchema);
let guiter1 = new GuitarModel({
  name: "Black Duity",
  model: "md1-513513",
  serialNumber: 516834168,
  tuned: true,
});
guiter1
  .save()
  .then(() => {
    console.log(guiter1.name + "save");
  })
  .catch((err) => console.log(err));
