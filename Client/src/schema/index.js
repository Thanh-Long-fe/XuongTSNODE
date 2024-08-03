import * as z from 'zod';

const schemaProduct = z.object({
    name: z.string().min(1,{message: 'Không được để trống'}),
    price: z.number({message: 'Giá trị là số'}).min(0,{message: 'Giá trị tối thiểu lớn hơn 0'}),
   
    brand: z.number().min(1,{message: 'Không được để trống'}),
    processor: z.string().min(1,{message: 'Không được để trống'}),
    ram: z.string().min(1,{message: 'Không được để trống'}),
    storage: z.string().min(1,{message: 'Không được để trống'}),
    display: z.string().min(1,{message: 'Không được để trống'}),
    stock: z.number().min(0,{message: 'Giá trị tối thiểu lớn hơn 0'}),
    description: z.string()
   

    
})
export const schemaLog = z.object({
    email: z.string().email({message: 'Phải là email'}).min(1,{message: 'Không được để trống'}),
    password:z.string().min(6,{message: 'Giá trị tối thiểu độ dài là 6'})
})

export const confirmPasswordSchema = z.object({
    email: z.string().email({message: 'Phải là email'}).min(1,{message: 'Không được để trống'}),
    password:z.string().min(6,{message: 'Giá trị tối thiểu độ dài là 6'}),
    confirm: z.string()
  }).refine(data => data.password === data.confirm, {
    message: "Password không trùng khớp",
    path: ['confirm'], // This specifies where the error message will appear
  });
export default schemaProduct;