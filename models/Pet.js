const mongoose = require("mongoose")


//1-Schema
//2-Create Model
//validation, middlaware, virtual, methods

let petSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: { type: String, required: true, maxlength: 50 },
    description: { type: String, required: true },
    image: {
        type: String,
        required: true,
        validate: /^https?/,
        default: "https://source.unsplash.com/random",
        set(value) {
            if (value) {
                value = value
                return value;
            } else {
                return "https://source.unsplash.com/random";
            }
        }
    },
    breed: { type: String, required: true }
});

module.exports = mongoose.model("Pet", petSchema)