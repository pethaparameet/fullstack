const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartcontroller');

// Get a user's cart
router.get('/:userId', cartController.getCartByUser);
// Add item to cart
router.post('/:userId', cartController.addToCart);

module.exports = router;