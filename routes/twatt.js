const express = require('express')
const twatt = express.Router()
const twattController = require('../controllers/twatt.controller')

twatt.get('/', twattController.home_timeline)
twatt.post('/', twattController.tweet)
twatt.get('/:search', twattController.search)

module.exports = twatt