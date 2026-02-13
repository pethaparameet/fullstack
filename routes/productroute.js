const express = require('express');
const router = express.Router();
const productController = require('../controllers/productcontroller');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);

module.exports = router;