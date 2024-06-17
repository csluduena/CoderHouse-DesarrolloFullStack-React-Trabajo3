import React, { useContext } from 'react'
import { useState } from 'react';
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({ producto }) => {
    const [messages, setMessages] = useState([]);
    const handleBuyNow = () => {
        const newMessage = { id: Date.now(), text: 'Product added, check your cart' };
        setMessages([...messages, newMessage]);

        setTimeout(() => {
            setMessages(prevMessages => prevMessages.filter(msg => msg.id !== newMessage.id));
        }, 3000);
    };


    const { agregarAlCarrito } = useContext(CartContext);

    return (
        <div className="producto">
            <h1 className='productNomCFG'>{producto.nombre}</h1>
            <img className='imgCfg' src={producto.imagen} />
            <p className='priceCFG'>Price ${producto.precio}</p>
            <p className='productDesCFG'>{producto.descripcion}</p>
            <button className='botonBuy' onClick={handleBuyNow}>¡Buy Now!</button>
            <button onClick={() => agregarAlCarrito(producto)}>Add to Cart</button>
            <div className="popup-container">
                {messages.map((message, index) => (
                    <div key={message.id} className="popup" style={{ bottom: `${20 + index * 60}px` }}>
                        {message.text}
                    </div>
                ))}
            </div>
        </div>
    );
};
