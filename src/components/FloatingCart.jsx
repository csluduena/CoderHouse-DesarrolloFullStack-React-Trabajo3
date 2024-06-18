import { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/floatingCart.css';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const FloatingCart = () => {
    const { calcularCantidad } = useContext(CartContext);
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (location.pathname === '/cart' || calcularCantidad() === 0) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }, [location.pathname, calcularCantidad]);

    if (!isVisible) {
        return null;
    }

    const cantidadProductos = calcularCantidad();

    return (
        <div className="floating-cart">
            <Link to="/cart">
                <div className="groupHo">
                    <h1 className='checkO'>
                        Check Out
                        {cantidadProductos > 0 && (
                            <span className="product-count">
                                &nbsp;x{cantidadProductos}
                            </span>
                        )}
                    </h1>
                    <img
                        src="/img/carritoICO.png"
                        alt="Shopping Cart"
                        className="cart-icon"
                        onMouseOver={(e) => (e.currentTarget.src = '/img/carritoICO2.png')}
                        onMouseOut={(e) => (e.currentTarget.src = '/img/carritoICO.png')}
                    />
                </div>
            </Link>
        </div>
    );
}

export default FloatingCart;