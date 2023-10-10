import React from "react";

import AppRouter from "./router";

import "./styles/main.scss";
import Header from "./layout/header/header";
import Footer from "./layout/footer";
import HeaderInfo from "./layout/header/header/component/HeaderTop";
import ScrollToTopPages from "./components/ScrollToTopPages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
    return (
        <>
            <ScrollToTopPages />
            <HeaderInfo />
            <Header />
            <AppRouter />
            <Footer />
        </>
    );
}

export default App;
