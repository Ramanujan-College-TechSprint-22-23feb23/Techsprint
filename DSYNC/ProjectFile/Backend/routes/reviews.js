const express = require('express')
const {addReview, reviewByHostel, reviewByID} = require('../controllers/reviews')

const router =  express.Router()

router.post('/addReview', addReview)

router.post('/reviewByHostel', reviewByHostel)

router.post('/reviewByID', reviewByID)


module.exports = router