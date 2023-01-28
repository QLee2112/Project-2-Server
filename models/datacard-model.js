const mongoose = require('mongoose')

const Schema = mongoose.Schema

const datacardSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        movement: {
            type: Number,
        },
        weapon skill: {
            type: Number
        },
        ballistic skill: {
            type: Number
        },
        strength: {
            type: Number
        },
        toughness: {
            type: Number
        },
        wounds: {
            type: Number
        },
        attacks: {
            type: Number
        },
        leadership: {
            type: Number
        },
        save: {
            type: Number
        },
        id: {
            type: String,
            required: true
        }
    }
)

const Datacard = mongoose.model('Datacard', datacardSchema)

module.exports = Datacard