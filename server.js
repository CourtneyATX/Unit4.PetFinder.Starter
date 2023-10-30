// init express app
const express = require('express');
const app = express();

const PORT = 8080;

//this is my middleware
app.use("/api", require("./api/index.js"));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});