const express = require('express')
const Datacard = require('../models/datacard-model.js')
const router = express.Router()
const { handle404 } = require('../lib/custom-errors')

//CREATE A NEW CARD
router.post('/datacards', (req, res, next) => {
    Datacard.create(req.body.datacard)
        .then(datacard => {
            res.status(201).json({ datacard: datacard })
        })
        .catch(next)
})

//READ ALL CARDS
router.get('/datacards', (req, res, next) => {
    Datacard.find()
        .then(datacard => {
            return datacard.map(datacard => datacard)
        })
        .then(datacard => {
            res.status(200).json({ datacard: datacard })
        })
        .catch(next)
})

//SHOW ONE CARD
router.get('/datacards/:id', (req, res, next) => {
    Datacard.findById(req.params.id)
    .then(handle404)
        .then(datacard => {
            res.status(200).json({ datacard: datacard})
        })
        .catch(next)
})

//UPDATE
router.patch('/datacards/:id', (req, res, next) => {
    Datacard.findById(req.params.id)
    .then(handle404)
    .then(datacard => {
        return datacard.updateOne(req.body.datacard)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

//DELETE
router.delete('/datacards/:id', (req, res, next) => {
    Datacard.findById(req.params.id)
    .then(handle404)
        .then(datacard => {
            datacard.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})


module.exports = router