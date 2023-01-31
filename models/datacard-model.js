const mongoose = require('mongoose')

const Schema = mongoose.Schema

const datacardSchema = new Schema(
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
        id: {
            type: String,
        }
    }
)

const Datacard = mongoose.model('Datacard', datacardSchema)

module.exports = Datacard