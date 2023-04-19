
import './App.css';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailCointainer/itemDetailContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
