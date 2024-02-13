const express = require('express');
const router = express.Router();

const { getAllRoles } = require('../controllers/roleController');


router.get('/all', getAllRoles);


module.exports = router