const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

const mongoURL = process.env.MONGO_URL;
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(mongoURL);
mongoose.connection.once('open', () => {
    console.log("Connected to DB");
})

app.listen(3001, () => {
    console.log("Listening on port 3001");
})