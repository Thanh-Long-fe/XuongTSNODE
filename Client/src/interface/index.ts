interface Product {
    id?: number | string;
    name: string;
    brandId: number;
    price: number;
    description: string;
    category: string;
    stock: number;
    images: string;
    specifications: {
      processor: string;
      ram: string;
      storage: string;
      display: string;
    };
    date: string; // You might want to use Date type instead if you're handling actual date objects
  }

  export interface Brand {
    id: number;
    name: string;
    // thêm các thuộc tính khác của thương hiệu ở đây
  }
export default Product  


