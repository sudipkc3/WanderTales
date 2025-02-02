const bcrypt = require('bcryptjs');
const express = require('express');
const cors = require("cors");

const jwt = require ('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors({origin: "*"}));

//Test api
app.post("/hello", async (req, res) => {
    return res.status(200).json({ message: "Hello"});
});

app._routerlisten(8000);
module.exports = app;
