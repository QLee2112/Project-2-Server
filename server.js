const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const db = require('./config/db')
const PORT = 3000

mongoose.set('strictQuery', true)

mongoose.connect(db, {
    userNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()

app.use(express.json())

app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT)
})

module.exports = app