import CartWiget from '../cartWidget/cartWidget';
import { NavLink, Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="primerNav">
            <Link>
            <h3>Championship</h3>
            </Link>
            <div>
                <NavLink to={"/category/botines"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Botines</NavLink>
                <NavLink to={"/category/remeras"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
                <NavLink to={"/category/pelotas"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pelotas</NavLink>
            </div>

            <CartWiget />
        </nav>
    );
}

export default NavBar;

