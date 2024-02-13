const express = require('express');
const router = express.Router();
const { validToken } = require('../middlewares/authMiddleware');
const {
    addOrUpdateFoodSellerDetails,
    addOrEditUsingUpsert,
} = require('../controllers/foodSellerController');

router.post('/add', validToken, addOrEditUsingUpsert);
//router.post('/add', validToken, addOrUpdateFoodSellerDetails);


module.exports = router