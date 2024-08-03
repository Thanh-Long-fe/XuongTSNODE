var express = require('express');
const validBodyRequest = require('../middleware/validateBodyReq')
const productRouter = express.Router();
const schemaProduct = require('../validschema/products')
const methodsProduct = require('../controller/product')


productRouter.get("/:id", methodsProduct.getProductById);
productRouter.get("/", methodsProduct.getAllProducts);

productRouter.post('/', validBodyRequest(schemaProduct), methodsProduct.createProducts);
productRouter.patch('/:id',validBodyRequest(schemaProduct), methodsProduct.updateProductById);
productRouter.delete('/:id', methodsProduct.removeProductById);


module.exports = productRouter