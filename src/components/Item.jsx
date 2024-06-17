import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const Item = ({ producto }) => {

    const { agregarAlCarrito } = useContext(CartContext);

    return (
        <div className="producto">
            <img className='imgCfg' src={producto.imagen} />
            <h2 className='productNomCFG'>{producto.nombre}</h2>
            <p className='priceCFG'>Price ${producto.precio}</p>
            <p className='productDesCFG'>{producto.descripcion}</p>
            <Link to={`/item/${producto.id}`} className='moreInfo'>→ More Info ←</Link>
            <button onClick={() => agregarAlCarrito(producto)} className='add2Cart'>Add to Cart</button>
        </div>
    )
}
