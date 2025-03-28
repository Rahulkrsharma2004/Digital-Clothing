const express = require('express')
const  { createProduct, updateProduct, deleteProduct, getProducts ,getProductById} = require('../controllers/productController.js');
// const  { protect, isAdmin } =  require('../middleware/authMiddleware.js');

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/add',  createProduct);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router
