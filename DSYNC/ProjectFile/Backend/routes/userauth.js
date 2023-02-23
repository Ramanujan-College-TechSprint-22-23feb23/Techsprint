const express = require('express')
const {login_p, login_g} = require('../controllers/login_1')
const {logout} = require('../controllers/logout')
const {register_g, register_p} = require('../controllers/register.js')

const router =  express.Router()

router.get('/login/', login_g);

router.post('/login/', login_p);

router.post('/logout/', logout);

router.get('/register/', register_g);

router.post('/register/', register_p);

module.exports = router