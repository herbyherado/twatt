const express = require('express')
const index = express.Router()

const twatt = require('./twatt')

index.get('/', (req, res) => {
    res.send('hello')
})

index.use('/twatt', twatt)

module.exports = index