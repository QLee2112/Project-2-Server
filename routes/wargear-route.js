const express = require('express')
const Wargear = require('../models/wargear-model')
const Datacard = require('../models/datacard-model')
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

router.post('/wargears', (req, res, next) => {
    const datacardId = req.body.wargear.datacardId
    const wargear = req.body.wargear

    Datacard.findById(datacardId)
        .then(handle404)
        .then(datacard => {
            datacard.wargear.push(wargear)
            return datacard.save()
        })
        .then(datacard => {
            res.status(201).json({ datacard: datacard })
        })
        .catch(next)
})

module.exports = router