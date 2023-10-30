const express = require("express");
const router = express.Router();
module.exports = router;

// import the pets array from data.js
const pets = require('./data');

// get all pets from the database
router.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.json(pets);
});

// get pet by owner with query string
// app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request


    // find the pet in the pets array
    // const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response

// });

// get pet by name
// app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request


    // find the pet in the pets array
    // const pet = pets.find(pet => pet.name === name);

    // send the pet as a response

// });
