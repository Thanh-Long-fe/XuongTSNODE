const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, // Bắt buộc
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true, // Bắt buộc
  },
  address: {
    type: String,
    required: false, // Không bắt buộc
  },
  phoneNumber: {
    type: String,
    required: false, // Không bắt buộc
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // Các vai trò hợp lệ
    default: 'user', // Mặc định là 'user'
    
  },
});

module.exports = mongoose.model('auth', userSchema);
