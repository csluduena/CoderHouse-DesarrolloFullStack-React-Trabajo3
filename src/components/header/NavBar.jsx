import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { CartWidget } from './CartWidget';
import '../../css/main.css'; // Asegúrate de importar tu archivo CSS

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
        <nav style={{ display: 'flex', fontSize: '30px', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#333333', color: 'white' }}>
            <div className='mainTitleCFG'>
                <NavLink to="/" style={{ fontSize: '30px', fontFamily: 'MuseoSans-900' }}>GuitarStore</NavLink>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                {categories.map((category) => (
                    <NavLink key={category.id} to={`/category/${category.id}`} className="navRoutes" style={{ fontSize: '30px', margin: '0 10px', textDecoration: 'none' }}>
                        {category.nombre}
                    </NavLink >
                ))}
            </div>
            <CartWidget />
        </nav>
    )
}
