var express = require('express');
var router = express.Router();
productController=require('../controllers/productController');
router.post('/',productController.createProduct);
router.get('/',productController.getProducts);
router.get('/:id',productController.getOne);
router.put('/:id',productController.updateProduct);
router.delete('/:id',productController.deleteProduct);
module.exports=router;