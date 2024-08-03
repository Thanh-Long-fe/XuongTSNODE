var express = require('express');
const Category = require('../controller/category');
const cartegoryRoutes = express.Router();




cartegoryRoutes.get("/", Category.getAllCategory);

cartegoryRoutes.post('/',Category.createCategory );
// cartegoryRoutes.patch('/:id',);
// cartegoryRoutes.delete('/:id');


module.exports = cartegoryRoutes