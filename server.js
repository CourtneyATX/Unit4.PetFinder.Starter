// init express app
const express = require('express');
const app = express();
const morgan = require("morgan");

const PORT = 3030;

// logging morgan before sending it to middleware
app.use(morgan("dev"));

//this is my middleware
app.use("/", require("./api/index.js"));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});