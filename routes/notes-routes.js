const express = require('express')

const Datacard = require('../models/datacard-model')
const { handle404 } = require('../lib/custom-errors')
const { requireToken } = require('../config/auth')

const router = express.Router()

// CREATE
// POST /notes
router.post('/notes', requireToken, (req, res, next) => {
    const datacardId = req.body.note.datacardId
    console.log(req.user)
    const note = req.body.note
    note.owner = req.user._id
    Datacard.findById(datacardId)
        .then(handle404)
        .then(datacard => {
            datacard.notes.push(note)
            return datacard.save()
        })
        .then(datacard => {
            res.status(201).json({ datacard: datacard })
        })
        .catch(next)
})

// UPDATE
// PATCH /notes/:id
router.patch('/notes/:noteId', (req, res, next) => {
    const datacardId = req.body.note.datacardId

    const noteBody = req.body.note

    Datacard.findById(datacardId)
        .then(handle404)
        .then(datacard => {
            const note = datacard.notes.id(req.params.noteId)
            note.set(noteBody)

            return datacard.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// DELETE
// DELETE /notes/:noteId
router.delete('/notes/:noteId', (req, res, next) => {
    const datacardId = req.body.note.datacardId

    Datacard.findById(datacardId)
        .then(handle404)
        .then(datacard => {
            //finding the correct note to remove
            //.remove() we delete it
            datacard.notes.id(req.params.noteId).remove()

            // since I've modified I have to save
            return datacard.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router