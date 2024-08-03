const mongoose = require('mongoose');

const categoryShema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true, // Không bắt buộc
  }
  
});

module.exports = mongoose.model('brands', categoryShema);
