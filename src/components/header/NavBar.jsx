import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { CartWidget } from './CartWidget';
import '../../css/main.css';

export const NavBar = () => {
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        const categoriasRef = collection(db, "categorias");
        getDocs(categoriasRef)
            .then((res) => {
                setCategories(res.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                }));
            })
    }, [])

    return (
        <nav className="navbar">
            <div className='mainTitleCFG'>
                <NavLink to="/" className="navbar-title">GuitarStore</NavLink>
            </div>

            <div className="navbar-categories">
                {categories.map((category) => (
                    <NavLink key={category.id} to={`/category/${category.id}`} className="navRoutes">
                        {category.nombre}
                    </NavLink >
                ))}
            </div>
            <CartWidget />
        </nav>
    )
}

