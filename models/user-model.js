const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        token: String
    },
    {
        timestamps: true,
        toJSON: {
            transform: (_doc, user) => {
                delete user.password
                return user
            }
        }
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User