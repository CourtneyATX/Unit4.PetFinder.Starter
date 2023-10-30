const express = require("express");
const router = express.Router();
module.exports = router;

// import the pets array from data.js
const pets = require('./data.js');

// get all pets from the database
router.get('/api/pets', (req, res) => {
    // send the pets array as a response
    res.json(pets);
});

// get pet by owner with query string
router.get("/api/pets/:owner", (req, res) => {
    // get the owner from the request
    const owner = req.params.name;

    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response
    res.send(pet);
});

// get pet by name
router.get("/api/pets/:name", (req, res) => {
    // get the name from the request
    const name = req.params.name;

    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response
    res.send(pet);
});
