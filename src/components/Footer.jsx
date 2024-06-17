import { NavLink } from 'react-router-dom';
import categories from "../data/categorias.json";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center' }}>
            <div>
                <NavLink to="/" style={{ fontSize: '30px', margin: '0 10px', color: 'white', textDecoration: 'none' }}>
                    Home
                </NavLink>
                {categories.map(categoria => (
                    <NavLink key={categoria.id} to={`/category/${categoria.id}`} style={{ fontSize: '30px', margin: '0 10px', color: 'white', textDecoration: 'none' }}>
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
