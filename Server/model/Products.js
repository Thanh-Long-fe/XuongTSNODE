const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    brandId: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    specifications: {
        processor: String,
        ram: String,
        storage: String,
        display: String
    },
    date: {
        type: Date,
        required: true
    }
});

// Tạo Model từ Schema
const Product = mongoose.model('Product', productSchema);

// Xuất Model để sử dụng ở nơi khác
module.exports = Product;
