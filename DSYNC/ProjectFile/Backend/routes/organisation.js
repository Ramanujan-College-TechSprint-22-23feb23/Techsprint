const express = require('express')
const {addOrganisation, organisationByCity, organisationByID} = require('../controllers/organisations')

const router =  express.Router()

router.post('/addOrganisation', addOrganisation)

router.post('/organisationlByID', organisationByID)

router.post('/organisationByCity', organisationByCity)


module.exports = router