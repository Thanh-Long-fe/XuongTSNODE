const { z } = require('zod');
const specificationsSchema = z.object({
    processor: z.string(),
    ram: z.string(),
    storage: z.string(),
    display: z.string(),
  });
  
  const productSchema = z.object({
    id: z.number(),
    name: z.string(),
    brandId: z.number(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    stock: z.number(),
    images: z.string(),
    specifications: specificationsSchema,
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // Kiểm tra định dạng yyyy-mm-dd
  });

  module.exports = productSchema;