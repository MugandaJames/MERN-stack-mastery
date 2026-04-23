const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', async (req, res) => {
    res.send("Hello James Juma");
});


module.exports = app;



