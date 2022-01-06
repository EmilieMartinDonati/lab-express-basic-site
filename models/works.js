const {model, Schema} = require("mongoose");

const workSchema = new Schema ({
  name: String,
  year: String,
  img: String
})

const workModel = model("works", workSchema);

