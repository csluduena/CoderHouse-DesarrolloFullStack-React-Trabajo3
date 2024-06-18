import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const Item = ({ producto }) => {
    const { agregarAlCarrito } = useContext(CartContext);
    const [messages, setMessages] = useState([]);

    const handleBuyNow = () => {
        const newMessage = { id: Date.now(), text: 'Product added, check your cart' };
        setMessages([...messages, newMessage]);

        setTimeout(() => {
            setMessages(prevMessages => prevMessages.filter(msg => msg.id !== newMessage.id));
        }, 3000);
    };

    return (
        <div className="producto">
            <h2 className='productNomCFG'>{producto.nombre}</h2>
            <img className='imgCfg' src={producto.imagen} />
            <p className='priceCFG'>Price ${producto.precio}</p>
            <p className='productDesCFG'>{producto.descripcion}</p>
            <div className="buttonsStore">
                <Link to={`/item/${producto.id}`} className='moreInfo'>More Info</Link>
                <button
                    onClick={() => {
                        handleBuyNow();
                        agregarAlCarrito(producto);
                    }}
                    className='add2Cart'
                >
                    Add to Cart
                </button>
            </div>
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
