import CartWiget from '../widget/cartWidget';
const NavBar = () => {
    return (
        <nav className="primerNav">
            <h1>Champions</h1>
            <div>
                <button>Botines</button>
                <button>Pelotas</button>
                <button>Remeras</button>
            </div>
            <CartWiget />
        </nav>
    );
}

export default NavBar;