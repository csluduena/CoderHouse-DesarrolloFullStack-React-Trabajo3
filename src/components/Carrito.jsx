import React, { Fragment, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, calcularTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);

    return (
        <div>
            {carrito.map((prod) => {
                return (
                    <Fragment key={prod.id}>
                        <h1>{prod.nombre}: ${prod.precio}</h1>
                        <button onClick={() => { eliminarProducto(prod) }}>❌</button>
                    </Fragment>
                )

            })}
            {
                carrito.length > 0 ?
                    <>
                        <h2>Total: ${calcularTotal()}</h2>
                        <button onClick={vaciarCarrito}>Delete Cart</button>
                        <Link to="/finalizar-compra">Buy</Link>
                    </> :
                    <h2>Cart Empty :/</h2>
            }
        </div>
    )
}

export default Carrito