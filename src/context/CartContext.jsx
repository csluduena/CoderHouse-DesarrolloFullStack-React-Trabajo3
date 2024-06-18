import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        const productoEncontrado = carrito.find(prod => prod.id === producto.id);
        if (productoEncontrado) {
            setCarrito(carrito.map(prod =>
                prod.id === producto.id ? { ...prod, cantidad: prod.cantidad + 1 } : prod
            ));
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        }
    }

    const calcularCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const calcularTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0).toFixed(2);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const eliminarProducto = (producto) => {
        setCarrito(carrito.filter(prod => prod.id !== producto.id));
    }

    const incrementarProducto = (producto) => {
        setCarrito(carrito.map(prod => {
            if (prod.id === producto.id) {
                return { ...prod, cantidad: prod.cantidad + 1 };
            }
            return prod;
        }));
    }

    const decrementarProducto = (producto) => {
        setCarrito(carrito.map(prod => {
            if (prod.id === producto.id && prod.cantidad > 1) {
                return { ...prod, cantidad: prod.cantidad - 1 };
            }
            return prod;
        }));
    }

    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            calcularCantidad,
            calcularTotal,
            vaciarCarrito,
            eliminarProducto,
            incrementarProducto,
            decrementarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}
