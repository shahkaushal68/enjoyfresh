const express = require('express');
const router = express.Router();

const { loginWithOtp, verifyOtp } = require('../controllers/authController')


router.post('/login', loginWithOtp);
router.post('/otp', verifyOtp);

module.exports = router