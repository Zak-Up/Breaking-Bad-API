import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Inicio from './components/pages/Inicio';
import Character from './components/pages/Character';
import Items from './components/pages/Items';

function App() {

  return (
    <div className="App">

        <Navbar/>
          <Routes>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/character' element={<Character/>}></Route>
            <Route path='/items' element={<Items/>}></Route>
          </Routes>

    </div>
  );
}

export default App;
