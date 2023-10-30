const express = require("express");
const router = express.Router();
module.exports = router;

// GET - / - returns homepage
router.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    res.send("You've reached the homepage!");
});

// hello world route
router.get('/api', (req, res) => {
    res.send('Hello World!');
});

//pets router
router.use("/api/pets", require("./pets.js"));