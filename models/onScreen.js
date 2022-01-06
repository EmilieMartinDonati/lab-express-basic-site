const {model, Schema} = require("mongoose");

const onScreenSchema = new Schema({
    name: String,
    year: Number,
    img: String,
    synopsis: String,
})

const onScreenModel = model("onScreen", onScreenSchema);