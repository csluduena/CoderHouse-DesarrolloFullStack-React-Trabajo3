import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import '../css/footer.css';

const Footer = () => {
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
        <footer className="footer">
            <div>
                <NavLink to="/" className="footer-nav-link">
                    GuitarStore
                </NavLink>
                {categories.map((categoria) => (
                    <NavLink key={categoria.id} to={`/category/${categoria.id}`} className="footer-nav-link">
                        {categoria.nombre}
                    </NavLink>
                ))}
            </div>
            <div style={{ marginTop: '20px' }}>
                <p className='textFooter'>
                    GuitarStore is a renowned guitar shop based in London, offering the best brands in the industry since August 1979.
                </p>
            </div>
        </footer>
    )
}

export default Footer;
