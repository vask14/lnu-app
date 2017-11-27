var express = require('express');
var router = express.Router();
router.use('/product',require('./routesProducts.js'));
module.exports=router;