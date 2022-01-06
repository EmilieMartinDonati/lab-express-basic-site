const express = require("express");
const router = new express.Router();
const workModel = require("../models/works");

router.get('/works', async(req, res) => {
   try {
   const works = await workModel.find();
   res.render("/views/works.hbs", {works})
   }
   catch (error) {
   console.error(error);
   }
})

module.exports = router;