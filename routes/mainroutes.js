const express = require('express');
const router = express.Router();
let ejs = require('ejs');

router.get("/register", async (req, res, next) => {
    res.render("register");
})

module.exports = router;