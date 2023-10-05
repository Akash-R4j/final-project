import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Shop from '../pages/Shop'
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Auth from '../pages/admin/Auth'
import Categories from '../pages/admin/category/Categories'
import CategoryCreateOrUpdate from '../pages/admin/category/CategoryCreateOrUpdate'
import Products from '../pages/admin/products/Products'
import ProductCreateOrUpdate from '../pages/admin/products/ProductCreateOrUpdate'
import Users from '../pages/admin/users/Users'
import UserCreateOrUpdate from './../pages/admin/users/UserCreateOrUpdate';
import Profile from '../pages/admin/Profile'

export default function Router() {
  return (
    <Routes>
        {/* home page */}
        <Route path='/' element={<Home />} />
        
        {/* about page */}
        <Route path='/about' element={<About />} />
        
        {/* shop page */}
        <Route path='/shop' element={<Shop />} />
        
        {/* product details page */}
        <Route path='/product-detail/:id' element={<ProductDetail />} />
        
        {/* cart page */}
        <Route path='/cart' element={<Cart />} />
       
        {/* checkout page  */}
        <Route path='/checkout' element={<Checkout />} />

        {/* admin routes  */}
        <Route path='/admin' element={<Auth />}>

            {/* profile page */}
            <Route path='profile' element={<Profile />} />

            {/* categories routes */}
            <Route path='categories' element={<Categories />} />
            <Route path='category/create' element={<CategoryCreateOrUpdate />} />
            <Route path='category/edit/:id' element={<CategoryCreateOrUpdate />} />
            
            {/* products routes */}
            <Route path='products' element={<Products />} />
            <Route path='product/create' element={<ProductCreateOrUpdate />} />
            <Route path='product/edit/:id' element={<ProductCreateOrUpdate />} />

            {/* users routes */}
            <Route path='users' element={<Users />} />
            <Route path='user/create' element={<UserCreateOrUpdate />} />
            <Route path='user/edit/:id' element={<UserCreateOrUpdate />} />
        </Route>
    </Routes>
  )
}
