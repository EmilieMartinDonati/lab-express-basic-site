const express = require("express");
const router = new express.Router();
const othersModel = require("../models/others");
const onScreenModel = require("../models/onScreen");

router.get("/about", async (req, res, next) => {
    try {
    const others = othersModel.find();
    const onScreen = onScreenModel.find();
    res.render('about.hbs', {onScreen, others, css: ["about.css"]})
    }
    catch (err){
    console.error(err);
    }
})

module.exports = router;