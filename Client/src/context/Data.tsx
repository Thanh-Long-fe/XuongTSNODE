import React, { createContext, useEffect, useReducer} from 'react';
import axiosInstance from '../axios/index';
import { useNavigate } from 'react-router';
import reducer, { initState } from '../redux';
import { _add_product, _edit_product, _remove_product, _set_brand, _set_product } from '../redux/method';

type Props = {
children: React.ReactNode
}

const DataConText = createContext(undefined);

function DataProvider({ children } : Props) {
    const [state, dispatch] = useReducer(reducer, initState);
    const {brands,products} = state;
  const nav = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        // Thực hiện hai lần gọi API đồng thời
        const [productsResponse, brandsResponse] = await Promise.all([
          axiosInstance.get('/products'),
          axiosInstance.get('/brands')
        ]);

        // Cập nhật state với dữ liệu trả về từ cả hai API
        dispatch(_set_brand(brandsResponse.data));
        dispatch(_set_product(productsResponse.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  const handleSubmit = (data) => {
    (async () => {
      try {
        const response = await axiosInstance.post('/products', data);
         dispatch(_add_product(response.data));
        nav('/admin');
      } catch (error) {
        console.error('Error adding product:', error);
      }
    })();
  };

  const handleEdit = (data, id) => {
    (async () => {
      try {
        const response = await axiosInstance.patch(`/products/${id}`, data);
        dispatch(_edit_product(response.data));
        nav('/admin');
      } catch (error) {
        console.error('Error editing product:', error);
      }
    })();
  };

  const handleRemove = (id) => {
    (async () => {
      try {
        await axiosInstance.delete(`/products/${id}`);
        dispatch(_remove_product(id));
        nav('/admin');
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    })();
  };

  const methodAndData = {
    products,
    brands,
  
    handleEdit,
    handleSubmit,
    handleRemove
  };

  return (
    <DataConText.Provider value={methodAndData}>
      {children}
    </DataConText.Provider>
  );
}

export { DataConText, DataProvider };
