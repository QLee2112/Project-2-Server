const mongoose = require('mongoose')
const noteSchema = require('./note')
const wargearSchema = require('./wargear-model')


const datacardSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        movement: {
            type: Number,
        },
        weaponSkill: {
            type: Number
        },
        ballisticSkill: {
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
        saves: {
            type: Number
        },
        notes:[noteSchema],
        wargear: [wargearSchema],

    }
)

module.exports = mongoose.model('Datacard', datacardSchema)
