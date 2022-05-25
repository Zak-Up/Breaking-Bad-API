import './App.css';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from './components/navigation/Navbar';
import Inicio from './components/pages/Inicio';
import Character from './components/pages/Character';
import Items from './components/pages/Items';

function App() {
  const url = 'https://breakingbadapi.com/api/characters';

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
