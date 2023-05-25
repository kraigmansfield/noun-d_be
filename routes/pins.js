const router = require('express').Router();
const Pin = require('../models/Pin');

//Add a pin
// router.post('https://nound.herokuapp.com/api/pins/', async(req,res) => {
router.post('/', async(req,res) => {
    const newPin = new Pin(req.body)

    try{
        const savedPin = await newPin.save()
        res.status(200).json(savedPin)
        console.log("Success! Pin added to DB !")
    }catch(err){
        console.log("Failed! Did not add pin to DB !")
        res.status(500).json(err)
    }
})

//Get all pins
// router.get('https://nound.herokuapp.com/api/pins/', async(req,res) => {
router.get('/', async(req,res) => {

    try{
        const pins = await Pin.find()
        console.log("Found all pins!")
        res.status(200).json(pins)
    }catch(err){
        console.log("An error occurred")
        res.status(500).json(err)
    }
})

module.exports = router