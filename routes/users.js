const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
require('dotenv').config()

// Register a user
// router.post('https://nound.herokuapp.com/api/users/register', async(req,res) => {
router.post('/register', async (req, res) => {
  try {
    //Make a password
    const salt = await bcrypt.genSalt(4)
    const hashPwd = await bcrypt.hash(req.body.password, salt)

    // Create a new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPwd,
    })

    //Add user to DB
    const userSaved = await newUser.save()
    console.log('Success! Registered user!')
    res.status(200).json(userSaved._id)
  } catch (err) {
    console.log('An error occurred!')
    res.status(500).json(err)
  }
})

// Login as a user
// router.post('https://nound.herokuapp.com/api/users/login', async(req,res) => {
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })

    if (!user) {
      console.log('No user found')
      res.status(400).json('Incorrect Credentials')
    } else {
      //validate password
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password,
      )
      if (!validPassword) {
        res.status(400).json('Incorrect Credentials')
      } else {
        console.log(user)
        res.status(200).json(user)
      }
    }
  } catch (err) {
    console.log('Failed to log in')
    res.status(500).json(err)
  }
})

module.exports = router
