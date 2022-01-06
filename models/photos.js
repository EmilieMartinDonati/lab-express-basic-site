const { Schema, model } = require("mongoose");

const photoSchema = new Schema(
    {
        img: String,
        title: String,
        index: Number
    }
)

const photoModel = model("photos", photoSchema);