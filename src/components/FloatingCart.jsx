import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/floatingCart.css';
import { CartContext } from '../context/CartContext';

const FloatingCart = () => {
    const { calcularCantidad } = useContext(CartContext);
    const location = useLocation();

    if (location.pathname === '/carrito') {
        return null;
    }

    if (calcularCantidad() === 0) {
        return null;
    }

    return (
        <div className="floating-cart">
            <a href="/carrito">
                <div className="groupHo">
                    <h1 className='checkO'>Check Out</h1>
                    <img
                        src="/img/carritoICO.png"
                        alt="Shopping Cart"
                        className="cart-icon"
                        onMouseOver={(e) => (e.currentTarget.src = '/img/carritoICO2.png')}
                        onMouseOut={(e) => (e.currentTarget.src = '/img/carritoICO.png')}
                    />
                </div>
            </a>
        </div>
    );
}

export default FloatingCart;
