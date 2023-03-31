const router = require('express').Router();


const Pin = require('../models/Pin');

router.post('/', async(req,res) => {
    const newPin = new Pin(req.body)

    try{
        const savedPin = await newPin.save()
    }catch(err){

    }
})