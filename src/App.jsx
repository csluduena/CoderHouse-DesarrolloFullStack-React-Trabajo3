import "./css/main.css"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header"
import NotFound from "./components/NotFound"
import { ItemListContainer } from "./components/ItemListContainer"
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";
import { CartProvider } from "./context/CartContext";
import { Suma } from "./components/Suma";
import { Checkout } from "./components/Checkout";
import { CargarProductos } from "./components/CargarProductos";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
            <ScrollToTop />
                <Header />
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Welcome To GuitarStore" />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer greeting="Welcome To GuitarStore" />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="/suma" element={<Suma />} />
                    <Route path="/finalizar-compra" element={<Checkout />} />
                    <Route path="/cargar-productos" element={<CargarProductos />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    )
}

export default App