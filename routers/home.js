const express = require("express");
const router = new express.Router();

router.get('/', (req, res, next) => {
   res.render('home.hbs', {css: ["home.css"]});
})


module.exports = router;