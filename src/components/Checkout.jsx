import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";


export const Checkout = () => {

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");

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
                vaciarCarrito();
            })
    }

    if (docId) {
        return (
            <>
                <h1>Thanks for your purchase!</h1>
                <p>To track your order, the identifier is this: {docId}</p>
            </>
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingrese su e-mail" {...register("email")} />
                <button type="submit">Buy Now</button>
            </form>
        </div>
    )
}
