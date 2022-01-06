const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/books-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((x) => console.log("connected"))
.catch((error) => console.error(error))

//ok!!!!!



