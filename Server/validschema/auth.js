const { z } = require('zod');

const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  address: z.string().optional(), // Không bắt buộc
  phoneNumber: z.string().min(10).max(12).optional(), // Không bắt buộc
  role: z.enum(['user', 'admin']).optional(), // Không bắt buộc
});

module.exports = UserSchema;