import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import NotFound from './components/NotFound';
import { ItemListContainer } from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from './components/Carrito';
import { CartProvider } from './context/CartContext';
import { Suma } from './components/Suma';
import { Checkout } from './components/Checkout';
import { CargarProductos } from './components/CargarProductos';
import ScrollToTop from './components/ScrollToTop';
import FloatingCart from './components/FloatingCart';

import './css/main.css';

function App() {
    return (
        <CartProvider>
            <Router>
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
                <FloatingCart />
                <Footer />
            </Router>
        </CartProvider>
    )
}

export default App;
