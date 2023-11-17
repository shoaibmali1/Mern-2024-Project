const express = require("express");
const router = express.Router();

router.route("/").get( (req, res) =>{
    res.status(200).send('Welcome to 1st Best Mern Project')
});

router.route("/register").get( (req, res) =>{
    res.status(200).send('Welcome Registration Page')
});


module.exports = router;