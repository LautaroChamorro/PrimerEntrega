
import './App.css';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailCointainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting={'Todos los productos'} />}/>
          <Route exact path="/category/:categoryId" element={<ItemListContainer greeting={'Productos por categoria'} />}/>
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />}/>
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="**" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
