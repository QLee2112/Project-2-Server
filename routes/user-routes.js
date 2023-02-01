const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user-model')
const { create } = require('../models/datacard-model')
const { createUserToken } = require('../config/auth')

const router = express.Router()

//POST/SIGN-UP
router.post('/sign-up', (req, res, next) => {
    bcrypt
        .hash(req.body.credentials.password, 10)
        .then(hashedPassword => {
            return {
                email: req.body.credentials.email,
                password: hashedPassword
            }
        })
        .then(user => User.create(user))
        .then(user => {
            res.status(201).json({ user: user })
        })
        .catch(next)
})

//POST/SIGN-IN
router.post('/sign-in', (req, res, next) => {
    User.findOne({ email: req.body.credentials.email })
        .then(user => createUserToken(req, user))
        .then(token => res.json({ token: token }))
        .catch(next)
})

module.exports = router