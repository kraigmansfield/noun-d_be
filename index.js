const express = require('express');
const mongoose = require('mongoose');
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')
// const uri = process.env.MONGODB_URI;
const dotenv = require('dotenv')
const PORT = process.env.PORT || 7800;



const cors = require('cors')

dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));



mongoose.connect(process.env.MONGODB_URI,
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
    .then(() => {
        // console.log(process.env.MONGO_URI)
        console.log('[SUCCESS] Mongo Connected')
    })

app.use(cors())
app.use('/api/pins',pinRoute)
app.use('/api/users',userRoute)


app.listen(process.env.PORT || 7800, () => {
    console.log(`[SUCCESS] Backend Server Started on ${PORT}`)
})