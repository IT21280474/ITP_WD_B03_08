const express = require('express')

// controller functions
const { loginUser, signupUser } = require('../../controllers/Dashboard/userController')

const router = express.Router()

// login route
router.post('/api/login', loginUser)

// signup route
router.post('/api/signup', signupUser)

module.exports = router