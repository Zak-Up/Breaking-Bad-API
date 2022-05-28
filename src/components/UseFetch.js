import { useState, useEffect } from 'react';
import Curiosidades from './Curiosidades';
import Footer from './Footer';
import Loader from './Loader'

const useFetch = () => {
    const url = 'https://breakingbadapi.com/api/characters';
    const [data, setData] = useState();
    const [search, setSearch] = useState('');

    const fetchApi =  async () => {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);

        setData(json);
    }

    const searcher = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    const results = !search ? data : data.filter((char) => char.name.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        fetchApi();
    },[url]);

    return (
        <div>
            <span className='label'>Encuentra tu personaje favorito: </span>
            <input 
                value={search} 
                type='text' 
                placeholder='Buscar...' 
                className='form-control'
                onChange={searcher}>
            </input>
            {
                !data ? <Loader/> :
                results.map(el => {
                    return <div  className='card mb-3' style={{maxWidth: '420px'}}>
                                <div className='row g-0'>
                                    <div className='col-md-4'>
                                        <img src={el.img} alt='img' key={el.name}></img>
                                    </div>
                                    <div className='col-md-8'>
                                        <div className='card-body'>
                                            <h6 className='card-title'>{el.name}</h6>
                                            <h7><span>Actor:</span> {el.portrayed}</h7>
                                            <br/>
                                            <h7><span>Apodo:</span> {el.nickname}</h7>
                                            <br/>
                                            <h7><span>Ocupación:</span> {el.occupation}</h7>
                                        </div>
                                    </div>
                                        
                                </div>
                            </div> 
                            
                })
                
            }
            <hr/>
            
            <Footer/>
        </div>
    )
}

export default useFetch

