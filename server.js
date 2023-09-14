const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.json({"message": "welcome to my server"});
});

mongoose.connect(process.env.DB_URL).then((value) => {
    console.log("database connected");
    app.listen(port, () => {
        console.log("server started");
    });
}).catch((e) => {
console.log("database failed to connect");
});