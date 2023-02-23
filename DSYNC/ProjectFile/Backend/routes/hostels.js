const express = require('express')
const {addHostel, hostelByID, hostelByOrganisation} = require('../controllers/hostels')
const router =  express.Router()

router.post('/addHostel', addHostel)

router.post('/hostelByID', hostelByID)

router.post('/hostelByOrganisation', hostelByOrganisation)


module.exports = router