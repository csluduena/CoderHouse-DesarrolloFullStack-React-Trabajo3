import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import '../css/checkout.css';

export const Checkout = () => {
    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    const [docId, setDocId] = useState("");
    const [nombreCliente, setNombreCliente] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal(),
            fecha: Timestamp.now()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id);
                setNombreCliente(data.nombre);
                vaciarCarrito();
            })
    }

    if (docId) {
        return (
            <div className="checkout-msj">
                <h1 className="msjSell1">Thanks for your purchase, {nombreCliente}!</h1>
                <h3 className="msjSell">A mail was send you with all the purchase information</h3>
                <p className="msjSell">To track your order, the identifier is this:</p>
                <h4>{docId}</h4>
            </div>
        )
    }

    return (
        <div className="checkout-container">
            <form className="checkout-form" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Name" {...register("nombre")} />
                <input type="email" placeholder="E-mail" {...register("email")} />
                <button className="add2Cart" type="submit">Buy Now</button>
            </form>
        </div>
    )
}