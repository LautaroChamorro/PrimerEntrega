import { useContext } from 'react';
import Carrito from './assets/carrito.png'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () =>{
    const { totalQuantity } = useContext(CartContext)
    return(
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img src={Carrito} alt="imagenCarrito"/>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget;