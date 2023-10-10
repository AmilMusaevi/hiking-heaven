import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Products from "../pages/products";
import Cart from "../pages/cart";
import Wishlist from "../pages/wishlist";
import SingleProduct from "../pages/singleProduct";
import ScrollTop from "../components/ScrollTop";
import Contact from "../pages/contact";
const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:title" element={<SingleProduct />} />
                <Route path="/shop" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="*" element={<ErrorPage />}/> */}
            </Routes>
            <ScrollTop />
        </>
    );
};

export default AppRouter;
