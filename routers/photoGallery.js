const express = require("express");
const router = new express.Router();
const photoModel = require("../models/photos");

router.get('/photo-gallery', async (req, res, next) => {
    try {
        const photos = await photoModel.find();
        res.render('/views/photo-gallery.hbs', { works })
    }
    catch (err) {
        console.error(err);
    }
})

module.exports = router;