const express = require('express');
const router = express.Router();
const orderController = require('../controllers/ordercontroller');

router.get('/', orderController.getAllOrders);
router.post('/', orderController.createOrder);

module.exports = router;