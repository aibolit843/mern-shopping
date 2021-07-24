const express = require('express');
const router = express.Router();

const { getProducts, getProductById} = require('../controller/productController')

//@desc GET  all products from db
//@route GET /api/products
//@acces Public
router.get('/', getProducts)

//@desc GET  a product by id from db
//@route GET /api/products/:id
//@acces Public
router.get('/:id', getProductById)

module.exports = router;