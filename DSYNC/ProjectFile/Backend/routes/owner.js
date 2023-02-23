const express = require('express')
const {ownerByHostel, ownerByID} = require('../controllers/owner')

const router =  express.Router()

router.post('/ownerByHostel', ownerByHostel)

router.post('/ownerByID', ownerByID)

module.exports = router