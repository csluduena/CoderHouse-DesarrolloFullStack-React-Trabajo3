import React from 'react'
import data from "../data/productos.json"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const CargarProductos = () => {
    return (
        <div>Loading item...</div>
    )
}
