import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import Modal from "./Adds/Modal";
import "../css/checkout.css";

export const Checkout = () => {
    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [docId, setDocId] = useState("");
    const [nombreCliente, setNombreCliente] = useState("");
    const [showModal, setShowModal] = useState(false);

    const comprar = (data) => {
        if (!data.nombre || !data.email) {
            setShowModal(true);
            return; // No continuar con la compra si falta información
        }

        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal(),
            fecha: Timestamp.now(),
        };

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id);
                setNombreCliente(data.nombre);
                vaciarCarrito();
            });
    };

    if (docId) {
        return (
            <div className="checkout-msj">
                <h1 className="msjSell1">Thanks for your purchase, {nombreCliente}!</h1>
                <h3 className="msjSell">We send you an email with all the purchase information.</h3>
                <p className="msjSell">To track your order, the identifier is this:</p>
                <h4>{docId}</h4>
            </div>
        )
    }

    return (
        <div className="checkout-container">
            {showModal && <Modal />} {/* Mostrar el modal si showModal es true */}
            <form className="checkout-form" onSubmit={handleSubmit(comprar)}>
                <input
                    type="text"
                    placeholder="Name"
                    {...register("nombre", { required: true })}
                />
                {errors.nombre && <p className="error-message">Name is required</p>}
                <input
                    type="email"
                    placeholder="E-mail"
                    {...register("email", { required: true })}
                />
                {errors.email && <p className="error-message">Email is required</p>}
                <button className="add2Cart" type="submit">
                    Buy Now
                </button>
            </form>
        </div>
    );
};
