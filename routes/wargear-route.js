const express = require('express')
const Wargear = require('../models/wargear-model')
const router = express.Router()
const { handle404 } = require('../lib/custom-errors')

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