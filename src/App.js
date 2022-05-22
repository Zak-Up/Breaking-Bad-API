import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const url = 'https://breakingbadapi.com/api/characters';
  const [data, setData] = useState();

  const fetchApi = async () => {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
    setData(json)
  }

  useEffect(() => {
    fetchApi();
  }, []);

  
  return (
    <div className="App">
      <h1>Breaking Bad</h1>
      {
        !data ? 'Cargando...' :
        data.map((a, b) => {
          return <div className='card'>
                  <h2>{a.name}</h2>
                  <img key={a.char_id} src={a.img} alt=''/>
                  <p>Apodo: {a.nickname}</p>
                  <p>Actor: {a.portrayed}</p>
                  <p>Ocupacion: {a.occupation}</p>
                </div>
        })
      }
    </div>
  );
}

export default App;
