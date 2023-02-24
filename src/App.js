//import logo from './logo.svg';
import './App.css';
import CreateProduct from './Components/CreateProduct';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
      <h3>Crud Application</h3>
      <CreateProduct />
      <ProductList />
    </div>
  );
}

export default App;
