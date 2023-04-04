const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')


const app = express();
app.use(express.json());

env.config()

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cluster0',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
    )

app.use('/api/pins',pinRoute)
app.use('/api/users',userRoute)

app.get("/", (req,res) => {
    res.send("Hello World")
})

app.listen(process.env.PORT || 7800, () => {
    console.log('[SUCCESS] Backend Server Started')
})