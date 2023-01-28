const express = require('express')
const Datacard = require('../models/datacard-model.js')
const router = express.Router()

//CREATE A NEW CARD
router.post('/datacard', (req, res, next) => {
    Datacard.create(req.body.datacard)
        .then(datacard => {
            res.status(201).json({ datacard: datacard })
        })
        .catch(next)
})

//READ
router.get('/datacard', (req, res, next) => {
    Datacard.find()
        .then(datacard => {
            return datacard.map(datacard => datacard)
        })
        .then(datacard => {
            res.status(200).json({ datacard: datacard })
        })
        .catch(next)
})

//UPDATE
router.patch('/datacard/:id', (req, res, next) => {
    Datacard.findById(req.params.id)
    .then(datacard => {
        return datacard.updateOne(req.body.datacard)
    })
    .then(() => res.status(204))
    .catch(next)
})

//DELETE
router.delete('/datacard/:id', (req, res, next) => {
    Datacard.findById(req.params.id)
        .then(datacard => {
            return datacard.deleteOne(req.body.datacard)
        })
        .then(() => res.status(204))
        .catch(next)
})

module.exports = router