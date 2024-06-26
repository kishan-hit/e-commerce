import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";

import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserProfilePage from "./pages/user/UserProfilePage";

import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    // <>
      <BrowserRouter>
        <ScrollToTop />
        <HeaderComponent />
        <Routes>
          <Route element={<RoutesWithUserChatComponent />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/product-details' element={<ProductDetailsPage />} />
            <Route path='/product-details/:id' element={<ProductDetailsPage />} />
            <Route path='/product-list' element={<ProductListPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Route>
          <Route element={<ProtectedRoutesComponent admin={false} />} >
            <Route path='/user' element={<UserProfilePage />} />
            <Route path='/user/cart-details' element={<UserCartDetailsPage />} />
            <Route path='/user/order-details' element={<UserOrderDetailsPage />} />
            <Route path='/user/my-orders' element={<UserOrdersPage />} />
          </Route >
          <Route element={<ProtectedRoutesComponent admin={true} />}>
            <Route path='/admin/analytics' element={<AdminAnalyticsPage />} />
            <Route path='/admin/chats' element={<AdminChatsPage />} />
            <Route path='/admin/create-new-product' element={<AdminCreateProductPage />} />
            <Route path='/admin/edit-product' element={<AdminEditProductPage />} />
            <Route path='admin/edit-user' element={<AdminEditUserPage />} />
            <Route path='/admin/order-details' element={<AdminOrderDetailsPage />} />
            <Route path='/admin/orders' element={<AdminOrdersPage />} />
            <Route path='/admin/products' element={<AdminProductsPage />} />
            <Route path='/admin/users' element={<AdminUsersPage />} />
          </Route>
          {/* To handle urls which are not valid */}
          <Route path='*' element="Page not exists" />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    // </>
  );
}

export default App;
