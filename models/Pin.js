const mongoose = require('mongoose')

const Pin = new mongoose.Schema({
    username : {
        type: String,
        required: true
    },

    title : {
        type: String,
        required: true,
        min: 3
    },

    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },

    lat : {
        type: Number,
        required: true
    },

    lon : {
        type: Number,
        required:true
    },

    description : {
        type: String,
        required: true
    }
}, {timestamps : true})

module.exports = mongoose.model("Pin", Pin)