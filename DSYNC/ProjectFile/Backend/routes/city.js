const express = require('express')
const {allCities} = require('../controllers/cities')

const router =  express.Router()

router.post('/allCities', allCities)

module.exports = router