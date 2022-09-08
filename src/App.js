import logo from './logo.svg';
import './App.css';
import Grocery from './components/Grocery';
import GroceryInput from './components/GroceryInput';
import GroceryList from './components/GroceryList';

function App() {
  return (
    <div className="App">
      <GroceryInput/>
      <Grocery/>
     
    </div>
  );
}

export default App;
