const mongoose= require('mongoose')

const wargearSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        range: {
            type: Number
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



module.exports = wargearSchema