const express = require('express');
const mongoose = require('mongoose');
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')

const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});


const cors = require('cors')

dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));



mongoose.connect(process.env.MONGO_CONNECTION_STRING,
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
    )
    .then(() => {
        console.log('[SUCCESS] Mongo Connected')
    })

app.use('/api/pins',pinRoute)
app.use('/api/users',userRoute)
app.use(cors())

app.get("/", (req,res) => {
    res.send("Hello World")
})

app.listen(process.env.PORT || 7800, () => {
    console.log('[SUCCESS] Backend Server Started')
})