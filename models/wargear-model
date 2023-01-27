const mongoose= require('mongoose')

const Schema = mongoose.Schema

const wargearSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        range: {
            type: String
        },
        type: {
            type: String,
            enum: ['Rapid Fire', 'Assault', 'Heavy', 'Pistol', 'Grenade']
        },
        strength: {
            type: Number
        },
        ap: {
            type: Number
        },
        damage: {
            type: Number
        }
    }
)

const Wargear = mongoose.model('Wargear', wargearSchema)

module.exports = Wargear