const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const db = require('./config/db')
const PORT = 3000
const datacardRoutes = require('./routes/datacard-route')
const wargearRoutes = require('./routes/wargear-route')
const userRoutes = require('./routes/user-routes')
mongoose.set('strictQuery', true)

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()

app.use(cors( { origin: `http://127.0.0.1:3000`}))

app.use(express.json())

app.use(datacardRoutes)
app.use(wargearRoutes)
app.use(userRoutes)

app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT)
})

module.exports = app