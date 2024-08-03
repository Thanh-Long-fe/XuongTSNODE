const mongoose = require('mongoose');
const connectDB = require('../Server/config/db');
const Product = require('../Server/model/Products');

const products = [
  {
    id: 1,
    name: "Dell XPS 1111",
    brandId: 1,
    price: 2000,
    description: "The Dell XPS 15 offers a sleek design, powerful performance with Intel i7 processor, 16GB RAM, 512GB SSD, and a stunning 4K display. Perfect for professionals and gamers alike.",
    category: "Laptops",
    stock: 20,
    images: "Dell-XPS-15-9520-04.jpg",
    specifications: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      display: "15.6 inch 4K UHD"
    },
    date: new Date("2024-01-08")
  },
  {
    id: 2,
    name: "HP Spectre x360",
    brandId: 2,
    price: 1500,
    description: "The HP Spectre x360 is designed for ultimate portability and performance, featuring Intel i7, 16GB RAM, 512GB SSD, and a Full HD touch display. Ideal for students and on-the-go professionals.",
    category: "Laptops",
    stock: 25,
    images: "acer.jpg",
    specifications: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      display: "13.3 inch Full HD Touch"
    },
    date: new Date("2024-01-07")
  },
  {
    id: 3,
    name: "Asus ROG Zephyrus G14",
    brandId: 3,
    price: 1800,
    description: "The Asus ROG Zephyrus G14 is built for serious gaming with AMD Ryzen 9 processor, 32GB RAM, 1TB SSD, and an RTX 3060 GPU. Experience top-tier gaming performance and visuals.",
    category: "Laptops",
    stock: 15,
    images: "acer.jpg",
    specifications: {
      processor: "AMD Ryzen 9",
      ram: "32GB",
      storage: "1TB SSD",
      display: "14 inch QHD"
    },
    date: new Date("2024-01-04")
  },
  {
    id: 4,
    name: "Apple MacBook Pro 16",
    brandId: 4,
    price: 2500,
    description: "The Apple MacBook Pro 16 features an M1 Max chip, 32GB RAM, 1TB SSD, and a stunning Retina display. Perfect for creative professionals and power users.",
    category: "Laptops",
    stock: 10,
    images: "Dell-XPS-15-9520-04.jpg",
    specifications: {
      processor: "Apple M1 Max",
      ram: "32GB",
      storage: "1TB SSD",
      display: "16 inch Retina"
    },
    date: new Date("2024-01-02")
  },
  {
    id: 5,
    name: "Lenovo ThinkPad X1 Carbon",
    brandId: 5,
    price: 1200,
    description: "The Lenovo ThinkPad X1 Carbon is a premium business laptop featuring Intel i7, 16GB RAM, 512GB SSD, and a 14 inch Full HD display. Built for business professionals.",
    category: "Laptops",
    stock: 20,
    images: "Dell-XPS-15-9520-04.jpg",
    specifications: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14 inch Full HD"
    },
    date: new Date("2024-01-02")
  }
];

const addProducts = async () => {
  try {
    await connectDB.connect();
    const result = await Product.insertMany(products);
    console.log('Products added successfully:', result);
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

addProducts();
