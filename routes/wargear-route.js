const express = require('express')
const Wargear = require('../models/wargear-route')
const router = express.Router()

//READ
router.get('/wargear', (req, res, next) => {
    Wargear.find()
    .then(wargear => {
        return wargear.map(wargear => wargear)
    })
    .then(wargear => {
        res.status(200).json({ wargear: wargear })
    })
    .catch(next)
})

//Delete
router.delete('/wargear/:id', (req, res, next) => {
    
})