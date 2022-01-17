import './App.css';
import { Navbar } from './component/Navbar';
import { Shop } from './component/Shop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Shop />
      </div>
    </div>
  );
}

export default App;
