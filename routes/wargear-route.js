const express = require('express')
const Wargear = require('../models/wargear-model')
const router = express.Router()

//READ
router.get('/wargears', (req, res, next) => {
    Wargear.find()
    .then(wargear => {
        return wargear.map(wargear => wargear)
    })
    .then(wargear => {
        res.status(200).json({ wargear: wargear })
    })
    .catch(next)
})

module.exports = router