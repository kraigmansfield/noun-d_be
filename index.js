const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');



const app = express();
app.use(express.json());

env.config()

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log('[SUCCESS] Mongo DB connected')
    })

app.listen(7800, () => {
    console.log('[SUCCESS] Backend Server Started')
})