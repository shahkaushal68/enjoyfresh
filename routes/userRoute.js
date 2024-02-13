const express = require('express');
const router = express.Router();
const { createProfile } = require('../controllers/profileController');
const { validToken } = require('../middlewares/authMiddleware');

router.post('/profile', validToken, createProfile);
//router.get('/profile/:id', validToken, getUserProfileDetails);

module.exports = router