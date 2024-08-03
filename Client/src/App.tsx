
import "./App.scss";
import Header from "./admin/Header";
import Home from "./admin/Home";
import { Outlet, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LayoutAdmin from "./admin/LayoutAdmin";


import Add from "./admin/Add";
import Footer from "./admin/Footer";
import Edit from "./admin/Edit";
import HeaderPage from "./page/HeaderPage";
import LayoutPage from "./page/LayoutPage";
import HomePage from "./page/HomePage";
import FooterPage from "./page/FooterPage";
import ProductsPage from "./page/ProductsPage";
import Detail from "./page/Detail";
import Login from "./page/Login";
import Register from "./page/Register";

import PrivateRoute from "./page/Private";


function App() {
  
   
 

  return(
   <Routes>
 {/* Admin Routes */}
 <Route path="/admin/*" element={<PrivateRoute element={<LayoutAdmin><Header /><Outlet /><Footer /></LayoutAdmin>} adminRequired={true} />}>
        <Route index element={<Home />} />
        <Route path="add-products" element={<Add />} />
        <Route path="edit-products/:id" element={<Edit />} />
      </Route>

      {/* Common Routes */}
      <Route path="/" element={<LayoutPage><HeaderPage /><HomePage /><FooterPage /></LayoutPage>} />
      <Route path="/products" element={<LayoutPage><HeaderPage /><ProductsPage  /><FooterPage /></LayoutPage>} />
      <Route path="/detail-product/:id" element={<LayoutPage><HeaderPage /><Detail /><FooterPage /></LayoutPage>} />
      <Route path="/login" element={<LayoutPage><HeaderPage /><Login /><FooterPage /></LayoutPage>} />
      <Route path="/register" element={<LayoutPage><HeaderPage /><Register /><FooterPage /></LayoutPage>} />
    </Routes>
   
 
  )
}

export default App
