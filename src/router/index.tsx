import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Product from "../pages/products";
import Cart from "../pages/cart";
import Wishlist from "../pages/wishlist";
import ScrollTop from "../components/ScrollTop";
const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                {/* <Route path="*" element={<ErrorPage />}/> */}
            </Routes>
            <ScrollTop />
        </>
    );
};

export default AppRouter;
