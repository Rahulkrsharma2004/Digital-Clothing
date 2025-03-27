const express = require('express')
const  { createProduct, updateProduct, deleteProduct, getProducts ,getProductById} = require('../controllers/productController.js');
const  { protect, isAdmin } =  require('../middleware/authMiddleware.js');

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/add', protect, isAdmin, createProduct);
router.put('/update/:id', protect, isAdmin, updateProduct);
router.delete('/delete/:id', protect, isAdmin, deleteProduct);

module.exports = router
