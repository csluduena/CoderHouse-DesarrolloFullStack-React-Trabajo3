import React, { Fragment, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../css/cart.css';

const Carrito = () => {
    const { carrito, calcularTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext)
    
    const contarCantidad = (prod) => {
        return carrito.reduce((acc, item) => {
            return item.id === prod.id ? acc + 1 : acc;
        }, 0);
    };

    const agruparProductos = () => {
        const uniqueProducts = Array.from(new Set(carrito.map(prod => prod.id)));
        return uniqueProducts.map(id => {
            const producto = carrito.find(prod => prod.id === id);
            const cantidad = contarCantidad(producto);
            const total = cantidad * producto.precio;
            return {
                ...producto,
                cantidad,
                total
            };
        });
    };

    return (
        <div className="carrito-container">
            {agruparProductos().map((prod) => {
                return (
                    <Fragment key={prod.id}>
                        <div className="producto-container">
                            <h1 className="producto-precio">{prod.nombre} x {prod.cantidad}u: ${prod.total}</h1>
                            <button className="delete-button" onClick={() => { eliminarProducto(prod) }}>Remove {prod.cantidad}❌</button>
                            <img src={prod.imagen} alt={prod.nombre} className="producto-imagen" />
                        </div>
                    </Fragment>
                )
            })}
            {
                carrito.length > 0 ?
                    <>
                        <h2 className='totalPrice'>Total: <span className='totalAmount'>${calcularTotal()}</span></h2>
                        <div className="botonesCarrito">
                            <button className='borrarBoton moreInfo' onClick={vaciarCarrito}>Delete Cart</button>
                            <Link to="/finalizar-compra" className='add2Cart'>Order Now</Link>
                        </div>
                    </> :
                    <h2 className='emptyCartMessage'>Cart Empty</h2>
            }
        </div>
    )
}

export default Carrito;
