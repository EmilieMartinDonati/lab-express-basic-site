const {model, Schema} = require("mongoose");

const othersSchema = new Schema({
    name: String,
    img: String,
})

const othersModel = model ("others", othersSchema);