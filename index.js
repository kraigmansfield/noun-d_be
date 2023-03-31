const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')


const app = express();
app.use(express.json());

env.config()

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log('[SUCCESS] Mongo DB connected')
    })

app.use('/api/pins',pinRoute)
app.use('/api/users',userRoute)


app.listen(7800, () => {
    console.log('[SUCCESS] Backend Server Started')
})